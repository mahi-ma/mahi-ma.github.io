import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../../css/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <div className="flex about-top-banner">
          <motion.div
            className="about-text"
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Mahima Sharma</h1>
            {
              window.innerWidth >= 786 &&
              <div className="my-8">
                <TypeAnimation
                  className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                  cursor={true}
                  sequence={[
                    "A Mern-stack Developer",
                    3000,
                    "A Full-stack Developer",
                    3000,
                    "A Front-end Developer",
                    3000,
                    "A Back-end Developer",
                    3000,
                    "A Cloud Computing Enthusiast",
                    3000,
                  ]}
                  wrapper="div"
                  repeat={Infinity}
                />
              </div>
            }
            <p className="info-first-text text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I am a software engineer, a web developer, a mobile developer, a designer, a competitive programmer, a problem solver and whatever comes with software engineering :p
              <br /><br />
              I have experience of more than 3 years in the software industry and ready to take on any challenge that comes my way.
              With years of experience in full-stack web development, I specialize in using React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] md:text-left mb-10">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Mahima Sharma
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+1 XXX XXX XXXX
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                mahimasharma0309@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Atlanta, GA
              </h2>
            </div>
            <a
              href="https://drive.google.com/file/d/1C0yFQjWms5yc6TaysK8scfeP3ou4xsvS/view?usp=sharing"
              target="blank"
            >
              <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%] mt-10">
                <button className="primary-button">
                  <span>Download Resume</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </div>

            </a>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
