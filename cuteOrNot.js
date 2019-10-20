let dogPic = document.createElement('img')
let catPic = document.createElement('img')

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#dog_button')
    button.addEventListener('click', () => {
        animalToDOM()
    })

})

const loadDogImg = async () => {

    const {
        data
    } = await axios.get(`https://dog.ceo/api/breeds/image/random`)

    return data
}

const loadCatImg = async () => {
    const {
        data
    } = await axios.get(`https://api.thecatapi.com/v1/images/search`)

    return data
}

const getContainer = () => document.querySelector('#container')

const createCatButton = () => {
    let catButton = document.createElement('button');
    catButton.innerText = 'Cat';
    catButton.className = 'pet';

    return catButton;
}

const createDogButton = () => {
    let dogButton = document.createElement('button');
    dogButton.className = 'pet';
    dogButton.innerText = 'Dog'

    return dogButton;
}

const animalToDOM = async () => {
    let catData = await loadCatImg()
    let dogData = await loadDogImg()
    let container = getContainer()
    replacePics()

    let cat = document.createElement('div');
    let catButton = createCatButton()
    cat.id = 'cat';

    let dog = document.createElement('div');
    let dogButton = createDogButton();
    dog.id = 'dog';

    dogPic.src = dogData.message
    catPic.src = catData[0].url

    cat.append(catPic, catButton);
    dog.append(dogPic, dogButton)

    container.append(cat, dog)
}

const replacePics = async () => {
    container = getContainer()
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}