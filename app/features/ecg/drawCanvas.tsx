import { IPageContext } from "@/app/types/page";

const drawWave = (
  ctx: CanvasRenderingContext2D,
  contextData: IPageContext["contextData"],
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
  const length = contextData.length - 1;
  const dist = 120;
  let lastX = contextData[length].x;

  ctx.moveTo(x, y);
  ctx.lineTo(contextData[0].x, y);

  for (let i = 0; i < rep; i++) {
    for (let j = 0; j <= length; j++) {
      ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
      const inc = j < length ? j + 1 : j;
      ctx.moveTo(contextData[j].x, contextData[j].y);
      ctx.lineTo(contextData[inc].x, contextData[inc].y);
      const nX = contextData[j].x + lastX;
      const nInc = contextData[inc].x + lastX;
      ctx.moveTo(lastX, y);
      ctx.lineTo(contextData[0].x + lastX, y);
      ctx.moveTo(nX, contextData[j].y);
      ctx.lineTo(nInc, contextData[inc].y);
    }
    lastX += dist;
  }
  
  ctx.stroke();
};

export { drawWave };