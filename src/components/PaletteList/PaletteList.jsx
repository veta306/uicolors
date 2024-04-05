import styles from "./PaletteList.module.css";
import Palette from "../Palette/Palette";
import PropTypes from "prop-types";
import logoSound from "../../assets/logo_sound.mp3";

export default function PaletteList({ palettes }) {
  return (
    <>
      <header
        className={styles.header}
        onMouseDown={() => new Audio(logoSound).play()}
      >
        FLAT UI COLORS 2
      </header>
      <div className={styles.paletteList}>
        {palettes.map((palette) => (
          <Palette key={palette.id} palette={palette} />
        ))}
      </div>
    </>
  );
}

PaletteList.propTypes = {
  palettes: PropTypes.array,
};
