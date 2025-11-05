import React from "react";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Uncomplicate</span> your IT and
          customer service
        </h1>
        <p className={styles.subtitle}>
          Freshworks provides enterprise-grade, AI-assisted service software to
          deliver exceptional customer and employee experiences.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Try it free</button>
          <button className={styles.secondaryBtn}>
            Book a demo <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
