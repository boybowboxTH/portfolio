import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import ReactTypingEffect from 'react-typing-effect';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}><ReactTypingEffect text={["I'm Supanut", "I'm a Web Developer"]} speed={80} eraseDelay={150} className="typingeffect" /></h1>
        <p className={styles.description}>
        I'm Currently Seeking A Position To Leverage My Japanese Language Skills And IT Knowledge Passionate About Computers And Japanese Language Pursuing Second Bachelor's In ComSci Committed To Continuous Self-Development For Company's Benefit
        </p>
        <div><a href="https://portfolio-supanut.vercel.app/assets/hero/cv.pdf" target="_blank" className={styles.contactBtn}>
          CV & Resume
        </a>&emsp;&emsp;
        <a href="mailto:kawpoon43@gmail.com" target="_blank" className={styles.contactBtn}>
          Contact Me
        </a></div>
      </div>
      <img
        src={getImageUrl("hero/myphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
