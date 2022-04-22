import styles from "./Global.module.css";
import data from "../../utils/constants/indonesia"
import { useState } from "react";

function Global() {
  const [dataIndonesia] = useState(data.indonesia);

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.content_title}>Indonesia</h2>
        <h3 className={styles.content_description}>Data Covid Berdasarkan Global</h3>
        <div className={styles.card}>
          {
            dataIndonesia.map(function (item) {
              return (
                <div className={styles.parent}>
                  <div className={styles.child}>
                    <h4 className={styles.status}>{item.status}</h4>
                    <h4 className={styles.total}>{item.total}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Global;