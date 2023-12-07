import { useState, useCallback, useEffect } from "react";
import Toggelbutton from "./toggelbutton";
import { IoIosRefresh } from "react-icons/io";
import { useRef } from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

// import useDarkMode from "use-dark-mode";

const App = () => {
  const ref = useRef();
  const [password, setPassword] = useState("");
  const [num, setNum] = useState(false);
  const [small, setSmall] = useState(false);
  const [Care, seetCare] = useState(false);
  const [length, setLength] = useState(5);
  const [theme, setTheme] = useState("dark");

  const handelsubmit = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (num) str += "0123456789";
    if (Care) str += '!@#$%^&*()_+:"{}|><';
    if (small) str += "zxcvbnmlkasdfghjqqwertyuiop";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [num, small, length, Care, setPassword]);

  useEffect(() => {
    handelsubmit();
  }, [length, num, Care, small, setPassword]);

  const handeltoggel = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(`this dark toggel`);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const copyToClipboard = () => {
    // Text from the html element
    let copyText = ref.current.value;
    // Adding text value to clipboard using copy function
    let isCopy = copy(copyText);

    //Dispalying notification
    if (isCopy) {
      toast.info(password);
    }
  };

  return (
    <main className=" bg-slate-700 grid  place-content-center border-2 gap-2 h-screen  bg-[url('/background.jpg')] bg-no-repeat ">
      <div className="  px-10 py-5 bg-slate-300  rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-[#d8d84b8b] dark:text-purple ">
        <div className="flex justify-between  gap-3  items-center w-full p-2 mb-10 ">
          <input
            readOnly
            type="text"
            value={password || ""}
            placeholder="password"
            className=" m-2 p-2 rounded-md"
            defaultChecked={password}
            ref={ref}
          />
          <br />
          <Toggelbutton onClick={handeltoggel} />
        </div>
        {/* input-button starts here */}
        <div className="  r h-fit outline-dotted p-1  rounded-md gap-3 m-2 ">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            id=""
            className="w-40"
            onChange={(e) => {
              e.preventDefault();

              setLength(e.target.value);
            }}
          />
          <label htmlFor="Range">range</label>
          <br />
          <input
            type="checkbox"
            id=""
            className="mr-2"
            defaultChecked={small}
            onChange={() => setSmall((prev) => !prev)}
          />
          <label htmlFor="Range">small</label>

          <br />
          <input
            type="checkbox"
            id=""
            className="mr-2"
            defaultChecked={Care}
            onChange={() => seetCare((prev) => !prev)}
          />
          <label htmlFor="Range">Special</label>

          <br />
          <input
            type="checkbox"
            className="mr-2"
            defaultChecked={num}
            onChange={() => setNum((prev) => !prev)}
          />

          <label htmlFor="Range">Number</label>

          <br />
        </div>
        <div className="flex  justify-evenly ">
          <button
            className="w-10 rounded-lg m-2 p-1"
            onClick={() => {
              window.location.reload();
            }}
          >
            <IoIosRefresh className=" w-10 h-5" />
          </button>
          <button className="  rounded-lg m-2 p-1" onClick={copyToClipboard}>
            <FaCopy />
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
