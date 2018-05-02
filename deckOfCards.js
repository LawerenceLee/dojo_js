class Deck {
    constructor() {
        this._deck = [];
        this.createDeck();
        this.shuffle();
    }

    createDeck() {
        let suits = ['♠', '♥', '♦', '♣'];
        let faceValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        suits.forEach(suit => {
                for (let x=0; x<faceValue.length; x++) {
                    this._deck.push([suit, faceValue[x]]);
                }
        })
    }

    shuffle() {
        let index, temp;
        for (let x=this._deck.length-1; x>=0; x--) {
            index = Math.floor(Math.random() * x);
            temp = this._deck[x];
            this._deck[x] = this._deck[index];
            this._deck[index] = temp;
        }
    }

    reset() {
        this._deck = [];
        this.createDeck();
        this.shuffle();
    }

    dealCard() {
        return this._deck.shift()
    }

    dealRandomCard() {
        let randNum = Math.floor(Math.random() * this._deck.length);
        let card = this._deck[randNum];
        this._deck.splice(randNum, 1)
        console.log(this._deck.length)
        return card
    }

}

class Player {
    constructor(name, deckInstance) {
        this.name = name;
        this.hand = [];
        this._deckInstance = deckInstance;
    }

    draw(numOfCards=1) {
        for (let x=0; x<numOfCards; x++) {
            this.hand.push(this._deckInstance.dealCard())
        }
        return this
    }

    discard(cardIndex) {
        this.hand.splice(cardIndex, 1)
        return this
    }

}

const poker = new Deck();
// console.log(poker._deck)
const joey = new Player('Joey', poker);
joey.draw(2)
console.log(joey.hand);
joey.draw()
console.log(joey.hand);
joey.discard(1)
console.log(joey.hand);