import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Palette.module.css";

export default function Palette({ palette }) {
  return (
    <Link
      to={`/palette/${palette.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={styles.palette}>
        <div className={styles.colors}>
          {palette.colors.map((colorObject, index) => (
            <div
              key={index}
              style={{ backgroundColor: colorObject.color }}
            ></div>
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{palette.paletteName}</div>
          <div className={styles.emoji}>{palette.emoji}</div>
        </div>
      </div>
    </Link>
  );
}

Palette.propTypes = {
  palette: PropTypes.object,
};
