async function getUser() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        const user = await response.json();
        console.log("Id:", user.id);
        console.log("Email:", user.email);
    } catch (error) {
        console.error('Помилка:', error);
    }
}
getUser();

async function getFilm() {
    try {
        const response = await fetch(`https://swapi.dev/api/people/1`);
        const film = await response.json();
        console.log("name:", film.name);
        console.log("created:", film.created);
    } catch (error) {
        console.error('Помилка:', error);
    }
}
getFilm();

async function getPlanet() {
    try {
        const response = await fetch(`https://swapi.dev/api/planets/3`);
        const planet = await response.json();
        console.log("name:", planet.name);
        console.log("climate:", planet.climate);
    } catch (error) {
        console.error('Помилка:', error);
    }
}
getPlanet();
