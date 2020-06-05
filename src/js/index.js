// This code will do this thing (...) and that thing (...)

import '../scss/main.scss';

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

const button = document.querySelector('.action--js');
console.log(button);

import moment from 'moment';


console.log(moment().startOf('day').fromNow());

const title = document.querySelector('.moment--js');
title.innerHTML = (moment().format('MMMM Do YYYY, h:mm:ss a'));

const firstName = 'Anna';
const age = 27;

console.log(firstName);
console.log(age);
console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);


const heading = document.querySelector('.main__header--js');

heading.innerHTML = 'Tu miał być inny tekst ale go zmieniłam za pomocą js'

console.log(heading);
console.log(heading.innerHTML);




function greet(age, firstName) {
    console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);
    
}

greet(27, 'Anna')



function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);

    element.innerHTML = content;
} 

createContent(`.heading__paragraph--js`, 'Witaj świecie');







button.addEventListener('click', () => {
    const heading = document.querySelector('.main__header--js');
    heading.innerHTML = `witaj, nazywam się Anna`;

    heading.classList.add('klasa-z-js');

 
});
