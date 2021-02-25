//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let pokemon = document.querySelector('#poke1').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.types[0].type.name) <--- Gets you type of pokemon

        console.log(data.weight)
        let pokeImage = document.querySelector('#pokeImg1')
        pokeImage.style.visibility = 'visible'
        document.querySelector('img').src = data.sprites.front_shiny
        document.querySelector('h3').innerHTML = data.types[0].type.name
        document.querySelector('h4').innerText = data.weight
        })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}