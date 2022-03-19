class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // for i from 0 to n−2 do
  //  j ← random integer such that i ≤ j < n
  //  exchange a[i] and a[j]
  shuffleCards() {
    if (!this.cards) {
      // return undefined
      return
    }

    // const shuffleArray = []; // Create an empty array
    // for (let i = 0; i < this.cards.length; i++) {
    //   const randomCardIndex = Math.floor(Math.random() * this.cards.length);
    //   const randomCard = this.cards[randomCardIndex];
    //   shuffleArray.push(randomCard);
    // }
    // this.cards = shuffleArray;

    for (let i = 0; i < this.cards.length; i++) {
      const randomCardIndex = Math.floor(Math.random() * this.cards.length);
      const randomCard = this.cards[randomCardIndex];
      
      this.cards[randomCardIndex] = this.cards[i];
      this.cards[i] = randomCard;
    }
 
  }

  // aquaman & batman
  // batman & batman
  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1 === card2){
      // this.pairsGuessed += 1;
      this.pairsGuessed++;
      return true;
    } 
    return false;
  }

  checkIfFinished() {
    // (this.cards.length / 2) -> Number of pairs
    if(this.pairsGuessed === (this.cards.length / 2)){
      return true;
    }

    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
