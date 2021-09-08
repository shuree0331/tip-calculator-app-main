// gets user input
const bill = document.getElementById("bill-amount");
const people = document.getElementById("people-number");
const resetButton = document.getElementById("reset");
const errorPeople = document.getElementById("emsg-people");
const errorBill = document.getElementById("emsg-bill");
const peopleSection = document.getElementById("people-section");
const billSection = document.getElementById("bill-section");


// default element on result display
document.getElementById("amount").innerHTML = '$0.00';
document.getElementById("total-amount").innerHTML = '$0.00';

//gets info from html
const percent = document.querySelectorAll(".percent");
const custom = document.getElementById("custom");

let billInput;
let peopleInput;
let tipPercent;
resetButton.disabled = true;

// checks whether input is more than 0
function checkBill () {
    if (typeof +bill.value !== 'number' || isNaN(+bill.value) || +bill.value <= 0) {
        billSection.classList.add("error");
        errorBill.innerHTML = "Can't be zero";
    } else {
        
        billSection.classList.remove("error");
        errorBill.innerHTML = "";
    }
    update()
}

function checkPeople () {
    if (typeof +people.value !== 'number' || isNaN(+people.value) || +people.value <= 0) {
        peopleSection.classList.add("error");
        errorPeople.innerHTML = "Can't be zero";
        false;
    } else { 
        peopleSection.classList.remove("error");
        errorPeople.innerHTML = "";
        true;
    }
    update()
}

bill.addEventListener('change', (element) => { 
    billInput = element.target.value
    
    update()
})

people.addEventListener('change', (element) => {
    peopleInput = element.target.value
    
    update()
})

percent.forEach(element => {
    element.addEventListener('click', function (e) {
        percent.forEach(element => {
            element.classList.remove('percent-active')
        } )
        
        element.classList.add('percent-active')
        tipPercent = +e.target.innerHTML.replace("%", "") / 100
        document.getElementById("custom").value = '';
    })
    update()
})

custom.addEventListener('change', (cus) => {
    percent.forEach(element => {
        element.classList.remove('percent-active')
    } )
    tipPercent = +cus.target.value.replace("%", "") / 100

    update()
})


function update () {
    let tipPerPerson 
    let totalPerPerson;
    resetButton.disabled = false;
    if (billInput !== undefined && tipPercent !== undefined && peopleInput !== undefined) {
        if (isNaN(peopleInput) || peopleInput === '0') {
            tipPerPerson = '0.00'
            totalPerPerson = '0.00'
        } else {
            tipPerPerson = billInput * tipPercent / peopleInput
            totalPerPerson = billInput / peopleInput + tipPerPerson
        }

        document.getElementById("amount").innerHTML = '$' + tipPerPerson.toFixed(2);
        document.getElementById("total-amount").innerHTML = '$' + totalPerPerson.toFixed(2);
    } else {
        document.getElementById("amount").innerHTML
        document.getElementById("total-amount").innerHTML
    }

    resetButton.onclick = () => {   

        document.getElementById("bill-amount").value = '';
        billInput = undefined;
        document.getElementById("people-number").value = '';
        peopleInput = undefined;
        document.querySelectorAll(".percent").value = '';
        tipPercent = undefined;
        document.getElementById("custom").value = '';

        percent.forEach(element => {
            element.classList.remove('percent-active')

        } )
        document.getElementById("amount").innerHTML = '$0.00';
        document.getElementById("total-amount").innerHTML = '$0.00';

        peopleSection.classList.remove("error");
        errorPeople.innerHTML = "";

        billSection.classList.remove("error");
        errorBill.innerHTML = "";
        
        resetButton.disabled = true;

    }
}
