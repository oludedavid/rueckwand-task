"use client";

import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import ProductImage from "@/components/productImage/productImage";
import Customisation from "@/components/customization/customisation";
import CircleContext from "@/context/circle-context";

import { TCircle } from "@/types";
import { materials } from "@/constants";

export default function Home() {
  // Reference to the drag zone
  const dragZoneRef = useRef<HTMLDivElement>(null);

  // Circle state management
  const [circles, setCircles] = useState<TCircle[]>([
    {
      id: uuidv4(),
      coordinates: { x: 0, y: 0 },
      width: 50,
      height: 50,
    },
  ]);

  // Material selection state
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("");
  const [materialImageUrl, setMaterialImageUrl] = useState<string>(
    materials[0].imageUrl
  );

  // Handle material selection
  const handleMaterialSelectedId = (materialSelectedId: string) => {
    setSelectedMaterialId(materialSelectedId);
    const selectedMaterial = materials.find(
      (material) => material.id === materialSelectedId
    );
    if (selectedMaterial) {
      setMaterialImageUrl(selectedMaterial.imageUrl);
    }
  };

  // Add a new circle
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
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  // Update circle coordinates
  const updateCircle = (
    id: string,
    newCoordinates: { x: number; y: number }
  ) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id ? { ...circle, coordinates: newCoordinates } : circle
      )
    );
  };

  // Delete a circle
  const deleteCircle = (id: string) => {
    setCircles((prevCircles) =>
      prevCircles.filter((circle) => circle.id !== id)
    );
  };

  return (
    <div className="container px-4 py-8 mx-auto">
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
