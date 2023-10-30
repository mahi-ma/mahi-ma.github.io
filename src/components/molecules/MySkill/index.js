import React from "react";
import "./MySkill.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaAngular,
  FaAws,
  FaJava,
  FaDocker
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
  SiRedux,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPuppeteer,
  SiJest,
  SiMysql,
  SiGraphql,
  SiFigma,
  SiDocker,
  SiOpenai
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import man from "../../../assets/man.json";
import { BottomLine } from "../../atoms";

const MySkill = () => {
  const frontend = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Angular", icon: <FaAngular className="text-red-400" /> },
    { title: "Redux", icon: <SiRedux className="text-blue-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "Sass", icon: <DiSass className="text-pink-400" /> },
    { title: "Puppeteer", icon: <SiPuppeteer className="text-green-400" /> },
    { title: "Jest", icon: <SiJest className="text-red-400" /> },
  ];
  const backend = [
    { title: "Python", icon: <FaPython className="text-yellow-500" /> },
    { title: "Java", icon: <FaJava className="text-white-500" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    { title: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { title: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];
  const cloudcomputing = [
    { title: "AWS", icon: <FaAws className="text-yellow-400" /> },
    { title: "Azure", icon: <SiMicrosoftazure className="text-blue-400" /> },
    { title: "Google Cloud", icon: <SiGooglecloud className="text-neutral" /> },
  ];
  const othertools = [
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Figma", icon: <SiFigma className="text-neutral" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-blue-400" />,
    },
    {
      title: "OpenAI",
      icon: <SiOpenai className="text-blue-400" />,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return [
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center">
        My <span className="text-primary">Skills</span>
      </h1>
      <BottomLine />
      <div className="flex flex-col md:flex-row items-center justify-evenly my-20">

        <div className="tech-section grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="frontend-tech">
            <h2 className="text-cyan-500 text-xl font-semibold">Front-End Technologies:</h2>
            <div className="flex flex-wrap mb-4">
              {frontend?.map((skill) => (
                <div data-tooltip-id="tooltip-top" data-tooltip-content={skill.title} key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="backend-tech">
            <h2 className="text-cyan-500 text-xl font-semibold">
              Back-End Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {backend?.map((skill) => (
                <div data-tooltip-id="tooltip-top" data-tooltip-content={skill.title} key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cloud-tech">
            <h2 className="text-cyan-500 text-xl font-semibold">
              Cloud Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {cloudcomputing?.map((skill) => (
                <div data-tooltip-id="tooltip-top" data-tooltip-content={skill.title} key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="other-tech">
            <h2 className="text-cyan-500 text-xl font-semibold">
              Other Tools & Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {othertools?.map((skill) => (
                <div data-tooltip-id="tooltip-top" data-tooltip-content={skill.title} key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {/* <Lottie options={defaultOptions} height={400} width={360} /> */}
        </div>
      </div>
    </div>
    , <ReactTooltip
      id="tooltip-top"
      place="top"
      variant="light"
    />];
};

export default MySkill;
