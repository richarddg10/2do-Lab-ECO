let canvas
let bulbasaurURL
let charmanderURL
let squirtleURL
let bulbasaurNewData
let charmanderNewData
let squirtleNewData

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    bulbasaurAPI()
    charmanderAPI()
    squirtleAPI()
}

function draw() {
    background(255);
    newCursor();

    if (bulbasaurURL !== undefined) {
        fill(0)
        image (imgbulbasaur, 20, 50, 100, 100)
        text (`${bulbasaurURL.id}`, 20, 170)
        text (`${bulbasaurURL.name}`, 40, 170)
    }

    if (charmanderURL !== undefined) {
        fill(0)
        image (imgcharmander, 300, 50, 100, 100)
        text (`${charmanderURL.id}`, 300, 170)
        text (`${charmanderURL.name}`, 320, 170)
    }

    if (squirtleURL !== undefined) {
        fill(0)
        image (imgsquirtle, 100, 300, 100, 100)
        text (`${squirtleURL.id}`, 115, 420)
        text (`${squirtleURL.name}`, 135, 420)
    }

    if (bulbasaurNewData !== undefined) {
        fill(255, 0, 0)
        text('Attack:', 140, 120)
        text('Defense:', 140, 130)
        fill(0)
        text(`${bulbasaurNewData.stats[1].base_stat}`, 180, 120)
        text(`${bulbasaurNewData.stats[2].base_stat}`, 190, 130)
    }

    if (charmanderNewData !== undefined) {
        fill(255, 0, 0)
        text('Attack:', 430, 120)
        text('Defense:', 430, 130)
        fill(0)
        text(`${charmanderNewData.stats[1].base_stat}`, 470, 120)
        text(`${charmanderNewData.stats[2].base_stat}`, 480, 130)
    }

    if (squirtleNewData !== undefined) {
        fill(255, 0, 0)
        text('Attack:', 230, 370)
        text('Defense:', 230, 380)
        fill(0)
        text(`${squirtleNewData.stats[1].base_stat}`, 270, 370)
        text(`${squirtleNewData.stats[2].base_stat}`, 280, 380)
    }
}

async function bulbasaurAPI() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${1}`)
        const data  = await results.json()
        bulbasaurURL = data
        console.log(bulbasaurURL)
        imgbulbasaur = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif`)
    } catch (error) {
        alert ('hubo un error')
    }
}

async function charmanderAPI() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${4}`)
        const data  = await results.json()
        charmanderURL = data
        console.log(charmanderURL)
        imgcharmander = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif`)
    } catch (error) {
        alert ('hubo un error')
    }
}

async function squirtleAPI() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${7}`)
        const data  = await results.json()
        squirtleURL = data
        console.log(squirtleURL)
        imgsquirtle = loadImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif`)
    } catch (error) {
        alert ('hubo un error')
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    newVariableBulbasaur()
    newVariableCharmander()
    newVariableSquirtle()
}

async function newVariableBulbasaur() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${1}`)
        const data  = await results.json()
        bulbasaurNewData = data
        console.log(bulbasaurNewData)
    } catch (error) {
        alert ('hubo un error')
    }
}

async function newVariableCharmander() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${4}`)
        const data  = await results.json()
        charmanderNewData = data
        console.log(charmanderNewData)
    } catch (error) {
        alert ('hubo un error')
    }
}

async function newVariableSquirtle() {
    try {
        const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${7}`)
        const data  = await results.json()
        squirtleNewData = data
        console.log(squirtleNewData)
    } catch (error) {
        alert ('hubo un error')
    }
}

function newCursor() {
    noStroke();
    fill(0);
    ellipse(pmouseX, pmouseY, 10, 10);
}