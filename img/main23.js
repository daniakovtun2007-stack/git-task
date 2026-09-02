fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        json.forEach((user, index) => {
            console.log(
                `Username ${index + 1}:`,
                user.username,
                `and Email:`,
                user.email
            );
        });
    })
    .catch(error => {
        console.log("Помилка:", error);
    });
    
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log(`Ім'я: ${user.name}`);
        console.log(`Нікнейм: ${user.username}`);
        console.log(`Email: ${user.email}`);
    })
    .catch(error => {
        console.log("Помилка:", error);
    });

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            console.log(post.title);
        });
    })
    .catch(error => {
        console.log("Помилка:", error);
    });

    const button = document.querySelector("#loadPlanet");
const planet = document.querySelector("#planet");

button.addEventListener("click", function () {

    fetch("https://swapi.dev/api/planets/1/")
        .then(response => response.json())
        .then(data => {

            planet.innerHTML = "";

            const card = document.createElement("div");
            card.classList.add("card");

            for (let key in data) {

                const value = data[key];

                if (Array.isArray(value)) {

                    const title = document.createElement("h3");
                    title.textContent = key;
                    card.appendChild(title);

                    value.forEach(link => {
                        const a = document.createElement("a");

                        a.href = link;
                        a.textContent = link;

                        card.appendChild(a);
                    });

                } else {

                    const p = document.createElement("p");

                    p.textContent = `${key}: ${value}`;

                    card.appendChild(p);
                }
            }

            planet.appendChild(card);
        })
        .catch(error => {
            console.log("Помилка:", error);
        });
});