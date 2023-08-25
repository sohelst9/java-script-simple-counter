
let count = 0;
let countvalue = document.getElementById('count');
let plusbtn = document.getElementById('increment');
let miniusbtn = document.getElementById('decrement');
countvalue.innerText = count;

plusbtn.addEventListener('click', () => {
    count++;
    countvalue.innerText = count;
});

miniusbtn.addEventListener('click', () => {
 count--;
 countvalue.innerText = count;
});