import styles from "./Movie.module.css";

function Movie(props) {
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={movie.poster}
        alt={movie.title}
      />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <div className={styles.section}>
        <p className={styles.movie__date}>{movie.year}</p> | <p className={styles.movie__date}>{movie.type}</p>
      </div>
    </div>
  );
}

export default Movie;
