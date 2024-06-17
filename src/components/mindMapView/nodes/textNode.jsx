import { useCallback, useState, useContext, useEffect } from "react";
import { Context } from "../mindMapView";
import { Handle, Position, NodeResizer, updateEdge } from "reactflow";
import StyleControls from "../../globalComponents/styleControls";
import xIcon from "../../../assets/img/icons/X.svg";
import ToolTip from "../../globalComponents/toolTip";

function TextNode({ id, data }) {
  const [active, setActive] = useState(false);
  const [textareaActive, setTextareaActive] = useState(false);
  const changeTextareaState = () => {
    setTextareaActive(textareaActive ? false : true);
    setActive(false);
  };

  const { connectingContext, nodeContext } = useContext(Context);
  const [connectingActive, setConnectingContext] = connectingContext;
  const [nodes, setNodes] = nodeContext;

  const DEFAULT_HANDLE_STYLE = {
    width: 15,
    height: 15,
    backgroundImage: `url(${xIcon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "rotate(45deg)",
  };

  const delateTextBox = (e) => {
    const newArray = [...nodes];
    const indexToDelete = newArray.findIndex((item) => item.id === id);
    console.log(newArray, indexToDelete, id);
    newArray.splice(indexToDelete, 1);
    setNodes(newArray);
  };

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <NodeResizer color="#ff0071" isVisible={textareaActive} minWidth={150} minHeight={50} />
      <div className={`p-1 h-full relative  ${textareaActive ? "nodrag" : ""}`}>
        <button
          className={`absolute nodrag top-2 right-2 ${
            textareaActive ? "flex" : "hidden"
          } justify-center items-center h-5 w-5 bg-red-400 border-white border-2 text-sm text-white rounded-full`}
          onClick={delateTextBox}>
          <img className="pointer-events-none h-2" src={xIcon} alt="" />
        </button>
        <div
          className={`absolute ${
            active ? "block" : "hidden"
          } top-0 left-0 w-full h-[90%] rounded-xl flex justify-center items-center text-neutral-300 text-[0.8rem]  text-center pointer-events-none`}>
          Dobbelttrykke for og legge til text
        </div>
        <StyleControls active={textareaActive} id={id} />
        <Handle
          id="Top-t"
          type="target"
          position={Position.Top}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: connectingActive ? "auto" : "none",
            top: "10px",
          }}
        />
        <Handle
          id="Right-t"
          type="target"
          position={Position.Right}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: connectingActive ? "auto" : "none",
            right: "10px",
          }}
        />
        <Handle
          id="Left-t"
          type="target"
          position={Position.Left}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: connectingActive ? "auto" : "none",
            left: "10px",
          }}
        />
        <Handle
          id="Bottom-t"
          type="target"
          position={Position.Bottom}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: connectingActive ? "auto" : "none",
            bottom: "14px",
          }}
        />
        <Handle
          id="Bottom-s"
          type="source"
          position={Position.Bottom}
          style={{
            ...DEFAULT_HANDLE_STYLE,
            bottom: "0px",
          }}
        />
        <Handle
          id="Top-s"
          type="source"
          position={Position.Top}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: "none",
            top: "14px",
          }}
        />
        <Handle
          id="Left-s"
          type="source"
          position={Position.Left}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: "none",
            left: "14px",
          }}
        />
        <Handle
          id="Right-s"
          type="source"
          position={Position.Right}
          style={{
            width: 30,
            height: 30,
            opacity: "0",
            pointerEvents: "none",
            right: "14px",
          }}
        />
        <textarea
          id="text"
          name="text"
          readOnly={!textareaActive}
          onDoubleClick={changeTextareaState}
          onBlur={() => {
            setTextareaActive(false);
          }}
          onChange={onChange}
          onMouseEnter={() => {
            setActive(textareaActive ? false : true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
          className={`p-2 border-solid border-[3px] text-center ${data.style} overflow-hidden h-full resize-none	
          w-full rounded-xl ${active ? "text-white" : "text-black"} text-left ${textareaActive ? "cursor-text" : "cursor-grab"} `}
        />
      </div>
    </>
  );
}

export default TextNode;
