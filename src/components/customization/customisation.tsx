import Dimension from "@/components/dimension/dimension";
import Material from "@/components/materialContainer/material";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export default function Customisation() {
  return (
    <div className="lg:w-1/2">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-6 pr-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maße. Eingeben.</h2>
            <Dimension />
            <Button
              variant={"default"}
              // onClick={handleAddCirclepoint}
              className="w-60 hover:bg-[#167C3D]/20 bg-[#167C3D]/10 border rounded-lg border-[#167C3D] text-[#167C3D] my-4"
            >
              Rückwand hinzufügen <Plus className="ml-2 h-4 w-4" />
            </Button>
            <Separator />
            <Material />
            <Separator />
            <div className="mt-4">
              <Button
                // onClick={handleSubmit}
                className="w-60 p-6 bg-[#167C3D] text-white rounded-md"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
