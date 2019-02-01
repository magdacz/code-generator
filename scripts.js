
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

const characters = 'ABCDEFGHIJKLMNOPRSTUWYZ0123456789';

const number = 10;
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
        li.innerHTML = `<span>${counter}</span> ${code}`
        ul.appendChild(li);
    }
}

btn.addEventListener('click', codeGenerator)