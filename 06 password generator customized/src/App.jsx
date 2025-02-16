import "./App.css";
import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numAllow, setNumAllow] = useState(false);
  const [symbolAllow, setSymbolAllow] = useState(false);
  const [password, setPassword] = useState("");

  const generatePass = useCallback(() => {
    let pass = ""; // your password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (symbolAllow) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_`{}~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, symbolAllow, setPassword]);

  useEffect(() => {
    generatePass();
  }, [length, numAllow, symbolAllow, generatePass]);
  const passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="rounded-xl bg-teal-100 my-10 py-10 flex items-center flex-col w-150 h-150 mx-auto ">
        <h1 className=" font-poppins text-2xl flex items-center justify-center rounded-xl h-15 w-75 text-[#0e3643] font-bold">
          Password Generator
        </h1>

        <input
        
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          id=""
          name="text"
          className="border-4 border-[#0e3643] rounded-md my-5 w-90 h-10 "
        />
        <img
          className="w-90 h-70 rounded-2xl"
          src="https://lh3.googleusercontent.com/RJOrUE4c_h3ECEdsXPYTPMMDeeyuCFyTfV4oGe0vnHW8OtC0VtMD0vxAmZLPJR1BfsfL43IxYZI5obaYnakYoFMW=s1280-w1280-h800"
          alt=""
        />
        <input
          value={length}
          type="range"
          min="1"
          max="100"
          onChange={(e) => setLength(e.target.value)}
          className="border-3 mt-3"
        />
        <div className=" w-100 my-5 flex items-col space-x-15 ">
          <div className="flex items-center">
            <input
              checked={numAllow}
              className=" m-2 h-5 w-5"
              type="checkbox"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label className="font-bold">Number Included</label>
          </div>
          <div className="flex items-center">
            <input
              checked={symbolAllow}
              type="checkbox"
              className="m-2 h-5 w-5 "
              onChange={() => {
                setSymbolAllow((prev) => !prev);
              }}
            />
            <label className="font-bold text-[#0e3643]">Symbols Included</label>
          </div>
        </div>
        <button
          className="text-[#0e3643] font-bold rounded-md h-10 w-20 border-[#0e3643] cursor-pointer border-4"
          onClick={copyToClipboard}
        >
          COPY
        </button>
      </div>
    </>
  );
}

export default App;
