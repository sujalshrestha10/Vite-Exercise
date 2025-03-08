import { Routes, Route } from "react-router-dom";
import Home from "./fornavComponents/Home.jsx";
import About from "./fornavComponents/About.jsx";




function App() {



  return (


    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;