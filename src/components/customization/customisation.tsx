"use client";
import { useContext, useState } from "react";
import Dimension from "@/components/dimension/dimension";
import Material from "@/components/materialContainer/material";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CircleContext from "@/context/circle-context";
import { materials } from "@/constants";
export default function Customisation({
  dragZoneRef,
  handleMaterialSelectedId,
}: {
  dragZoneRef: React.RefObject<HTMLDivElement>;
  handleMaterialSelectedId: (materialId: string) => void;
}) {
  const circleContext = useContext(CircleContext);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const { circles, addCircle } = circleContext;

  const handleMaterialSelected = (materialId: string) => {
    const material = materials.find((m) => m.id === materialId) || materials[0];
    setSelectedMaterial(material);
    handleMaterialSelectedId(material.id);
  };

  const handleLogData = () => {
    console.log(circles);
    console.log(selectedMaterial);
  };

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
                dragZoneRef={dragZoneRef}
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
            {materials.map((material) => (
              <Material
                key={material.id}
                id={material.id}
                name={material.name}
                imageUrl={material.imageUrl}
                onSelect={() => handleMaterialSelected(material.id)}
                isSelected={material.id === selectedMaterial.id}
                bgColor={material.bgColor}
              />
            ))}
            <Separator />
            <div className="mt-4">
              <Button
                type="submit"
                onClick={handleLogData}
                className="w-60 p-6 bg-[#167C3D] text-white rounded-md"
              >
                Log Data
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
