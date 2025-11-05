import React, { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,

} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`${styles.header} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.logo}>
        <span className={styles.icon}></span>
        <span>ARA</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.menuItem}>
          Products <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
          <div className={styles.dropdown}>
            <a href="#">
              Help Desk
            </a>
            <a href="#">
              Live Chat
            </a>
            <a href="#">
              Automation
            </a>
          </div>
        </div>

        <div className={styles.menuItem}>
          Solutions <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
          <div className={styles.dropdown}>
            <a href="#">
              Customer Support
            </a>
            <a href="#">
              IT Teams
            </a>
          </div>
        </div>

        <div className={styles.menuItem}>Enterprise</div>

        <div className={styles.menuItem}>
          Resources <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
          <div className={styles.dropdown}>
            <a href="#">
              Blog
            </a>
            <a href="#">
              Guides
            </a>
          </div>
        </div>
      </nav>

      <button className={styles.demoBtn}>Get A Demo</button>
    </header>
  );
};

export default Header;
