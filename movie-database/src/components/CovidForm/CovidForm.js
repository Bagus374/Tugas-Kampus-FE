import styles from "./CovidForm.module.css";
import hero from "../../utils/assets/hero.png";
import dataStatus from "../../utils/constants/dataStatus";
import { useState } from "react";

function CovidForm(props) {
  const { provinces, setProvinces } = props;

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");

  const getInitialState = () => {
    const value = "";
    return value;
  };
  const [jumlah, setJumlah] = useState(getInitialState);

  const [kotaError, setKotaError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [jumlahError, setJumlahError] = useState(false);

  function handleKota(e) {
    setKota(e.target.value);
  }
  function handleStatus(e) {
    setStatus(e.target.value);
  }
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (kota === "") {
      setKotaError(true);
    } else if (status === "") {
      setStatusError(true);
    } else if (jumlah === "") {
      setJumlahError(true);
    } else {
      const province = provinces.find(function (data) {
        return data.kota === kota;
      });
      if (status === "Positif") {
        province.kasus += parseInt(jumlah);
      }
      if (status === "Sembuh") {
        province.sembuh += parseInt(jumlah);
      }
      if (status === "Meninggal") {
        province.meninggal += parseInt(jumlah);
      }
      if (status === "Dirawat") {
        province.dirawat += parseInt(jumlah);
      }
      setProvinces([...provinces]);
      setKotaError(false);
      setStatusError(false);
      setJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.covidform}>
        <div className={styles.covidform__left}>
          <img
            className={styles.covidform__image}
            src={hero}
            alt="picture_hero"
          />
        </div>

        <div className={styles.covidform__right}>
          <div className={styles.covidform_form}>
            <h2 className={styles.covidform__title}>Form Covid</h2>
            <form onSubmit={handleSubmit}>
              <label className={styles.covidform__label}>Provinsi</label>
              <br />
              <select
                onChange={handleKota}
                className={styles.covidform__select}
              >
                <option></option>
                {provinces.map(function (item) {
                  return <option value={item.kota}>{item.kota}</option>;
                })}
              </select>
              {kotaError && <p>Provinsi Wajib Diisi</p>}

              <label className={styles.covidform__label}>Status</label>
              <br />
              <select
                onChange={handleStatus}
                className={styles.covidform__select}
              >
                {dataStatus.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              {statusError && <p>Status Wajib Diisi</p>}

              <label className={styles.covidform__label}>Jumlah</label>
              <br />
              <input
                onChange={handleJumlah}
                type="number"
                className={styles.covidform__input}
              />
              {jumlahError && <p>Jumlah Wajib Diisi</p>}

              <input
                type="submit"
                value="Submit"
                className={styles.covidform__submit}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CovidForm;
