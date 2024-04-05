import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaletteList from "../PaletteList/PaletteList";
import palettes from "../../assets/pallete.json";
import ColorList from "../ColorList/ColorList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<PaletteList palettes={palettes}></PaletteList>}
        />
        <Route
          path="/palette/:id"
          element={<ColorList palettes={palettes} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
