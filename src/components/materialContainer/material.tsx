import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TMaterialSelected } from "@/types";

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
          <div className="flex h-32">
            <div className="w-32 relative">
              <Image
                src={imageUrl}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <CardContent className="flex-1 p-4 flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-2">{name}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
