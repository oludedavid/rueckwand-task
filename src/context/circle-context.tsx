import { createContext } from "react";
import { TCircle } from "../types";

interface ICircleContext {
  circles: TCircle[];
  addCircle: () => void;
  updateCircle: (id: string, newCoordinates: { x: number; y: number }) => void;
  deleteCircle: (id: string) => void;
}

const CircleContext = createContext<ICircleContext>({
  circles: [],
  addCircle: () => {},
  updateCircle: () => {},
  deleteCircle: () => {},
});

export default CircleContext;
