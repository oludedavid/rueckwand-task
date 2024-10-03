"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Circle from "@/components/circle/circle";
import CircleContext from "@/context/circle-context";

interface ProductImageProps {
  materialImageUrl: string;
  dragZoneRef: React.RefObject<HTMLDivElement>;
}

export default function ProductImage({
  materialImageUrl,
  dragZoneRef,
}: ProductImageProps) {
  const { circles, updateCircle } = useContext(CircleContext);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingCircleId, setDraggingCircleId] = useState<string>("");

  const DIAMETER = 50;
  const COLLISION_DISTANCE_SQUARED = DIAMETER ** 2;

  const isColliding = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy < COLLISION_DISTANCE_SQUARED;
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!draggingCircleId) return;

    const dropX = event.clientX - event.currentTarget.offsetLeft;
    const dropY = event.clientY - event.currentTarget.offsetTop;

    const hasCollision = circles.some((circle) => {
      if (circle.id === draggingCircleId) return false;
      return isColliding(
        circle.coordinates.x,
        circle.coordinates.y,
        dropX,
        dropY
      );
    });

    if (!hasCollision) {
      updateCircle(draggingCircleId, { x: dropX, y: dropY });
    } else {
      console.log("Collided with another circle");
    }

    setIsDragging(false);
    setDraggingCircleId("");
  };

  const handleDragStart = (circleId: string) => {
    setIsDragging(true);
    setDraggingCircleId(circleId);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggingCircleId("");
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      ref={dragZoneRef}
      className="relative lg:w-1/2 aspect-square"
    >
      <Image
        src={materialImageUrl}
        alt="Product Preview"
        fill
        className="object-cover rounded-lg"
      />

      {circles.map((circle) => (
        <Circle
          key={circle.id}
          id={circle.id}
          coordinates={circle.coordinates}
          width={circle.width}
          height={circle.height}
          onDragStart={() => handleDragStart(circle.id)}
          onDragEnd={handleDragEnd}
          isDragging={isDragging && circle.id === draggingCircleId}
        />
      ))}
    </div>
  );
}
