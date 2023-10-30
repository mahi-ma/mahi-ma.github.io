import React from "react";
// import Lottie from "react-lottie"; 
import { motion } from "framer-motion";
import readingBook from "../../../assets/reading-book.json";
import { BottomLine } from "../../atoms";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="lg:pt-24">
      <div className="mb-20">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Journey</span>
        </h1>
        <BottomLine />
      </div>
      <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="about-bg.png"
              alt="Mahima Sharma"
              className="lg:p-16 w-70 h-70 transform translate-y-[-12%]"
              title="Mahima Sharma"
            />

          </motion.div>
    </div>
  );
};

export default Education;
