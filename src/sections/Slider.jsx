import SliderItem from "./SliderItem";

const Slider = () => {
  const upperSlider = [
    "assets/java_logo_logos_icon.png",   
    "assets/spring_boot_icon.png",       
    "assets/js_logo_logos_icon.png",     
    "assets/react.svg",                   
    "assets/redux_icon.png",             
    "assets/nextjs_icon.png",
    "assets/typescript_icon.png",
    "assets/angular_logo_logos_icon.png",
    "assets/node_icon.png",
    "assets/express.png",
    "assets/html.png",
    "assets/css.png",
    "assets/tailwind_icon.png",
    "assets/bootstrap_icon.png",
    "assets/rabbitMQ.png",
    "assets/xml.png",
    "assets/vs_code.png",
    "assets/vs.png",
    "assets/intellij.png",
  ];

  const lowerSlider = [
    "assets/c_sharp_icon.png",
    // "assets/dot_net.png",
    "assets/php_icon.png",
    "assets/oracle_icon.png",
    "assets/mysql_icon.png",
    "assets/postgresql.png",
    "assets/sqlite.png",
    "assets/mongodb.png",
    "assets/git.png",
    "assets/github.svg",
    "assets/docker.png",
    "assets/kubernetes_icon.png",
    "assets/jenkins_icon.png",
    // "assets/aws.png",
    // "assets/azure_icon.png",
    "assets/windows_icon.png",
    "assets/linux_icon.png",
    "assets/figma.png",
    "assets/canva.png",
    "assets/kafka.png",
  ];

  return (
    <div className="container mx-auto">
      <p className="head-text mb-20 ml-9">Tech Stack</p> 
      <SliderItem images={upperSlider} from={0} to={"-100%"} />
      <SliderItem images={lowerSlider} from={"-100%"} to={0} />
    </div>


    // <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
    //   <div className="container mx-auto px-4">
    //     {/* Heading */}
    //     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
    //       Tech Stack
    //     </h2>

    //     {/* Upper Slider */}
    //     <div className="mb-12">
    //       <SliderItem images={upperSlider} from={0} to={"-100%"} />
    //     </div>

    //     {/* Lower Slider */}
    //     <div className="mt-12">
    //       <SliderItem images={lowerSlider} from={"-100%"} to={0} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;