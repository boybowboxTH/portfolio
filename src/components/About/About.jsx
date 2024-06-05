import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="Educational">
      <h2 className={styles.title}>Educational Background</h2>&ensp;
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/meio.png")} alt="meio" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Student Exchange Program</h3>
              <p>
                Meio University at Japan<br/>
                Aug 2022 - Aug 2023 <br/>
                1 year Program

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/siam.png")} alt="siam"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Arts in Japanese Communicate</h3>
              <p>
              Siam University<br/>
              Aug 2020 - May 2024<br/>
              GPA : 3.52
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/nakpra.png")} alt="nakpra"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Vocational Certificate Program in Business Computer</h3>
              <p>
              Nakprasith Business Administration Technological College<br/>
              Aug 2017 - Mar 2019<br/>
              GPA : 3.40
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
