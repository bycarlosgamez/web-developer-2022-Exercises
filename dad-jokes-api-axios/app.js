const jokes = document.querySelector('#jokes');

const button = document.querySelector('button');

const addNewJoke = async () => {
  const joke = await getDadJoke();
  const newLi = document.createElement('li');
  newLi.append(joke);
  jokes.append(newLi);
}
const getDadJoke = async () => {
  try {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch(e) {
     return "SORRY! No jokes available :("
  }
}

button.addEventListener('click', addNewJoke);