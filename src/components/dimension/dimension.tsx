"use client";

import { useContext } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, X } from "lucide-react";
import CircleContext from "@/context/circle-context";

interface DimensionProps {
  dragZoneRef: React.RefObject<HTMLDivElement>;
  circleId: string;
  circleCoordinates: { x: number; y: number };
}

export default function Dimension({
  circleId,
  circleCoordinates,
  dragZoneRef,
}: DimensionProps) {
  const { circles, updateCircle, deleteCircle } = useContext(CircleContext);

  const handleInputChange = (field: "x" | "y", value: string) => {
    const parsedValue = Math.max(0, parseInt(value, 10));

    const currentCircle = circles.find((circle) => circle.id === circleId);
    if (!currentCircle) return;

    let updatedCoordinates = { ...currentCircle.coordinates };

    if (field === "x") {
      if (dragZoneRef.current) {
        const containerWidth =
          dragZoneRef.current.getBoundingClientRect().width;
        const maxX = containerWidth - currentCircle.width;
        updatedCoordinates.x = Math.min(parsedValue, maxX);
      } else {
        updatedCoordinates.x = parsedValue;
      }
    } else if (field === "y") {
      if (dragZoneRef.current) {
        const containerHeight =
          dragZoneRef.current.getBoundingClientRect().height;
        const maxY = containerHeight - currentCircle.height;
        updatedCoordinates.y = Math.min(parsedValue, maxY);
      } else {
        updatedCoordinates.y = parsedValue;
      }
    }

    updateCircle(circleId, updatedCoordinates);
  };

  return (
    <div
      id={`circle-${circleId}`}
      className="flex flex-col lg:flex-row items-start lg:items-center space-x-4 mb-4 ml-2"
    >
      {/* X Coordinate Input */}
      <div>
        <Label htmlFor={`x-${circleId}`}>X Point</Label>
        <Input
          className="h-14 bg-gray-200 border-0"
          id={`x-${circleId}`}
          type="number"
          name="x"
          value={circleCoordinates.x}
          onChange={(e) => handleInputChange("x", e.target.value)}
        />
      </div>

      {/* Separator Icon */}
      <div className="flex">
        <X className="h-10 w-10 mt-6" />
      </div>

      {/* Y Coordinate Input */}
      <div>
        <Label htmlFor={`y-${circleId}`}>Y Point</Label>
        <Input
          className="h-14 bg-gray-200 border-0"
          id={`y-${circleId}`}
          type="number"
          name="y"
          value={circleCoordinates.y}
          onChange={(e) => handleInputChange("y", e.target.value)}
        />
      </div>

      {/* Remove Circle Button */}
      <Button
        onClick={() => deleteCircle(circleId)}
        variant="ghost"
        size="icon"
        className="mt-6 bg-red-500 rounded-full"
        disabled={circles.length === 1}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Remove Dimension</span>
      </Button>
    </div>
  );
}
