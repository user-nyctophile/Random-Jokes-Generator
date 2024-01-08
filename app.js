const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById("get_joke");

//Add Eventlistener to the button
get_joke.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke()
{
    //Call the Icanhaz API
    const jokesRes = await fetch("https://icanhazdadjoke.com/",
        {
            headers: {
                accept: 'application/json'
            }
        });

    const joke = await jokesRes.json();

    console.log(joke);

    //Set Random Jokes
    jokeEl.innerHTML = joke.joke;
}