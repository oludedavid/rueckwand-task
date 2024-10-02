import Image from "next/image";
import Circle from "@/components/circle/circle";
export default function ProductImage() {
  return (
    <div className="relative lg:w-1/2 aspect-square">
      <Image
        src={"/assets/image1.webp"}
        alt="Product Preview"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <Circle />
    </div>
  );
}
