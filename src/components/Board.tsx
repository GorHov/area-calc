import { FC } from "react";
import placeItems from "../helpers/packItems";
import generateItems from "../helpers/generateItems";
import Item from "./Item";
import { useAppSelector } from "../hooks/redux";

const Board: FC = () => {
  const width: number = 1830;
  const height: number = 3630;

  const { list } = useAppSelector((state) => state.BoardReducer);
  const placedList = placeItems(width, height, generateItems(list));

  return (
    <div className="board-container">
      <div
        style={{
          position: "relative",
          border: "2px solid black",
          width: width / 2.4,
          height: height / 2.4,
        }}
      >
        {placedList.placedItems.map((item) => (
          <Item
            id={item.id}
            color={item.color}
            left={item.x}
            top={item.y}
            key={item.id}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
