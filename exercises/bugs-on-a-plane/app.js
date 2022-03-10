const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");
const button = document.querySelector("button");

button.style.backgroundColor = "dodgerblue";
button.style.borderRadius = "5px";

function formAlert() {
    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    
    const diet = [];
    
    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements["gluten"].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.elements["paleo"].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + 
          "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + 
          "\nAwesome, now if you die, it won't be an accident.." );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.submitter.name === "submit") {
        formAlert();
    }
});