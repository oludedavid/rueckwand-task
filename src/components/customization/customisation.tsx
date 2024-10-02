"use client";
import { useContext } from "react";
import Dimension from "@/components/dimension/dimension";
import Material from "@/components/materialContainer/material";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CircleContext from "@/context/circle-context";
export default function Customisation() {
  const circleContext = useContext(CircleContext);
  const { circles, addCircle } = circleContext;

  return (
    <div className="lg:w-1/2">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-6 pr-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maße. Eingeben.</h2>
            {circles?.map((circle) => (
              <Dimension
                key={circle.id}
                circleId={circle.id}
                circleCoordinates={circle.coordinates}
              />
            ))}
            <Button
              onClick={addCircle}
              variant={"default"}
              className="w-60 hover:bg-[#167C3D]/20 bg-[#167C3D]/10 border rounded-lg border-[#167C3D] text-[#167C3D] my-4"
            >
              Kreis hinzufügen
              <Plus className="ml-2 h-4 w-4" />
            </Button>
            <Separator />
            <Material />
            <Separator />
            <div className="mt-4">
              <Button className="w-60 p-6 bg-[#167C3D] text-white rounded-md">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
