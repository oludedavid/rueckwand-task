import { createContext } from "react";
import { TCircle } from "../types";

interface ICircleContext {
  circles: TCircle[];
  addCircle: () => void;
  updateCircle: (
    index: number,
    newCoordinates: { x: number; y: number }
  ) => void;
  deleteCircle: (index: number) => void;
}

const CircleContext = createContext<ICircleContext | null>(null);
