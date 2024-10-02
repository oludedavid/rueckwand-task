import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Material() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Material. Auswählen.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card className="flex cursor-pointer transition-all overflow-hidden bg-[#167C3D]/10 max-w-72">
          <div className="flex h-32">
            <div className="w-32 relative">
              <Image
                src={"/assets/image1.webp"}
                alt={"material.name"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <CardContent className="flex-1 p-4 flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-2">{"material"}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
