import { FC } from "react";

export interface ItemProps {
  width: number;
  height: number;
  id: string;
  color: string;
  left: number;
  top: number;
}

const Item: FC<ItemProps> = ({
  width,
  height,
  color,
  left,
  top,
}: ItemProps) => {
  return (
    <div
      style={{
        width: `${width / 2.4 - 3}px`,
        height: `${height / 2.4 - 3}px`,
        backgroundColor: color,
        position: "absolute",
        left : left / 2.4,
        top : top / 2.4,
      }}
    ></div>
  );
};

export default Item;
