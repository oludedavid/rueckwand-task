"use client";
import ProductImage from "@/components/productImage/productImage";
import Customisation from "@/components/customization/customisation";
import { useState, useRef } from "react";
import { TCircle } from "@/types";
import { TMaterial } from "@/types";
import { materials } from "@/constants";
import CircleContext from "@/context/circle-context";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  //Handle the drag zone and drop area
  const dragZoneRef = useRef<HTMLDivElement>(null);
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

  //Material state
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("");
  const [materialImageUrl, setMaterialImageUrl] = useState<string>(
    materials[0].imageUrl
  );
  function handleMaterialSelectedId(materialSeletedId: string) {
    setSelectedMaterialId(materialSeletedId);
    const material = materials.find((m) => m.id === materialSeletedId);
    if (material) {
      setMaterialImageUrl(material.imageUrl);
    }
  }

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
      setCircles((prevCircles) => {
        return prevCircles.filter((circle) => circle.id !== id);
      });
    }
  };

  return (
    <div className="container  px-4 py-8 mx-auto">
      <h1 className="text-3xl p-1 font-bold">Küchenrückwand</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <CircleContext.Provider
          value={{ circles, addCircle, updateCircle, deleteCircle }}
        >
          <ProductImage
            dragZoneRef={dragZoneRef}
            materialImageUrl={materialImageUrl}
          />

          <Customisation
            dragZoneRef={dragZoneRef}
            handleMaterialSelectedId={handleMaterialSelectedId}
          />
        </CircleContext.Provider>
      </div>
    </div>
  );
}
