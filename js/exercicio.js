
const grid = document.querySelector('.content')

const characters = [
    'ahri',
    'akali',
    'akshan',
    'ekko',
    'evelynn',
    'fiora',
    'fizz',
    'irelia',
    'kassadin',
    'katarina',
    'kha_zix',
    'leesin',
    'masterYI',
    'pantheon',
    'pyke',
    'rengar',
    'riven',
    'samira',
    'vayne',
    'vayne_skin',
    'yasuo',
    'yone',
    'zed'    
]


const elementTag = (tag, classN) => {
    const element = document.createElement(tag);
    element.className = classN;
    return element;
}

const newCard = () => {

    const card = elementTag('div', 'card');
    const front = elementTag('div', 'face front');
    const back = elementTag('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

newCard()

const loadGame = () =>{
    characters.forEach((character) => {
       const card = newCard();
       grid.appendChild(card);

        
    });
}

loadGame()