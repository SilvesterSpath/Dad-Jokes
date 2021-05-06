const jokeElement = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

button.addEventListener('click', generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeElement.innerHTML = data.joke;

  /*   fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    }); */
}
