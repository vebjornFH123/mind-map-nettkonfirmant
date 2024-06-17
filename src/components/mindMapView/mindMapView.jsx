import React, { useCallback, useRef, useEffect, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge, useStore } from "reactflow";
import "reactflow/dist/style.css";

import domToImage from "dom-to-image";

import { handleCapture, handleCaptureCanvas } from "../../tools/handelImg.mjs";
import { calculateTranslateExtent, calculateCenterPosition, getRelativePosition } from "../../tools/mindMap.mjs";

import TextNode from "./nodes/textNode";
import CenterNode from "./nodes/centerNode";
import ConnectionLine from "./connectionLine";

import { Styles, Keys } from "../../css/styleClasses";

export const Context = React.createContext();

const nodeTypes = { textNode: TextNode, centerNode: CenterNode };

const initialNodes = [{ id: "center-node", type: "centerNode", position: { x: 0, y: 0 } }];
const edgeTypes = {
  connectionLine: ConnectionLine,
};

function MindMapView({}) {
  const mindMapRef = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [connectingActive, setConnectingActive] = useState(false);

  const updateStyle = (id, styleKey) => {
    const newNodes = nodes.map((node) => {
      if (node.id === id) {
        return { ...node, data: { style: Styles.nodeStyles.textBox[styleKey] } };
      }
      return node;
    });

    setNodes(newNodes);
  };

  const updateConnectingState = () => {
    setConnectingActive(connectingActive ? false : true);
  };

  const onConnect = useCallback(
    (connection) => {
      console.log(connection);
      if (connection.source !== connection.target) {
        const edge = { ...connection, type: "connectionLine" };
        setEdges((eds) => addEdge(edge, eds));
      }
    },
    [setEdges]
  );

  const updateConnectionPoint = (_, mainNode) => {
    const newEdges = edges.map((eds) => {
      const getConnectedNodePosition = nodes.find((node) => eds.source === node.id)?.position;
      if (eds.target === mainNode.id) {
        return {
          ...eds,
          targetHandle: `${getRelativePosition(getConnectedNodePosition, mainNode.position, false)}-t`,
          sourceHandle: `${getRelativePosition(getConnectedNodePosition, mainNode.position, true)}-s`,
        };
      }

      return eds;
    });
    setEdges(newEdges);
  };

  const addTextNode = function () {
    // make new node ID
    const newNodeId = `text-node-${nodes.length + 1}`;

    // Update nodes state
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: newNodeId,
        type: "textNode",
        data: { style: Styles.nodeStyles.textBox.white },
        position: { x: Math.random() * 500, y: Math.random() * 500 }, // Example position
        connecting: { label: "New Text Node" }, // Add your prop here
      },
    ]);

    // make new edge ID
    const newEdgeId = `edge-${edges.length + 1}`;

    // Update edges state
    setEdges((prevEdges) => [
      ...prevEdges,
      {
        id: newEdgeId,
        type: "connectionLine",
        source: "center-node",
        target: newNodeId,
      },
    ]);
  };

  const [translateExtent, setTranslateExtent] = useState();
  useEffect(() => {
    if (mindMapRef.current) {
      const { clientWidth: width, clientHeight: height } = mindMapRef.current;
      setTranslateExtent(calculateTranslateExtent(width, height));
      const centerNodeWidth = 180; // this most be the same width as the centerNode component
      const centerNodeHeight = 50; // this most be the same height as the centerNode component
      const centerPosition = calculateCenterPosition(width, height, centerNodeWidth, centerNodeHeight);
      setNodes((nds) => nds.map((node) => (node.id === "center-node" ? { ...node, position: centerPosition } : node)));
    }
  }, []);

  return (
    <div className="h-screen block sm:flex items-center">
      <div className="relative m-auto gap-3 rounded-[25px] mb-4 bg-master-green w-[95%] sm:w-10/12 max-w-[780px] pt-4 px-4 pb-4 mt-[75px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.5rem] font-semibold text-master-blue">Oppgave/utforskning</h1>
          <span className="text-[1.25rem] text-black">
            Hva kan du/vet du om Jesus? Bruk tankekartet! Få ned alt du tenker på kartet. Ord, uttrykk, spørsmål, meninger og oppfatninger, ting du
            forsto og ting du ikke forsto.
          </span>
        </div>
        <div className=" relative p-4 h-[500px] border-solid border-[3px] border-[#27dea6] rounded-[25px] bg-white text-left">
          <button className="absolute z-50 top-4 left-4 p-2 cursor-pointer text-white bg-master-blue rounded-xl" onClick={addTextNode}>
            Legg til textbox
          </button>
          <Context.Provider value={{ connectingContext: [connectingActive, setConnectingActive], nodeContext: [nodes, setNodes], updateStyle }}>
            <ReactFlow
              ref={mindMapRef}
              nodes={nodes}
              nodeTypes={nodeTypes}
              edges={edges}
              edgeTypes={edgeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onConnectStart={updateConnectingState}
              onConnectEnd={updateConnectingState}
              // Disable zooming
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              // Disable zooming
              //translateExtent={translateExtent}
              // nodeExtent={translateExtent}
              onNodeDrag={updateConnectionPoint}
              onClick={() => {
                console.log("hei");
              }}>
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
          </Context.Provider>
        </div>
        <div className="w-full flex justify-end pt-4">
          <button
            className=" bg-master-blue text-white w-20 h-10 rounded-xl"
            onClick={() => {
              handleCapture(mindMapRef);
            }}>
            Lagre
          </button>
        </div>
      </div>
    </div>
  );
}

export default MindMapView;
