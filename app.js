function game(){
    const cardArray = [
        {
            name: 'img1',
            img: 'img/img1.jpg'
        },
        {
            name: 'img1',
            img: 'img/img1.jpg'
        },
        {
            name: 'img2',
            img: 'img/img2.jpg'
        },
        {
            name: 'img2',
            img: 'img/img2.jpg'
        },
        {
            name: 'img3',
            img: 'img/img3.jpg'
        },
        {
            name: 'img3',
            img: 'img/img3.jpg'
        },
        {
            name: 'img4',
            img: 'img/img4.jpg'
        },
        {
            name: 'img4',
            img: 'img/img4.jpg'
        },
        {
            name: 'img5',
            img: 'img/img5.jpg'
        },
        {
            name: 'img5',
            img: 'img/img5.jpg'
        },
        {
            name: 'img6',
            img: 'img/img6.jpg'
        },
        {
            name: 'img6',
            img: 'img/img6.jpg'
        }
    ]
    const grid = document.querySelector('.grid');
    const gameStatus = document.querySelector('#status');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    cardArray.sort(()=> 0.5 - Math.random());
    
    for(let i=0; i<cardArray.length; i++){
        card = document.createElement('img');
        card.setAttribute('src','img/blank.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
    }
    
    
    function flipCard(){
        cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,100);
        }
    }
    
    
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        optionOneId = cardsChosenId[0];
        optionTwoId = cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1]){
            gameStatus.innerText = "Found a match";
            gameStatus.style.color = "Green";
            cards[optionOneId].setAttribute('src','img/white.jpg');
            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionTwoId].setAttribute('src','img/white.jpg');
            cards[optionTwoId].removeEventListener('click',flipCard);
            cardsWon.push(cardsChosen);
        }
        else{
            gameStatus.innerText = "Not a match";
            gameStatus.style.color = "Red";
            cards[optionOneId].setAttribute('src','img/blank.jpg');
            cards[optionTwoId].setAttribute('src','img/blank.jpg');
    
        }
        cardsChosen = [];
        cardsChosenId = [];
    }
    if(cardsWon.length === cardArray.length){
        document.getElementById('score').innerText = "Congratulations!! You've won";
    }
    
}

game();