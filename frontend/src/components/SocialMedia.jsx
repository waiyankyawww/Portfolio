import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href={"https://github.com/waiyankyawww"}
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href={"https://www.linkedin.com/in/wai-yan-kyaw-9b6246219/"}
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href={"https://www.facebook.com/waiyankyawwwwww/"}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href={"https://www.instagram.com/wykyawwwwww/"}
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
