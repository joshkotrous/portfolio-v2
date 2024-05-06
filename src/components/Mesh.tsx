import { useEffect } from "react";
// @ts-ignore
import { Gradient } from "../helpers/Gradient.js";
import "./mesh.css";

const Mesh = () => {
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />;
};

export default Mesh;
