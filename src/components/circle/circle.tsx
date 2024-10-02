import { TCircle } from "@/types";
export default function Circle({ id, coordinates, width, height }: TCircle) {
  return (
    <div
      id={id}
      className="absolute z-30 rounded-full border-2 border-white bg-gray-200 bg-opacity-50 hover:shadow-lg cursor-pointer transition-all aspect-square"
      style={{
        top: `${coordinates?.y}px`,
        left: `${coordinates?.x}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}
