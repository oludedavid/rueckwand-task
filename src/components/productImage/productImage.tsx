"use client";
import Image from "next/image";
import Circle from "@/components/circle/circle";
import { useContext, useState, useRef } from "react";
import CircleContext from "@/context/circle-context";

export default function ProductImage({
  materialImageUrl,
  dragZoneRef,
}: {
  dragZoneRef: React.RefObject<HTMLDivElement>;
  materialImageUrl: string;
}) {
  const circleContext = useContext(CircleContext);
  //get dragged circle id state
  const [isDragging, setIsDragging] = useState(false);
  const [draggingCircleId, setDraggingCircleId] = useState("");

  const { circles, updateCircle } = circleContext;

  //Track the circle being dragged at the beginning to the end
  //onDragStart function
  const handleDragStart = (circleId: string) => {
    setIsDragging(true);
    setDraggingCircleId(circleId);
  };
  //onDragEnd function
  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggingCircleId("");
  };
  //Drag Over zone
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  //function to check for collision using the center of the circle
  const DIAMETER = 50;
  const RADIUS = DIAMETER / 2;
  const COLLISION_DISTANCE_SQUARED = (RADIUS * 2) ** 2;
  const isColliding = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceSquared = dx * dx + dy * dy;
    return distanceSquared < COLLISION_DISTANCE_SQUARED;
  };

  //Drop zone on drag over zone
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggingCircleId === null) return;

    const dropX = event.clientX - event.currentTarget.offsetLeft;
    const dropY = event.clientY - event.currentTarget.offsetTop;

    // Check for collisions with other circles
    const collides = circles.some((circle, idx) => {
      if (circle.id === draggingCircleId) return false;
      return isColliding(
        circle.coordinates.x,
        circle.coordinates.y,
        dropX,
        dropY
      );
    });

    if (!collides) {
      updateCircle(draggingCircleId, { x: dropX, y: dropY });
    } else {
      console.log("Collided with another circle");
    }

    setIsDragging(false);
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
          onDragStart={() => handleDragStart(circle.id)}
          onDragEnd={handleDragEnd}
          isDragging={isDragging && circle.id === draggingCircleId}
        />
      ))}
    </div>
  );
}
