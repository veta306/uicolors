import styles from "./PaletteList.module.css";
import Palette from "../Palette/Palette";
import PropTypes from "prop-types";

export default function PaletteList({ palettes }) {
  return (
    <div className={styles.paletteList}>
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </div>
  );
}

PaletteList.propTypes = {
  palettes: PropTypes.array,
};
