"use client";

import { useRef, useEffect, useContext } from "react";
import { IPageContext } from "@/app/types/page";
import zoomPlugin from 'chartjs-plugin-zoom';
import Chart from "chart.js/auto";

Chart.register(zoomPlugin); 

const useCanvas = (
  data: IPageContext["contextData"]
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let myChart: any;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context == null) return;

    if (context) {
      myChart = new Chart(context, {
        type: 'line',
        data: {
          labels: Array.from({ length: data.length }, (_, i) => i + 1),
          datasets: [
            {
              label: 'ECG Signal',
              data: data,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          }
        }
      });
    }

    return () => myChart.destroy();
    
  }, [data]);

  return canvasRef;
};

export default useCanvas;
