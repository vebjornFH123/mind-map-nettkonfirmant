import { Handle, Position } from "reactflow";
import xIcon from "../../../assets/img/icons/X.svg";

function CenterNode({}) {
  const DEFAULT_HANDLE_STYLE = {
    width: 13,
    height: 13,
    backgroundImage: `url(${xIcon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "rotate(45deg)",
  };

  return (
    <div className="nodrag relative cursor-default w-[180px] h-[50px] flex justify-center items-center border-solid border-[3px] rounded-xl text-master-blue font-bold border-master-blue  bg-master-green text-left">
      <Handle
        id="Top-s"
        type="source"
        position={Position.Top}
        style={{
          opacity: "0",
          top: "4px",
        }}
      />
      <Handle
        id="Bottom-s"
        type="source"
        position={Position.Bottom}
        style={{
          ...DEFAULT_HANDLE_STYLE,
          bottom: "-8px",
        }}
      />
      <Handle
        id="Right-s"
        type="source"
        position={Position.Right}
        style={{
          opacity: "0",
          right: "4px",
          top: "16px",
        }}
      />
      <Handle
        id="Left-s"
        type="source"
        position={Position.Left}
        style={{
          opacity: "0",
          left: "4px",
          top: "16px",
        }}
      />
      <span>JESUS</span>
    </div>
  );
}

export default CenterNode;
