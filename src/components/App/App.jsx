import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaletteList from "../PaletteList/PaletteList";
import palettes from "../../assets/pallete.json";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<PaletteList palettes={palettes}></PaletteList>}
        ></Route>
      </Routes>
    </Router>
  );
}
