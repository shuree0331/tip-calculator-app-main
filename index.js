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


function checkBill () {
    // let valid = true
    if (typeof +bill.value !== 'number' || isNaN(+bill.value) || +bill.value <= 0) {
        // valid = false;
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
        // valid = false;
        peopleSection.classList.add("error");
        errorPeople.innerHTML = "Can't be zero";
    } else {
        
        peopleSection.classList.remove("error");
        errorPeople.innerHTML = "";
    }
    update()
}

bill.addEventListener('change', (element) => { 
    billInput = element.target.value
    // resetButton.onclick = () => {
    //     element.target.value = 0;}
    update()
})

people.addEventListener('change', (element) => {
    let valid = true
    if (typeof element !== 'number' || element <= 0) {
        valid = false;
        people.classList.add("error");
        // error.innerHTML = "Can't be zero";
    }
    
    peopleInput = element.target.value
    // resetButton.onclick = () => {
    //     element.target.value = 0;}
    
    update()
})

percent.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(e)
        percent.forEach(element => {
            element.classList.remove('percent-active')
        } )
        
        element.classList.add('percent-active')
        tipPercent = +e.target.innerHTML.replace("%", "") / 100
        
        // resetButton.onclick = () => {
        //     tipPercent = undefined;}
        update()
        
    })
    
});


function update () {
    let tipPerPerson 
    let totalPerPerson;
    resetButton.disabled = false;
    if (billInput !== undefined && tipPercent !== undefined && peopleInput !== undefined) {
        
        tipPerPerson = billInput * tipPercent / peopleInput
        totalPerPerson = billInput / peopleInput + tipPerPerson

        document.getElementById("amount").innerHTML = '$' + tipPerPerson.toFixed(2);
        document.getElementById("total-amount").innerHTML = '$' + totalPerPerson.toFixed(2);    
    } else if (billInput === 0 || tipPercent === 0 || peopleInput === 0) {
        document.getElementById("amount").innerHTML
        document.getElementById("total-amount").innerHTML
    } else {
        document.getElementById("amount").innerHTML
        document.getElementById("total-amount").innerHTML
    }
    
    
    
    resetButton.onclick = () => {   

        document.getElementById("bill-amount").value = 0;
        billInput = undefined;
        document.getElementById("people-number").value = 0;
        peopleInput = undefined;
        document.querySelectorAll(".percent").value = 0;
        tipPercent = undefined;
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
    // console.log('bill', billInput, 'people', peopleInput, 'tip', tipPercent)
    
}



