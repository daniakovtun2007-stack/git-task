// 1. Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

function extractCapitalLetters(text){
    const regEx = /\p{Lu}/gu;
    return text.match(regEx) || [];
}
let arr = extractCapitalLetters(textStr);
console.log(arr);
// 2. Вибір числових значень зі строки
let operation = "5 плюс 7 = 3";
function extractDigits(text){
    const regEx = /\d/g;
    return text.match(regEx) || [];
}

let arr1 = extractDigits(operation);
console.log(arr1);


// 3. Знаходження слів із певною кількістю символів:
let text1 = "lorem ipsum dolor sit amet листя"
function extractWords(text){
     const regEx =  /(?<![а-яА-ЯіІїЇєЄґҐa-zA-Z])[а-яА-ЯіІїЇєЄґҐa-zA-Z]{5}(?![а-яА-ЯіІїЇєЄґҐa-zA-Z])/g;
     return text.match(regEx);
}
let arr2 = extractWords(text1);
console.log(arr2);