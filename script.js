const btnGerar = document.getElementById('btnGerar');
const pokemonImg = document.getElementById('pokemonImg');
const pokemonNome = document.getElementById('pokemonNome');
const pokemonNumero = document.getElementById('pokemonNumero');
const pokemonTipos = document.getElementById('pokemonTipos');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function buscarPokemon() {
    const numeroAleatorio = Math.floor(Math.random() * 1010) + 1;

    try {
        const response = await fetch(`${baseUrl}${numeroAleatorio}`);
        const data = await response.json();

        pokemonImg.src = data.sprites.front_default;
        pokemonNome.textContent = data.name;
        pokemonNumero.textContent = `nº ${data.id}`;

        pokemonTipos.innerHTML = '';
        data.types.forEach(tipo => {
            pokemonTipos.innerHTML += `<span>${tipo.type.name}</span>`;
        });

    } catch (error) {
        console.log(error);
    }
}

btnGerar.addEventListener('click', buscarPokemon);

buscarPokemon();