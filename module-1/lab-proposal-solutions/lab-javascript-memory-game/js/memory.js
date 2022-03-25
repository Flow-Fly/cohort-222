class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return;

    let remainingElements = this.cards.length;
    let tmp;
    let randomIndex;

    // While there remain elements to shuffle…
    while (remainingElements) {
      // Pick a remaining element…
      randomIndex = Math.floor(Math.random() * remainingElements--);

      // And swap it with the current element.
      tmp = this.cards[remainingElements];
      this.cards[remainingElements] = this.cards[randomIndex];
      this.cards[randomIndex] = tmp;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
