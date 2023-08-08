import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Software Engineer",
    description: "I am a good Software Engineer",
    imgUrl: images.about01,
  },
  {
    title: "Full Stack Developer",
    description: "I am a good Full Stack Developer",
    imgUrl: images.about02,
  },
  {
    title: "Backend Developer",
    description: "I am a good Backend Developer",
    imgUrl: images.about03,
  },
  {
    title: "Frontend Developer",
    description: "I am a good Frontend Developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span> Good Apps </span> Means <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
