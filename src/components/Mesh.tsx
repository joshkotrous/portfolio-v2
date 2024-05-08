import { CSSProperties, useEffect } from "react";
// @ts-ignore
import { Gradient } from "../helpers/Gradient.js";

// --gradient-color-1: #000000;
// --gradient-color-2: #8f8f8f;
// --gradient-color-3: #000000;
// --gradient-color-4: #7d7d7d;
const Mesh = () => {
  const gradientStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    ["--gradient-color-1" as any]: "#000000",
    ["--gradient-color-2" as any]: "#8f8f8f",
    ["--gradient-color-3" as any]: "#000000",
    ["--gradient-color-4" as any]: "#7d7d7d",
  };
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <canvas style={gradientStyle} id="gradient-canvas" data-transition-in />
    </>
  );
};

export default Mesh;
