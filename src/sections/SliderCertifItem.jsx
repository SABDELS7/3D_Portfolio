import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SliderItem = ({ images }) => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const startAnimation = () => {
    if (!sliderRef.current) return;

    const totalWidth = sliderRef.current.scrollWidth;
    const singleSetWidth = totalWidth / 2;

    controls.start({
      x: -singleSetWidth,
      transition: {
        duration: 140,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const stopAnimation = () => controls.stop();

  return (
    <>
      {/* SLIDER */}
      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={sliderRef}
          animate={controls}
          className="flex"
        >
          {[...images, ...images].map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Certification"
              className="h-40 w-80 pr-16 cursor-pointer object-cover rounded-xl shadow-lg"
              onMouseEnter={stopAnimation}
              onMouseLeave={startAnimation}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Certification Large"
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </>
  );
};

export default SliderItem;