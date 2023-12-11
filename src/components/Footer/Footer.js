import React from "react";
import classes from "./Footer.module.css";
import {
  SiTwitter,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.madeby}>Made By ROHIT KANDARI</div>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/rohit-kandari-899500188/">
          <SiLinkedin />
        </a>
        <a href="https://twitter.com/rohitkandari400">
          <SiTwitter />
        </a>
        <a href="https://github.com/rohit-004">
          <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
