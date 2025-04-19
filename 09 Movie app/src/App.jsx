import Navbar from "./component/Navbar";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { MovieProvider } from "../contexts/MovieContext";
export default function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />

        <main className="pathing">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}
