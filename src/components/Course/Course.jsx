import React from "react";

import styles from "./Course.module.css";
import { getImageUrl } from "../../utils";

export const Course = () => {
  return (
    <section className={styles.container} id="Course">
      <h2 className={styles.title}>Take Courses</h2>&ensp;
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("course/meio.png")} alt="meio" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>WebPrograming</h3>
              <p>
                Meio University at Japan &ensp;1 Semester <br/><br/>
             
                Learned About Basic JavaScript And Jquery This Subject had Quiz Every Week And My Last Project Was To Create a Poster That Explains What JavaScript is in a Nutshell

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("course/siam.png")} alt="siam"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>DataBase Management</h3>
              <p>
              Siam University&ensp;1 Semester <br/><br/>
              Learned About DataBase Management Basics Including NoSQL and SQL DataBases Normalization ER-Diagrams And DDL DML DCL And TCL Commands
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("course/udemy.png")} alt="udemy"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Complete 2024 Web Development Bootcamp </h3>
              <p>
              Dr. Angela Yu&ensp;Udemy&ensp;(61 Hours)  <br/><br/>
              
              Learned Step-By-Step To Take Course This Course Learnd About the latest technologies including Javascript React Node HTML CSS 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
