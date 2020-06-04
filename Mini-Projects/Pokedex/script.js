const pokeContainer = document.getElementById('poke-container');
const pokeDetails = document.getElementById('poke-details');
const pokemonNumber = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCards(pokemon);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNumber; i++) {
    await getPokemon(i);
  }
};

fetchPokemons();

function createPokemonCards(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types.map((el) => el.type.name)[0];
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;

  pokemonEl.innerHTML = `<div class='img-container'>
  <img src="https://pokeres.bastionbot.org/images/pokemon/${
    pokemon.id
  }.png"/></div>
  <div class='info'>
    <span class='number'>#${pokemon.id.toString().padStart(3, '0')}</span>
    <h3 class='name'>${name}</h3>
    <span class='type'>Type: ${type}</span>
  </div>
   ${name}`;

  pokeContainer.appendChild(pokemonEl);
}
