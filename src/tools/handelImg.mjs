import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const handleCapture = (mindMapRef) => {
  const mindMapNode = mindMapRef.current;

  if (mindMapNode) {
    html2canvas(mindMapNode, {
      useCORS: true, // Enable CORS support for cross-origin images
      allowTaint: false, // Whether to allow rendering images from different origins
      backgroundColor: null, // Background color of the captured area (null means transparent)
      scrollX: -window.scrollX, // Capture area starting position horizontally
      scrollY: -window.scrollY, // Capture area starting position vertically
      windowWidth: document.documentElement.scrollWidth, // Width of the capture area
      windowHeight: document.documentElement.scrollHeight, // Height of the capture area
    }).then((canvas) => {
      // Convert canvas to blob and initiate download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mindmap.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, "image/png");
    });
  }
};
function handleCaptureCanvas(canvasRef) {
  if (canvasRef.current) {
    const canvas = canvasRef.current;

    // Check if the canvas context is available
    const context = canvas.getContext("2d");
    if (!context) {
      console.error("Error capturing canvas: Context not found");
      return;
    }

    try {
      // Capture the canvas as a data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a downloadable link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "canvas-capture.png";
      link.click();
    } catch (error) {
      console.error("Error capturing canvas:", error);
    }
  }
}

export { handleCapture, handleCaptureCanvas };
