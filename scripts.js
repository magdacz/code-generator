
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

const characters = 'ABCDEFGHIJKLMNOPRSTUWYZ0123456789';

const number = 100;
const charactersNumber = 10;
let counter = "";

const codeGenerator = () => {
    for(let i = 0; i < number; i++) {
        counter++;
        let code = "";
        
        for(let j = 0; j < charactersNumber; j++) {
            const random = Math.floor(Math.random() * characters.length)
            code += characters[random]
        }
        
        const li = document.createElement('li');
        li.textContent = code
        ul.appendChild(li)
        const span = document.createElement('span');
        span.textContent = counter;
        li.prepend(span)
    }
}

btn.addEventListener('click', codeGenerator)