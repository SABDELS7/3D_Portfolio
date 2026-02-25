import SliderItem from "./SliderCertifItem";

const Slider = () => {
  const upperSlider = [
    "/assets/hackerRank_java.jpg",
    "/assets/java_certif.jpg",
    "/assets/ccna_1.jpg",
    "/assets/react.jpg",
    "/assets/git_certif.jpg",
    "/assets/coursera_figma.jpg",
    "/assets/Oracle java.jpg",
    "/assets/java badge.jpg",
    "/assets/oci.png",
  ];

  return (
    <div className="container mx-auto">
      <p className="head-text mt-20 mb-20 ml-9">Certifications</p>

      <SliderItem
        images={upperSlider}
      />
    </div>
  );
};

export default Slider;