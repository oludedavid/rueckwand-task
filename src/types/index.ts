export type TCircle = {
  id: string;
  coordinates: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
};

export type TMaterial = {
  id: string;
  name: string;
  imageUrl: string;
  bgColor: string;
};
