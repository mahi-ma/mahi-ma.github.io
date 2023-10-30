import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    if (id) {
      const filtered = Items.find((item) => item.id === parseInt(id));
      setItem(filtered);
    }
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="parent py-16">
      <div className="top-banner flex items-start justify-between">
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0 }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          // key={item.id}
          className="img-container mr-12 cursor-pointer rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500"
          style={{ backgroundColor: "#313131" }}
        >
          <img className="project-image" src={item?.img} alt="project-image" />
        </motion.div>
        <div className="details-container">
          <h1 className="text-4xl font-medium mt-8">{item?.title}</h1>
          <p className="text-neutral font-medium mt-10 mb-6">
            {item?.description}
          </p>
          <div className="flex items-center mt-8">
            <a href={item?.liveLink} className="mr-4" target="blank">
              <PrimaryBtn>
                <span>Live Site</span>
                <span>
                  <FaLink />
                </span>
              </PrimaryBtn>
            </a>
            <a href={item?.codeLink} target="blank">
              <SecondaryBtn>
                <span>Source Code</span>
                <span>
                  <FaCode />
                </span>
              </SecondaryBtn>
            </a>
          </div>
        </div>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
        <ul className="tools-section flex flex-wrap">
          {item?.technologies?.map((feature, index) => (
            <li key={index} className="text-neutral tool-box">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
