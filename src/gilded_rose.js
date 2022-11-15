function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const  itemUpdateMap = {
  "Sulfuras, Hand of Ragnaros": noUpdate,
  "Conjured Mana Cake": conjureUpdate,
  "Aged Brie": brieUpdate,
  "Backstage passes to a TAFKAL80ETC concert": backstageUpdate,
}

function update_quality(items = []) {
  return items.map(item => {
    const itemUpdate = itemUpdateMap?.[item.name] || normalUpdate
    itemUpdate(item)
  });
}

function noUpdate(item) {
  return;
}

function normalUpdate(item) {
  item.sell_in -= 1;
  if (item.quality === 0) return;
  item.quality -= 1;
  if (item.sell_in < 0) qualityTick = item.quality -= 1;
}

function conjureUpdate(item) {
  item.sell_in -= 1;
  item.quality -= 2;
  if (item.sell_in < 0) qualityTick = item.quality -= 2;
  if (item.quality < 0) item.quality = 0;
}

function brieUpdate(item) {
  item.sell_in -= 1;
  if (item.quality === 50) return;
  item.quality += 1;
  if (item.quality === 50) return;
  if (item.sell_in < 0) qualityTick = item.quality += 1;
}

function backstageUpdate(item) {
  item.sell_in -= 1;
  item.quality += 1;
  if (item.sell_in <= 10) item.quality += 1;
  if (item.sell_in <= 5) item.quality += 1;
  if (item.sell_in <= 0) item.quality = 0;
  if (item.quality > 50) item.quality = 50;
}
