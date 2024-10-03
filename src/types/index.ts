export type TCircle = {
  id: string;
  coordinates: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
  isDragging?: boolean;
};

export type TMaterial = {
  id: string;
  name: string;
  imageUrl: string;
  bgColor: string;
};

// Extending TMaterial to create TMaterialSelected
export interface TMaterialSelected extends TMaterial {
  onSelect: (id: string) => void;
  isSelected: boolean;
}
