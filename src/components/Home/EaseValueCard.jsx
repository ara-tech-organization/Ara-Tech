import React from "react";
import styles from "./EaseValueCard.module.css";

const EaseValueCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Designed for ease, built for value</h1>
        <p className={styles.subtext}>
          Faster implementation. Better ROI. Totally transparent costs.
          Freshworks delivers enterprise-grade performance without the
          enterprise-level complexity.
        </p>

        <div className={styles.card}>
          <div className={styles.left}>
            <h2 className={styles.percentage}>97%</h2>
            <p className={styles.csat}>CSAT</p>
            <div className={styles.textBlock}>
              <h3>Hello, happiness.</h3>
              <p>
                Looking for higher satisfaction scores? Solve more customer and
                employee issues, more quickly and easily. People{" "}
                <span className={styles.love}>love</span> that.
              </p>
              <a href="#" className={styles.link}>
                See the Customer Service Benchmark Report
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.chat}>
              <div className={styles.chatItem}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Lily Park"
                />
                <div>
                  <strong>Lily Park</strong>
                  <p>Event information</p>
                </div>
              </div>

              <div className={`${styles.chatItem} ${styles.active}`}>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Miller"
                />
                <div>
                  <strong>John Miller</strong>
                  <p>Hi, please cancel my order for the Lumos</p>
                  <span>💳 Payment issues</span>
                </div>
              </div>

              <div className={styles.chatItem}>
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Adam Doe"
                />
                <div>
                  <strong>Adam Doe</strong>
                  <p>Order details</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pagination}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default EaseValueCard;
