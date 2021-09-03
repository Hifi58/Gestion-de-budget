let total = document.getElementById('total');

///////////////////////////////////////
// Ajout d'un élément dans le revenu //
///////////////////////////////////////


let namein = document.getElementById('namein');
let income = document.getElementById('income');
let addincome = document.getElementById('addincome');

addincome.addEventListener('click', function(e){
    e.preventDefault();
    let div = document.getElementById('incomediv');

    let newdiv = document.createElement('div')
    newdiv.id ="budget";
    div.appendChild(newdiv);

    let newname = document.createElement('h4');
    newname.id ='new1';
    newname.textContent = namein.value;
    newdiv.appendChild(newname);

    let newincome = document.createElement('p');
    newincome.id = 'new2';
    newincome.textContent = income.value;
    newdiv.appendChild(newincome);

    ///// Total des revenus /////
    let totalincome = document.getElementById('rtotal');
    totalincome.textContent = Number(totalincome.textContent) + Number(income.value);
    total.textContent = Number(total.textContent) + Number(income.value);
    
    if(total.textContent >= 0){
    total.style.color="green";
    }else{
        total.style.color="green";
    }
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

    let newdiv1 = document.createElement('div')
    newdiv1.id ="budget";
    div.appendChild(newdiv1);

    let newnameout = document.createElement('h4');
    newnameout.id ='new1';
    newnameout.textContent = nameout.value;
    newdiv1.appendChild(newnameout);

    let newoutcome = document.createElement('p');
    newoutcome.id = 'new2';
    newoutcome.textContent = outcome.value;
    newdiv1.appendChild(newoutcome);
    
    ///// Total des dépenses /////

    let totaloutcome = document.getElementById('dtotal');
    totaloutcome.textContent -= Number(outcome.value);
    total.textContent -= Number(outcome.value);
    
    
    if(total.textContent <= 0){
    total.style.color="red";
    }else{
    total.style.color="black";
    }

});