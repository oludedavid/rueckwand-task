export default function Circle() {
  return (
    <div
      className="absolute z-30 h-16 w-16 rounded-full border-2 border-white bg-gray-200 bg-opacity-50 hover:shadow-lg cursor-pointer transition-all aspect-square"
      style={{
        top: `${"circle.y"}px`,
        left: `${"circle.x"}px`,
        width: `${"circle.width"}px`,
        height: `${"circle.height"}px`,
        // transition: draggingId === circle.id ? "none" : "top 0.3s, left 0.3s",
      }}
      // onMouseDown={(e) => handleMouseDown(e, circle.id)}
    />
  );
}
