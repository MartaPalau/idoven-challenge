import { IPageContext } from "@/app/types/page";

// interface Canvas {
//   drawWave: (
//     arg0: CanvasRenderingContext2D,
//     arg1: IPageContext["contextData"]
//   ) => void;
// }
interface Canvas {
  data: IPageContext["contextData"]
}

export default Canvas;
