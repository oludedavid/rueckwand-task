import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TMaterialSelected } from "@/types";
import { Lens } from "../ui/lens";

export default function Material({
  id,
  name,
  imageUrl,
  bgColor,
  onSelect,
  isSelected,
}: TMaterialSelected) {
  return (
    <div id={id} className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card
          onClick={() => onSelect(id)}
          style={{ backgroundColor: bgColor }}
          className={`${
            isSelected ? "border-2 border-[#167C3D]" : ""
          }   flex cursor-pointer bg-opacity-20 transition-all overflow-hidden max-w-72 hover:shadow-lg`}
        >
          <Lens>
            <div className="flex">
              <div className="flex w-40 h-40 p-[1px]">
                <Image
                  src={imageUrl}
                  alt={name}
                  width={160}
                  height={120}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <CardContent className="flex-1 p-4 flex flex-col justify-center">
                <h3 className="font-semibold text-lg mb-2">{name}</h3>
              </CardContent>
            </div>
          </Lens>
        </Card>
      </div>
    </div>
  );
}
