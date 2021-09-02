let total = document.getElementById('total');


let namein = document.getElementById('namein');
let income = document.getElementById('income');
let addincome = document.getElementById('addincome');


///////////////////////////////////////
// Ajout d'un élément dans le revenu //
///////////////////////////////////////


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

    ///// Total des revenus /////

    let totalincome = document.getElementById('rtotal');
    totalincome.textContent = Number(totalincome.textContent) + Number(income);
});


//////////////////////////////////////////
// Ajout d'un élément dans les dépenses //
//////////////////////////////////////////


let nameout = document.getElementById('nameout');
let outcome = document.getElementById('outcome');
let addoutcome = document.getElementById('addoutcome');

addoutcome.addEventListener('click', function(e){
    e.preventDefault();
    let div = document.getElementById('outcomediv');

    let newnameout = document.createElement('h4');
    newnameout.id ='new1';
    newnameout.textContent = nameout.value;
    div.appendChild(newnameout);

    let newoutcome = document.createElement('p');
    newoutcome.id = 'new2';
    newoutcome.textContent = outcome.value;
    div.appendChild(newoutcome);
    
    ///// Total des dépenses /////

    let totaloutcome = document.getElementById('dtotal');
    totaloutcome.textContent -= Number(outcome);
});







///// Budget total /////

total.textContent = Number(total.textContent) + Number(income);
total.textContent -= Number(outcome);