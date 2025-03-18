import { motion } from "framer-motion";

const SliderItem = ({ images, from, to }) => {
  return (
    // <div className="flex MyGradient overflow-hidden">
    //   <motion.div
    //     initial={{ x: `${from}` }}
    //     animate={{ x: `${to}` }}
    //     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    //     className="flex flex-shrink-0"
    //   >
    //     {images.map((image, index) => {
    //       return <img className="h-24 w-36 pr-10" src={image} key={index} alt="Technologies" />;
    //     })}
    //   </motion.div>

    //   <motion.div
    //     initial={{ x: `${from}` }}
    //     animate={{ x: `${to}` }}
    //     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    //     className="flex flex-shrink-0"
    //   >
    //     {images.map((image, index) => {
    //       return <img className="h-24 w-36 pr-10" src={image} key={index} />;
    //     })}
    //   </motion.div>
    // </div>


    // <div className="flex overflow-hidden MyGradient">
    //   {/* First Row of Logos */}
    //   <motion.div
    //     initial={{ x: `${from}` }}
    //     animate={{ x: `${to}` }}
    //     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    //     className="flex flex-shrink-0"
    //   >
    //     {images.map((image, index) => (
    //       <div
    //         key={index}
    //         className="h-24 w-36 pr-10 flex items-center justify-center hover:scale-105 transition-transform duration-300"
    //       >
    //         <img
    //           src={image}
    //           alt="Technologies"
    //           className="h-16 w-16 object-contain"
    //         />
    //       </div>
    //     ))}
    //   </motion.div>

    //   {/* Second Row of Logos (Duplicated for seamless looping) */}
    //   <motion.div
    //     initial={{ x: `${from}` }}
    //     animate={{ x: `${to}` }}
    //     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    //     className="flex flex-shrink-0"
    //   >
    //     {images.map((image, index) => (
    //       <div
    //         key={index}
    //         className="h-24 w-36 pr-10 flex items-center justify-center hover:scale-105 transition-transform duration-300"
    //       >
    //         <img
    //           src={image}
    //           alt="Technologies"
    //           className="h-16 w-16 object-contain"
    //         />
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>

    <div className="flex overflow-hidden py-8">  {/* bg-gray-900*/}
      {/* First Row of Logos */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-24 w-36 pr-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={image}
              alt="Technologies"
              className="h-16 w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>

      {/* Second Row of Logos (Duplicated for seamless looping) */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-24 w-36 pr-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={image}
              alt="Technologies"
              className="h-16 w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderItem;