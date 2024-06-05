import React from "react";

import styles from "./Activity.module.css";
import activity from "../../data/activity.json";
import { getImageUrl } from "../../utils";

export const Activity = () => {
  return (
    <section className={styles.container} id="activity">
      <h2 className={styles.title}>Activity</h2>
      <div className={styles.content}>
        <ul className={styles.activity}>
          {activity.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>&nbsp;
    
                  <span>
                    {historyItem.experiences.map((experience, id) => {
                      return <p key={id}>{experience}</p>
                    })}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
