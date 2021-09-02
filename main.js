let total = document.getElementById('total');
let namein = document.getElementById('namein');
let income = document.getElementById('income');
let addincome = document.getElementById('addincome');



// Ajout d'un élément dans le revenu

addincome.addEventListener('click', function(e){
    e.preventDefault();
    let div = document.getElementById('incomediv');

    let newname = document.createElement('h4');
    newname.id ='new1';
    newname.textContent = namein.value;
    div.appendChild(newname);

    let newincome = document.createElement('p');
    newincome.id = 'new2';
    newincome.textContent = income.value;
    div.appendChild(newincome);
});


// Ajout d'un élément dans les dépenses

let nameout = document.getElementById('namein');
let outcome = document.getElementById('outcome');
let addoutcome = document.getElementById('addoutcome');

addoutcome.addEventListener('click', function(e){
    e.preventDefault();
    let div = document.getElementById('outcomediv');

    let newname = document.createElement('h4');
    newname.id ='new1';
    newname.textContent = nameout.value;
    div.appendChild(newname);

    let newoutcome = document.createElement('p');
    newoutcome.id = 'new2';
    newoutcome.textContent = outcome.value;
    div.appendChild(newoutcome);
});