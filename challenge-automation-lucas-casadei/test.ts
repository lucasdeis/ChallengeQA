import axios from 'axios';

async function testAxios() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  console.log(response.data);
}

testAxios();
