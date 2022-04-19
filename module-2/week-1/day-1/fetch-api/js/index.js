const promises = [];

for(let i = 1; i<= 3000; i++){
 promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then(response => {
   return response.json();
  }))
}

Promise.all(promises)
.then(values => {
  console.log('Values', values);
  values.forEach((pokemon) => {
    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    document.body.appendChild(image);
  })
})
.catch(error => console.error(error))

// TAKE RANDOM POKEMON

// const randomNumber = Math.floor(Math.random() * 50);
// fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
//   .then(response => {
//    return response.json();
//   })
//   .then(data => {
//     const image = document.createElement('img');
//     image.src = data.sprites.front_default;
//     document.body.appendChild(image);
//   })