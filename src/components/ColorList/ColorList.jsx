import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ColorList.module.css";
import { useState } from "react";
import copySoundPath from "../../assets/copy_sound.m4a";

export default function ColorList({ palettes }) {
  let { id } = useParams();
  const palette = palettes.find((element) => element.id === id);
  const copySound = new Audio(copySoundPath);
  const [copiedVisibility, setCopiedVisibility] = useState(0);
  const [copiedColor, setCopiedColor] = useState();
  return (
    <>
      <div
        className={styles.copied}
        style={{ backgroundColor: copiedColor, opacity: copiedVisibility }}
      >
        <div className={styles.copiedText}>COPIED!</div>
        <div className={styles.copiedColor}>{copiedColor}</div>
      </div>
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          ← Back
        </Link>
      </header>
      <div className={styles.colors}>
        {palette.colors.map((colorObject, index) => (
          <div
            key={index}
            className={styles.color}
            style={{ backgroundColor: colorObject.color }}
            onClick={() => {
              if (!copiedVisibility) {
                setCopiedVisibility(1);
                setCopiedColor(colorObject.color);
                copySound.play();
                navigator.clipboard.writeText(colorObject.color);
                setTimeout(() => setCopiedVisibility(0), 1000);
              }
            }}
          >
            <div className={styles.copy}>COPY</div>
            <div className={styles.colorName}>
              {colorObject.name.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>{palette.paletteName}</footer>
    </>
  );
}

ColorList.propTypes = {
  palettes: PropTypes.array,
};
