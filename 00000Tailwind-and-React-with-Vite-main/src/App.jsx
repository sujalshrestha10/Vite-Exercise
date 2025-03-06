import "./App.css";
import "./index.css";
import Dokan from "./components/Dokan.jsx";
import MyFunction from "./components/Happy.jsx";

function App() {
  let userName = {
    name: "aalu jasto k ",
    work: "mafiaa",
  };
  console.log(userName);
  return (
    <>
      <Dokan name="k xa k xa k xa k xa" />
      <MyFunction className="bandar"  />
    </>
  );
}

export default App;
