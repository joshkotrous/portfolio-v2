import { CSSProperties, useEffect } from "react";
// @ts-ignore
import { Gradient } from "../helpers/Gradient.js";

const Mesh = () => {
  const gradientStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    ["--gradient-color-1" as any]: "#4cd4b0",
    ["--gradient-color-2" as any]: "#fffce6",
    ["--gradient-color-3" as any]: "#f24d16",
    ["--gradient-color-4" as any]: "#edd834",
  };
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas style={gradientStyle} id="gradient-canvas" data-transition-in />
  );
};

export default Mesh;
