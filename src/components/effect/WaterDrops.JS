import React, { useRef, useEffect } from "react";

function WaterDroplets() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // set canvas size to match viewport or container element
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // TODO: implement droplet animation logic
  }, []);

  return <canvas ref={canvasRef} />;
}
