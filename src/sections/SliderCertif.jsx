import SliderItem from "./SliderCertifItem";

const Slider = () => {
  const upperSlider = [
    "assets/hackerRank_java.jpg",
    "assets/java_certif.jpg",
    "assets/ccna_1.jpg",
    "assets/react.jpg",
    "assets/git_certif.jpg",
    "assets/coursera_figma.jpg",
    // "assets/redux_icon.png",
    // "assets/tailwindcss.png",
    // "assets/bootstrap_icon.png",
    // "assets/typescript.png",
    // "assets/rabbitMQ.png",
  ];

//   const lowerSlider = [
//     "assets/12.png",
//     "assets/13.png",
//     "assets/14.png",
//     "assets/15.png",
//     "assets/16.png",
//     "assets/17.png",
//     "assets/18.png",
//     "assets/19.png",
//     "assets/20.png",
//     "assets/21.png",
//     "assets/22.png",
//   ];

  return (
    <div className="container mx-auto">
      <p className="head-text mt-20 mb-20 ml-9">Certifications</p> 
      <SliderItem images={upperSlider} from={0} to={"-100%"} />
      {/* <SliderItem images={lowerSlider} from={"-100%"} to={0} /> */}
    </div>
  );
};

export default Slider;