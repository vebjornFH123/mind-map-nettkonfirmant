import { BaseEdge, EdgeLabelRenderer, getSimpleBezierPath, useReactFlow } from "reactflow";
import xIcon from "../../assets/img/icons/X.svg";

function ConnectionLine({ id, sourceX, sourceY, targetX, targetY }) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const markerStyle = {
    strokeWidth: 2,
    stroke: "#FF0072",
  };
  return (
    <>
      <BaseEdge id={id} path={edgePath} style={markerStyle} markerEnd="arrow" />
      <EdgeLabelRenderer>
        <button
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan flex justify-center items-center h-5 w-5 bg-red-400 border-white border-2 text-sm text-white rounded-full"
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}>
          <img className="h-2" src={xIcon} alt="" />
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
export default ConnectionLine;
