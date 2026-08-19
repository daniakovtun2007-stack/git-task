const header = document.createElement("header");

header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";

document.body.append(header);



const menuData = [
    { name: "Головна", url: "/" },
    { name: "Про нас", url: "/about" },
    { name: "Послуги", url: "/services" }
];

menuData.forEach(item => {

    const link = document.createElement("a");

    link.textContent = item.name;
    link.href = item.url;

    link.target = "_blank";

    header.append(link);

});


const container = document.createElement("div");

container.style.display = "flex";
container.style.flexWrap = "wrap";


for (let i = 0; i < 50; i++) {

    const block = document.createElement("div");

    block.style.width = "50px";
    block.style.height = "50px";
    block.style.borderRadius = "50%";

    const color = "#" + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0");

    block.style.backgroundColor = color;

    block.classList.add("circle-elemt");

    container.append(block);
}


document.body.append(container);