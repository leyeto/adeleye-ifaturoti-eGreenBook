import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NameSticker from "./components/NameSticker/NameSticker";

function App() {
  return (
    <div className="App">
      <h1>Welcome to eRed Book</h1>

      <Routes>
        <Route exact path="/" element={<NameSticker />} />
      </Routes>
    </div>
  );
}

export default App;
