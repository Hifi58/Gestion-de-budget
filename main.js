let income = document.getElementById('income').value;
let outcome = document.getElementById('outcome').value;
let total = document.getElementById('total');
let addincome = document.getElementById('addincome');
let addoutcome = document.getElementById('addoutcome');

const newincome = document.createElement("p");
const newincomecontent = document.createTextNode(income);
newincome.appendChild(newincomecontent);

// Ajout d'un élément dans le revenu

addincome.addEventListener('click', function(){
    const incomediv = document.getElementById('incomediv');
    incomediv.appendChild(newincome);
    console.log(income);
});

// Ajout d'un élément dans les dépenses

const newoutcome = document.createElement("p");
const newoutcomecontent = document.createTextNode(Number(outcome));
newoutcome.appendChild(newoutcomecontent);

addoutcome.addEventListener('click', function(){
    const outcomediv = document.getElementById('outcomediv');
    outcomediv.appendChild(newoutcome);
    console.log(outcome);
});