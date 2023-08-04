import React from "react";
import classes from "./Footer.module.css";
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.madeby}>Made By Rohit Kandari</div>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/rohit-kandari-899500188/">
          <SiLinkedin />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/rohitkandari1977/practice">
          <SiGeeksforgeeks />
        </a>
        <a href="https://leetcode.com/NewT004/">
          <SiLeetcode />
        </a>
        <a href="https://github.com/rohit-004">
          <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
