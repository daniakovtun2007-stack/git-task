const header = document.getElementById("header");
        console.log(header);

        const blocks = document.getElementsByClassName("block");
        console.log(blocks);

        const sections = document.getElementsByTagName("section");
        console.log(sections);

        const first = document.querySelector("#list li:first-child");

    const last = document.querySelector("#list li:last-child");

    const third = document.querySelector("#list li:nth-child(3)");

    console.log(first);
    console.log(last);
    console.log(third);


    const elements = document.querySelectorAll("#list li");

    console.log(elements);


    const array = Array.from(elements);

    console.log(array);

    let listItems = document.querySelectorAll('ul.nav > li');
    let listItem = document.querySelectorAll('li:nth-child(2)');

    console.log(listItems);
    console.log(listItem);