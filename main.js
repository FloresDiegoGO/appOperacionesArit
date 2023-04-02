const miDiv1 = document.getElementById('miDiv1');
const miDiv2 = document.getElementById('miDiv2');
const miDiv3 = document.getElementById('miDiv3');
const miDiv4 = document.getElementById('miDiv4');

// Aparece el div dos 

const miDivA = document.getElementById('a');
const miDivB = document.getElementById('b');
const miDivC = document.getElementById('c');
const miDivD = document.getElementById('d');


miDiv1.addEventListener('mouseover', pausar);
miDiv2.addEventListener('mouseover', pausar);
miDiv3.addEventListener('mouseover', pausar);
miDiv4.addEventListener('mouseover', pausar);
function pausar (){
    miDiv1.style.animationPlayState = 'paused';
    miDivA.classList.remove("aparece1");

    miDiv2.style.animationPlayState = 'paused';
    miDivB.classList.remove("aparece2");

    miDiv3.style.animationPlayState = 'paused';
    miDivC.classList.remove('aparcere3');

    miDiv4.style.animationPlayState = 'paused';
    miDivD.classList.remove('aparcere4');
}

miDiv1.addEventListener('mouseout', correr);
miDiv2.addEventListener('mouseout', correr);
miDiv3.addEventListener('mouseout', correr);
miDiv4.addEventListener('mouseout', correr);
function correr (){
    miDiv1.style.animationPlayState = 'running';
    miDivA.classList.add("aparece1");

    miDiv2.style.animationPlayState = 'running';
    miDivB.classList.add("aparece2");

    miDiv3.style.animationPlayState = 'running';
    miDivC.classList.add("aparcere3");

    miDiv4.style.animationPlayState = 'running';
    miDivD.classList.add('aparcere4');
}
