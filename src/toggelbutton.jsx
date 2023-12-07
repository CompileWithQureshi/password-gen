/* eslint-disable react/prop-types */
import "./App.css";

function Toggelbutton({ onClick }) {
  return (
    <div>
      <label htmlFor="theme" className="theme">
        <span className="theme__toggle-wrap">
          {/* <input > */}
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            // role="switch?"
            name="theme"
            value="dark"
            onClick={(e) => {
              console.log(e.isPropagationStopped());

              onClick();
            }}
          />
          <span className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </div>
  );
}

export default Toggelbutton;
