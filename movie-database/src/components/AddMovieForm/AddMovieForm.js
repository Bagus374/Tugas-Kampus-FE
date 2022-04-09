/* eslint-disable no-const-assign */
import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import dataGenre from "../../utils/constants/dataGenre";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [poster, setPoster] = useState("");

  const getInitialState = () => {
    const value = "Action";
    return value;
  };
  const [typeMovie, setTypeMovie] = useState(getInitialState);

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleTypeMovie(e) {
    setTypeMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: typeMovie,
        poster: poster === "" ? "https://picsum.photos/300/400" : poster,
      };

      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Genre
              </label>
              <div className={styles.select}>
                <select
                  className={styles.custom_select}
                  value={typeMovie}
                  onChange={handleTypeMovie}
                >
                  {dataGenre.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Link Poster
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
                onChange={handlePoster}
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                value={date}
                onChange={handleDate}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
