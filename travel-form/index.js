const form = document.passengerForm;

function formAlert() {
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const destination = form.destination.value;
    
    const diet = [];
    
    if (form.vegitarian.checked) {
        diet.push(document.getElementById("vegitarian").value);
    }
    if (form["kosher"].checked) {
        diet.push(document.getElementById("kosher").value);
    }
    if (form["lactose-free"].checked) {
        diet.push(document.getElementById('lactose-free').value);
    }

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination: ${destination}\nDiet: ${diet}\n`);

    form.reset()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.submitter.name === "submit") {
        formAlert();
    }
});