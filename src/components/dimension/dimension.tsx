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
}: {
  circleId: string;
  circleCoordinates: { x: number; y: number };
}) {
  const circleContext = useContext(CircleContext);
  // Handle the case where circleContext is null
  if (!circleContext) {
    return <div>Error: CircleContext is not available.</div>;
  }

  const { circles, updateCircle, deleteCircle } = circleContext;

  return (
    <div id={`x-${circleId}`} className="flex items-center space-x-4 mb-4 ml-2">
      <div>
        <Label htmlFor={`x-${"index"}`}>X Point</Label>
        <Input
          className="h-14 bg-gray-200 w-30 border-0"
          id={`x-${"index"}`}
          type="number"
          value={circleCoordinates.x}
          onChange={(e) => {
            updateCircle(circleId, {
              x: parseInt(e.target.value),
              y: circleCoordinates.y,
            });
          }}
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
          value={circleCoordinates.y}
          onChange={(e) => {
            updateCircle(circleId, {
              x: circleCoordinates.x,
              y: parseInt(e.target.value),
            });
          }}
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
