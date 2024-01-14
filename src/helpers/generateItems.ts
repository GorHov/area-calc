interface TItem {
  id: string;
  width: number;
  height: number;
  color: string;
  quantity: number;
}

function generateItems(Items: TItem[]): TItem[] {
  let ItemsArray = 0;

  for (const item of Items) {
    ItemsArray += item.quantity;
  }

  const generatedItems: TItem[] = new Array(ItemsArray);

  let index = 0;

  for (const item of Items) {
    for (let i = 0; i < item.quantity; i++) {
      generatedItems[index] = { ...item, id: crypto.randomUUID() };
      index++;
    }
  }

  return generatedItems;
}

export default generateItems;
