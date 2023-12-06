import React from "react";
import Canvas from "../ecg/canvas";
import { drawWave } from "../ecg/drawCanvas";
import { cleanup, render } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

jest.mock("../ecg/drawCanvas", () => ({
  ...jest.requireActual("../ecg/drawCanvas"),
  draw: jest.fn(),
  drawWave: jest.fn()
}));


describe("Canvas Module", () => {
  it("renders Module correctly", () => {
    const { getByTestId } = render(<Canvas drawWave={drawWave} />);

    const canvas = getByTestId('canvas');
    expect(canvas).not.toBeNull();
  });
});
