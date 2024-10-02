import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
export default function Dimension() {
  return (
    <div className="flex items-center space-x-4 mb-4 ml-2">
      <div>
        <Label htmlFor={`x-${"index"}`}>X Point</Label>
        <Input
          className="h-14 bg-gray-200 w-30 border-0"
          id={`x-${"index"}`}
          type="number"
          value={"point.x"}
          // onChange={(e) => handleInputChange(point.id, "x", e.target.value)}
        />
      </div>
      <div className="flex">
        <X className="h-10 w-10 mt-6" />
      </div>
      <div>
        <Label htmlFor={`y-${"index"}`}>Y Point</Label>
        <Input
          className="h-14 bg-gray-200 w-30 border-0"
          id={`x-${"index"}`}
          type="number"
          value={"point.y"}
          // onChange={(e) => handleInputChange(point.id, "x", e.target.value)}
        />
      </div>
      {/* Remove circle button */}
      <Button
        variant="ghost"
        size="icon"
        className="mt-6 bg-red-500 rounded-full"
        // onClick={() => handleRemovePoint(point.id)}
        // disabled={circlepoints.length === 1}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Remove Dimension</span>
      </Button>
    </div>
  );
}
