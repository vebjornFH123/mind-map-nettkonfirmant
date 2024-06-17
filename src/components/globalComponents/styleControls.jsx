import checkMarkIcon from "../../assets/img/icons/check_mark.svg";
import { Context } from "../mindMapView/mindMapView";
import { useContext, useState } from "react";
import { Keys } from "../../css/styleClasses";

function StyleControls({ active, id, mt, left, right }) {
  const { updateStyle } = useContext(Context);

  const [style, setStyle] = useState(Keys.nodeKeys.textBox.white);

  return (
    <div
      id="style-controls"
      className={` w-3/4 ${
        !right && !left ? " -translate-x-1/2" : right ? "-translate-x-[calc(50%+25%)]" : "-translate-x-[calc(50%-25%)]"
      }  w-[150px] absolute bottom-full mb-2 left-1/2  -translate-y-[0.1rem]  z-50 px-2 py-2 text-sm font-light text-center text-master-blue bg-master-lightblue-2 rounded-lg shadow-sm transition-opacity duration-300`}
      style={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}>
      <div className="flex justify-center items-center gap-1">
        <button
          className={`w-6 h-6 border-2 rounded-full border-master-green bg-white flex justify-center items-center`}
          onClick={() => {
            updateStyle(id, Keys.nodeKeys.textBox.white);
            setStyle(Keys.nodeKeys.textBox.white);
          }}>
          {style === Keys.nodeKeys.textBox.white ? <img className="bg-transparent h-4 w-4 rounded-full" src={checkMarkIcon} alt="" /> : null}
        </button>
        <button
          className={`w-6 h-6 border-2 border-white rounded-full bg-master-green  flex justify-center items-center`}
          onClick={() => {
            updateStyle(id, Keys.nodeKeys.textBox.green);
            setStyle(Keys.nodeKeys.textBox.green);
          }}>
          {style === Keys.nodeKeys.textBox.green ? <img className="bg-transparent h-4 w-4 rounded-full" src={checkMarkIcon} alt="" /> : null}
        </button>
        <button
          className={`w-6 h-6 border-2 rounded-full border-white bg-master-blue  flex justify-center items-center`}
          onClick={() => {
            updateStyle(id, Keys.nodeKeys.textBox.blue);
            setStyle(Keys.nodeKeys.textBox.blue);
          }}>
          {style === Keys.nodeKeys.textBox.blue ? <img className="bg-transparent h-4 w-4 rounded-full" src={checkMarkIcon} alt="" /> : null}
        </button>
        <button
          className={`w-6 h-6 border-2 rounded-full border-white bg-master-lightblue  flex justify-center items-center`}
          onClick={() => {
            updateStyle(id, Keys.nodeKeys.textBox.lightBlue);
            setStyle(Keys.nodeKeys.textBox.lightBlue);
          }}>
          {style === Keys.nodeKeys.textBox.lightBlue ? <img className="bg-transparent h-4 w-4 rounded-full" src={checkMarkIcon} alt="" /> : null}
        </button>
      </div>
      <div
        className={`absolute ${
          !right && !left ? "left-1/2" : right ? "left-3/4" : "left-1/4]"
        } -translate-x-1/2  w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-master-lightblue-2`}
        style={{ bottom: "-0.3rem" }}></div>
    </div>
  );
}

export default StyleControls;
