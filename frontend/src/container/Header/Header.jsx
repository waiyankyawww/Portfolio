import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 10 }}>
            <p className="p-text">Hello, I am</p>
            <h1
              className="head-text"
              style={{
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Wai Yan Kyaw
            </h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text" style={{ textAlign: "justify" }}>
            {" "}
            <span style={{ fontSize: 15, fontWeight: "bold" }}>
              Software Engineer | Full Stack Developer,
            </span>
            &nbsp; who can learn and adapt the new technologies as the operation
            needs. I have abilities to develop scripts for data management
            operations, data manipulation operations, and business logic
            operations. I also have professional experiences and skilled in
            project management and software development life cycles using Agile
            Methodologies.
          </p>
        </div>
      </div>
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.docker, images.gcp, images.php].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.gcp, images.javascript, images.git, images.docker].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
