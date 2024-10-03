"use client";
import { useContext } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, X } from "lucide-react";
import CircleContext from "@/context/circle-context";

export default function Dimension({
  circleId,
  circleCoordinates,
  dragZoneRef,
}: {
  dragZoneRef: React.RefObject<HTMLDivElement>;
  circleId: string;
  circleCoordinates: { x: number; y: number };
}) {
  const { circles, updateCircle, deleteCircle } = useContext(CircleContext);

  const handleInputChange = (field: "x" | "y", value: string) => {
    const newValue = Math.max(0, parseInt(value, 10));

    if (field === "x") {
      if (dragZoneRef.current) {
        const container = dragZoneRef.current.getBoundingClientRect();
        const currentCircle = circles.find((circle) => circle.id === circleId);

        if (currentCircle) {
          const maxX = container.width - currentCircle.width;
          const boundedX = Math.min(newValue, maxX);
          updateCircle(circleId, {
            x: boundedX,
            y: currentCircle.coordinates.y,
          });
        }
      } else {
        updateCircle(circleId, {
          x: newValue,
          y: circleCoordinates.y,
        });
      }
    } else if (field === "y") {
      if (dragZoneRef.current) {
        const container = dragZoneRef.current.getBoundingClientRect();
        const currentCircle = circles.find((circle) => circle.id === circleId);

        if (currentCircle) {
          const maxY = container.height - currentCircle.height;
          const boundedY = Math.min(newValue, maxY);
          updateCircle(circleId, {
            x: currentCircle.coordinates.x,
            y: boundedY,
          });
        }
      } else {
        updateCircle(circleId, {
          x: circleCoordinates.x,
          y: newValue,
        });
      }
    }
  };

  return (
    <div
      id={`circle-${circleId}`}
      className="flex items-center space-x-4 mb-4 ml-2"
    >
      <div>
        <Label htmlFor={`x-${circleId}`}>X Point</Label>
        <Input
          className="h-14 bg-gray-200 w-30 border-0"
          id={`x-${circleId}`}
          type="number"
          name="x"
          value={circleCoordinates.x}
          onChange={(e) => handleInputChange("x", e.target.value)}
        />
      </div>
      <div className="flex">
        <X className="h-10 w-10 mt-6" />
      </div>
      <div>
        <Label htmlFor={`y-${circleId}`}>Y Point</Label>
        <Input
          className="h-14 bg-gray-200 w-30 border-0"
          id={`y-${circleId}`}
          type="number"
          name="y"
          value={circleCoordinates.y}
          onChange={(e) => handleInputChange("y", e.target.value)}
        />
      </div>

      {/* Remove circle button */}
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
