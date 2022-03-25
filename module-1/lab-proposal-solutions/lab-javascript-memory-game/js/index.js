const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.pairsClicked === 2) {
        return;
      }

      memoryGame.pickedCards.push(card);
      card.classList.toggle('turned');

      const firstPair = memoryGame.pickedCards[0];
      const secondPair = memoryGame.pickedCards[1];

      const firstPairName =
        firstPair && firstPair.getAttribute('data-card-name');
      const secondPairName =
        secondPair && secondPair.getAttribute('data-card-name');

      if (memoryGame.checkIfPair(firstPairName, secondPairName)) {
        firstPair.classList.toggle('blocked');
        secondPair.classList.toggle('blocked');
        memoryGame.pairsClicked = 0;
        memoryGame.pickedCards = [];
      } else {
        if (memoryGame.pairsClicked === 2) {
          setTimeout(() => {
            memoryGame.pairsClicked = 0;
            memoryGame.pickedCards = [];
            firstPair && firstPair.classList.toggle('turned');
            secondPair && secondPair.classList.toggle('turned');
          }, 1000);
        }
      }
    });
  });
});
