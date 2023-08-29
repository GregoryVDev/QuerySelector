// SELECTEURS
// document.querySelector('h4').style.background="yellow";

// const baliseHTML = document.querySelector('h4');

// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const reponse = document.querySelector('p');

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "green";
});

btn2.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "red";
});


// <div> > #id > .class > baliseHTML

// ------------------------------------------------------------


