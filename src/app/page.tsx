"use client";
import ProductImage from "@/components/productImage/productImage";
import Customisation from "@/components/customization/customisation";
import { useState } from "react";
import { TCircle } from "@/types";
import { TMaterial } from "@/types";
import CircleContext from "@/context/circle-context";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  //Circle state
  const [circles, setCircles] = useState<TCircle[]>([
    {
      id: uuidv4(),
      coordinates: {
        x: 0,
        y: 0,
      },
      width: 50,
      height: 50,
    },
  ]);

  //Add a Circle
  const addCircle = () => {
    const newCircle: TCircle = {
      id: uuidv4(),
      coordinates: {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 50),
      },
      width: 50,
      height: 50,
    };
    setCircles([...circles, newCircle]);
  };

  //Update a Circle coordinates
  const updateCircle = (
    id: string,
    newCoordinates: { x: number; y: number }
  ) => {
    const circleToUpdate = circles.find((circle) => circle.id === id);
    if (circleToUpdate) {
      setCircles((prevCircles) => {
        return prevCircles.map((circle) => {
          if (circle.id === id) {
            return { ...circle, coordinates: newCoordinates };
          }
          return circle;
        });
      });
    }
  };

  //Delete a Circle
  const deleteCircle = (id: string) => {
    const circleToDelete = circles.find((circle) => circle.id === id);
    if (circleToDelete) {
      setCircles(circles.filter((circle) => circle.id !== id));
    }
  };

  return (
    <div className="container  px-4 py-8 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <CircleContext.Provider
          value={{ circles, addCircle, updateCircle, deleteCircle }}
        >
          <ProductImage />
          <Customisation />
        </CircleContext.Provider>
      </div>
    </div>
  );
}
