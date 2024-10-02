"use client";
import Image from "next/image";
import Circle from "@/components/circle/circle";
import { useContext } from "react";
import CircleContext from "@/context/circle-context";
export default function ProductImage() {
  const circleContext = useContext(CircleContext);

  const { circles } = circleContext || {};

  return (
    <div className="relative lg:w-1/2 aspect-square">
      <Image
        src={"/assets/image1.webp"}
        alt="Product Preview"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

      {circles?.map((circle) => (
        <Circle
          key={circle.id}
          id={circle.id}
          coordinates={circle.coordinates}
          width={circle.width}
          height={circle.height}
        />
      ))}
    </div>
  );
}
