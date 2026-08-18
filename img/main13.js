const firstLevel = document.querySelectorAll("#tree > li");

console.log("Перший рівень:", firstLevel.length);

const secondLevel = document.querySelectorAll("#tree > li > ul > li");

console.log("Другий рівень:", secondLevel.length);

const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

const books = document.querySelector("#books");

booksArray.forEach(book => {

    const tr = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = book.title;

    const year = document.createElement("td");
    year.textContent = book.year;

    const rating = document.createElement("td");
    rating.textContent = book.rating;

    tr.append(title, year, rating);

    books.append(tr);
});

const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];

const container = document.querySelector("#container");

function createElement(obj) {

    const element = document.createElement(obj.tag);

    element.textContent = obj.text;

    return element;
}

elementsArray.forEach(obj => {

    const element = createElement(obj);

    container.append(element);

});

const elementsArray2 = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];

const container1 = document.querySelector("#container1");

elementsArray2.forEach(obj => {

    const element = document.createElement("p");

    element.textContent = obj.text;

    if (obj.usePrepend) {

        container1.prepend(element);

    } else {

        container1.after(element);

    }

});