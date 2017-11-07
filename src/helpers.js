// credit to Paul Irish at https://www.paulirish.com/2009/random-hex-color-code-snippets/
const generateRandomHexColor = () => '#'+ (Math.random().toString(16) + "000000").slice(2, 8)

// Fisher Yates shuffling algorithm credit to stackoverflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateColors (n) {
    const colors = [];
    for (let i = 0; i < n; i++) {
        colors.push(generateRandomHexColor())
    }
    return colors;
}

export function generateCards(n) {
    const colors = generateColors(n / 2)
        .reduce( (cards, color) => cards.concat(color, color), []);
    return shuffle(colors);
    
}



