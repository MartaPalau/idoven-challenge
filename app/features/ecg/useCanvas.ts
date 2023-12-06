"use client";

import { useRef, useEffect, useContext } from "react";
import { IPageContext } from "@/app/types/page";
import { PageContext } from "@/app/context/page";

const useCanvas = (
  drawWave: (
    arg0: CanvasRenderingContext2D,
    contextData: IPageContext["contextData"]
  ) => void
) => {
  const contextData = useContext(PageContext) as { x: number; y: number }[];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context == null) return;

    const render = () => {
      drawWave(context, contextData);
    };
    render();
  }, [drawWave]);

  return canvasRef;
};

export default useCanvas;
