import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://leetcode.com/mahima0309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://github.com/mahi-ma"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.linkedin.com/in/mahima-sharma-b7335a12b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/1C0yFQjWms5yc6TaysK8scfeP3ou4xsvS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/mahima-sharma-b7335a12b/"
              className="text-primary hover:underline"
              target="blank"
            >
              Mahima Sharma
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
