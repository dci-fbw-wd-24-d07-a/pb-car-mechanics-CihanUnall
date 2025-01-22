// Sabit veriler
const brands = ["Ford", "VW", "Porsche"];
const parts = ["Keilriemen", "Bremsklötze"];
const ids = [
  "Ford-Keilriemen",
  "VW-Keilriemen",
  "Porsche-Keilriemen",
  "Ford-Bremsklötze",
  "VW-Bremsklötze",
  "Porsche-Bremsklötze",
];
const amounts = [3, 5, 1, 4, 8, 0];

let search = "Fiat";
searchParts(search);

search = "Ford";
searchParts(search);

search = "VW";
searchParts(search);

search = "Porsche";
searchParts(search);

function searchParts(search) {
  if (!brands.includes(search)) {
    console.log(`Sorry, we don’t accept ${search}!`);
    return;
  }

  console.log(`Parts for ${search}:`);
  let partNumber = 1;
  for (let i = 0; i < ids.length; i++) {
    let part = ids[i].includes(search);
    let quantity = amounts[i];

    if (part) {
      if (quantity > 0) {
        console.log(`${partNumber}. ${ids[i]} ${quantity}`);
      } else {
        console.log(`Not in stock: ${partNumber}. ${ids[i]} ${part}`);
      }
      partNumber++;
    }
  }
}
