  const cardArray = [
      {
          name: 'blank',
          img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png' ,
      },
      {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png' ,
    },
    {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png' ,
    },
    {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png' ,
    },
    {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png' ,
    },
    {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png' ,
    },
    {
        name: 'icecream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/icecream.png' ,
    },
    {
        name: 'Blank2',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png' ,
    }

  ]

  cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector(`#grid`)

function createBoard () {
    for (let i = 0; i < 10; i++) {
        document.createElement('img')
        cardArray.setAttribute('src', 'image/blank.png')
        cardArray.setAttribute("data-id", i)
        gridDisplay.appendChild(card)
    }
}


function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    this.settAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {setTimeout(checkMatch,500)
    }


}

createBoard()

function checkMatch() {
    console.log('check for match')
    if(optionOneId == optionTwoId) {
        card[optionOneId].setAttribute('src', 'images/white.png')
        card[optionTwoId].setAttribute('src', 'images/white.png')
        card[optionOneId].removeEventListener('click',flipCard)
        card[optionOneId].removeEventListener('click',flipCard)
         cardsWon.push(cardsChosen)
    } else {

    }
    cardsChosen = []
    cardsChosen = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
        
    }
}
