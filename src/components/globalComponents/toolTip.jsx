function ToolTip({ tip, active, mt, left, right }) {
  return (
    <div
      id="tooltip"
      role="tooltip"
      className={` w-3/4 ${
        !right && !left ? " -translate-x-1/2" : right ? "-translate-x-[calc(50%+25%)]" : "-translate-x-[calc(50%-25%)]"
      }  w-[200px] absolute bottom-full mb-2 left-1/2  -translate-y-[0.1rem]  z-50 px-2 py-2 text-sm font-light text-center text-white bg-master-lightblue rounded-lg shadow-sm transition-opacity duration-300`}
      style={{ opacity: active ? 1 : 0, pointerEvents: "none" }}>
      {tip}
      <div
        className={`absolute ${
          !right && !left ? "left-1/2" : right ? "left-3/4" : "left-1/4]"
        } -translate-x-1/2  w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-master-lightblue`}
        style={{ bottom: "-0.3rem" }}></div>
    </div>
  );
}

export default ToolTip;
