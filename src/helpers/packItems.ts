interface Item {
  width: number;
  height: number;
  color: string;
}

interface PositionedItem extends Item {
  x: number;
  y: number;
  id: string;
}

interface PackingResult {
  placedItems: PositionedItem[];
}

function placeItems(containerWidth: number, containerHeight: number, itemsToPack: Item[]): PackingResult {
  const placedItems: PositionedItem[] = [];
  const sortedItems = [...itemsToPack].sort((a, b) => b.width - a.width || b.height - a.height);

  function placeItem(x: number, y: number, width: number, height: number): boolean {
    return !placedItems.some(
      placedItem =>
        x < placedItem.x + placedItem.width &&
        x + width > placedItem.x &&
        y < placedItem.y + placedItem.height &&
        y + height > placedItem.y
    );
  }

  sortedItems.forEach(item => {
    let isPlaced = false;

    for (let y = 0; y <= containerHeight - item.height && !isPlaced; y++) {
      for (let x = 0; x <= containerWidth - item.width; x++) {
        if (placeItem(x, y, item.width, item.height)) {
          placedItems.push({
            width: item.width,
            height: item.height,
            x,
            y,
            color: item.color,
            id: crypto.randomUUID(),
          });
          isPlaced = true;
          break;
        }
      }
    }
  });

  return { placedItems }
}

export default placeItems;
