import React, { useEffect, useRef, useState } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const [isReady, setIsReady] = useState(false);

  // Load GLTF model
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Load FBX animations
  const idleFBX = useFBX('/models/animations/idle.fbx');
  const saluteFBX = useFBX('/models/animations/salute.fbx');
  const clappingFBX = useFBX('/models/animations/clapping.fbx');
  const victoryFBX = useFBX('/models/animations/victory.fbx');

  const animations = {
    idle: idleFBX.animations[0],
    salute: saluteFBX.animations[0],
    clapping: clappingFBX.animations[0],
    victory: victoryFBX.animations[0],
  };

  // Assign names to animations
  Object.keys(animations).forEach((key) => {
    if (animations[key]) animations[key].name = key;
  });

  // Apply animations
  const { actions } = useAnimations(
    Object.values(animations).filter(Boolean),
    group.current
  );

  // Set animation readiness
  useEffect(() => {
    if (actions && !isReady) {
      setIsReady(true);
    }
  }, [actions, isReady]);

  // Play the selected animation
  useEffect(() => {
    if (isReady && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    }
  }, [isReady, animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      {Object.keys(nodes).map((key) => (
        nodes[key].isSkinnedMesh ? (
          <skinnedMesh
            key={key}
            name={key}
            geometry={nodes[key].geometry}
            material={materials[nodes[key].material.name]}
            skeleton={nodes[key].skeleton}
            morphTargetDictionary={nodes[key].morphTargetDictionary}
            morphTargetInfluences={nodes[key].morphTargetInfluences}
          />
        ) : null
      ))}
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
