"use client";

import React from "react";
import Canvas from "@/app/types/canvas";
import useCanvas from "./useCanvas";

const Canvas = (props: Canvas) => {
  const { data, ...rest } = props;
  const canvasRef = useCanvas(data);

  return <canvas data-testid="canvas" ref={canvasRef} {...rest} />;
};

export default Canvas;
