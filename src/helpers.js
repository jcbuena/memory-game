// credit to Paul Irish at https://www.paulirish.com/2009/random-hex-color-code-snippets/
const generateRandomHexColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

export function generateColors (n) {
    const colors = [];
    for (let i = 0; i < n; i++) {
        colors.append(generateRandomHexColor())
    }
    return colors;
}

