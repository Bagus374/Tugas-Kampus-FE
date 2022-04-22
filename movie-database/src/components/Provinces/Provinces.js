import styles from "./Provinces.module.css";

function Provinces(props) {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.content_title}>Provinsi</h2>
        <h3 className={styles.content_description}>Data Covid Berdasarkan Provinsi</h3>
        <div>
          <table className={styles.content_table_data}>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
            {
              provinces.map(function (item, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.kota}</td>
                    <td>{item.kasus}</td> 
                    <td>{item.sembuh}</td>
                    <td>{item.dirawat}</td>
                    <td>{item.meninggal}</td>
                  </tr>
                )
              })
            }

          </table>
        </div>
      </section >
    </div >
  );
}

export default Provinces;