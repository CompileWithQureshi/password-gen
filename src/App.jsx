import Toggelbutton from "./toggelbutton";

const App = () => {
  return (
    <main className=" bg-slate-700 grid place-content-center border-2 gap-2 h-screen  bg-[url('/public/background.jpg')] bg-no-repeat ">
      <div className="  px-10 py-5 bg-slate-300  rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between  gap-3  items-center w-full p-2 mb-10 ">
          <input
            type="text"
            placeholder="password"
            className=" m-2 p-2 rounded-md"
          />
          <br />
          <Toggelbutton />
        </div>
        {/* input-button starts here */}
        <div className="  r h-fit outline-dotted p-1  rounded-md gap-3 m-2 ">
          <input type="range" name="length" id="" className="w-40" />
          <label htmlFor="Range">range</label>
          <br />
          <input type="checkbox" name="Number" id="" className="mr-2" />
          <label htmlFor="Range">small</label>

          <br />
          <input type="checkbox" name="Number" id="" className="mr-2" />
          <label htmlFor="Range">Special</label>

          <br />
          <input type="checkbox" name="Number" id="" className="mr-2" />
          <label htmlFor="Range">Number</label>

          <br />
        </div>

        <div className="flex  justify-evenly ">
          <button className="border-2 rounded-lg m-2 p-1">click</button>
          <button className="border-2  rounded-lg m-2 p-1">copy</button>
        </div>
      </div>
    </main>
  );
};
export default App;
