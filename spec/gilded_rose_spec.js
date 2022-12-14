function getItems() {
  let items = [];

  items.push(new Item("normal", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Sulfuras, Hand of Ragnaros", -1, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49));
  items.push(new Item("Conjured Mana Cake", 3, 13));
  return items;
}

function updateItems(items, times) {
  let x = times
  while (x > 0) {
    update_quality(items);
    x -= 1;
  }
}

describe("Gilded Rosee List of items", () => {
  const items = getItems();
  update_quality(items);

  it("normal", () => {
    expect(items[0].sell_in).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("Aged Brie", () => {
    expect(items[1].sell_in).toBe(1);
    expect(items[1].quality).toBe(1);
  });

  it("Elixir of the Mongoose", () => {
    expect(items[2].sell_in).toBe(4);
    expect(items[2].quality).toBe(6);
  });

  it("Sulfuras, Hand of Ragnaros", () => {
    expect(items[3].sell_in).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].sell_in).toBe(-1);
    expect(items[4].quality).toBe(80);
  });

  it("Backstage passes to a TAFKAL80ETC concert", () => {
    expect(items[5].sell_in).toBe(14);
    expect(items[5].quality).toBe(21);
    expect(items[6].sell_in).toBe(9);
    expect(items[6].quality).toBe(50);
    expect(items[7].sell_in).toBe(4);
    expect(items[7].quality).toBe(50);
  });

  it("Conjured Mana Cake", () => {
    expect(items[8].sell_in).toBe(2);
    expect(items[8].quality).toBe(11);
  });
});

describe("Normal", () => {

  it("2 updates", () => {
    const items = [new Item("normal", 10, 20)]
    updateItems(items, 2)

    expect(items[0].sell_in).toBe(8);
    expect(items[0].quality).toBe(18);
  });

  it("16 updates", () => {
    const items = [new Item("normal", 10, 20)]
    updateItems(items, 16)

    expect(items[0].sell_in).toBe(-6);
    expect(items[0].quality).toBe(0);
  })
})

describe("Aged Brie", () => {

  it("2 updates", () => {
    const items = [new Item("Aged Brie", 2, 0)]
    updateItems(items, 2)

    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(2);
  });

  it("16 updates", () => {
    const items = [new Item("Aged Brie", 2, 0)]
    updateItems(items, 16)

    expect(items[0].sell_in).toBe(-14);
    expect(items[0].quality).toBe(30);
  })
})

describe("Sulfuras", () => {

  it("2 updates", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80), new Item("Sulfuras, Hand of Ragnaros", -1, 80)]
    updateItems(items, 2)

    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(80);
    expect(items[1].sell_in).toBe(-1);
    expect(items[1].quality).toBe(80);
  });

  it("16 updates", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80), new Item("Sulfuras, Hand of Ragnaros", -1, 80)]

    updateItems(items, 16)

    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(80);
    expect(items[1].sell_in).toBe(-1);
    expect(items[1].quality).toBe(80);
  })
})

describe("Backstage", () => {

  it("2 updates", () => {
    const items = []
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49));
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49));
    updateItems(items, 2)

    expect(items[0].sell_in).toBe(13);
    expect(items[0].quality).toBe(22);
    expect(items[1].sell_in).toBe(8);
    expect(items[1].quality).toBe(50);
    expect(items[2].sell_in).toBe(3);
    expect(items[2].quality).toBe(50);
  });

  it("16 updates", () => {
    const items = []
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49));
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49));
    updateItems(items, 16)

    expect(items[0].sell_in).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].sell_in).toBe(-6);
    expect(items[1].quality).toBe(0);
    expect(items[2].sell_in).toBe(-11);
    expect(items[2].quality).toBe(0);
  })
})

describe("Conjured", () => {

  it("2 updates", () => {
    const items = [new Item("Conjured Mana Cake", 3, 13)]
    updateItems(items, 2)

    expect(items[0].sell_in).toBe(1);
    expect(items[0].quality).toBe(9);
  });

  it("16 updates", () => {
    const items = [new Item("Conjured Mana Cake", 3, 13)]
    updateItems(items, 16)

    expect(items[0].sell_in).toBe(-13);
    expect(items[0].quality).toBe(0);
  })
})
