
const btn1 = document.querySelector('.btn1');
const li1 = document.querySelectorAll('.ul1 li');

let size1 = 10;

btn1.addEventListener('click', function() {
  size1++;
  for(let i = 0; i < li1.length; i++) {
    li1[i].style.display="block";
    li1[i].style.fontSize = size1 + "px";
  }
  
})

const btn2 = document.querySelector('.btn2');
const li2 = document.querySelectorAll('.ul2 li');


let size2 = 10;

btn2.addEventListener('click', function() {
  li2.forEach(function(item) {
    item.style.display = "block";
    item.style.fontSize = size2 + "px";
  })
  size2 += 5;
})

const div = document.querySelector('.box3');
 
let sizeF = 10;
let orderElement = 1;

const init = () => {
 const btn3 = document.createElement('button');
 const ul3 = document.createElement('ul');
 document.body.appendChild(btn3);
 btn3.textContent = "Stwórz 10 elementów listy";
 document.body.appendChild(ul3);
  
  btn3.addEventListener('click', createElements)
}

const createElements = () => {
  
  for(let i = 0; i < 10; i++) {
    
    const li3 = document.createElement('li');
    document.body.appendChild(li3);
    li3.textContent = orderElement;
    li3.style.fontSize = sizeF + "px";
    orderElement++;
    sizeF++;
  }
  ul3.appendChild(li)
  ul3.style.paddingLeft = 0;
}

init()