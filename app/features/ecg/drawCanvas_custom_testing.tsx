import { IPageContext } from "@/app/types/page";

const ecgData_custom = [
  { x: 20, y: 147 },
  { x: 30, y: 151 },
  { x: 50, y: 155 },
  { x: 65, y: 50 },
  { x: 70, y: 190 },
  { x: 90, y: 150 },
  { x: 120, y: 145 },
];

const drawWave = (
  ctx: CanvasRenderingContext2D,
  ecgData_custom: any,
) => {
  ctx.canvas.height = 300;
  ctx.canvas.width = window.innerWidth;
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 0.5;
  ctx.lineJoin = "round";
  ctx.beginPath();

  const x = 0;
  const y = 146;
  const w = window.innerWidth / 100;
  const rep = Math.round(w);
  const length = ecgData_custom.length - 1;
  const dist = 120;
  let lastX = ecgData_custom[length].x;

  ctx.moveTo(x, y);
  ctx.lineTo(ecgData_custom[0].x, y);

  for (let i = 0; i < rep; i++) {
    for (let j = 0; j <= length; j++) {
      ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
      const inc = j < length ? j + 1 : j;
      ctx.moveTo(ecgData_custom[j].x, ecgData_custom[j].y);
      ctx.lineTo(ecgData_custom[inc].x, ecgData_custom[inc].y);
      const nX = ecgData_custom[j].x + lastX;
      const nInc = ecgData_custom[inc].x + lastX;
      ctx.moveTo(lastX, y);
      ctx.lineTo(ecgData_custom[0].x + lastX, y);
      ctx.moveTo(nX, ecgData_custom[j].y);
      ctx.lineTo(nInc, ecgData_custom[inc].y);
    }
    lastX += dist;
  }
  
  ctx.stroke();
};

export { drawWave };