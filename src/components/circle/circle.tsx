import { TCircle } from "@/types";
export default function Circle({
  id,
  coordinates,
  width,
  height,
  onDragEnd,
  onDragStart,
  isDragging,
}: TCircle) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      id={id}
      className="absolute z-30 rounded-full border-2 border-white bg-gray-200 bg-opacity-50 hover:shadow-lg cursor-pointer transition-all aspect-square"
      style={{
        top: `${coordinates?.y}px`,
        left: `${coordinates?.x}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: isDragging ? "translateX(-9999px)" : "translateX(0)",
        transition: "transform 0.01s",
      }}
    />
  );
}
