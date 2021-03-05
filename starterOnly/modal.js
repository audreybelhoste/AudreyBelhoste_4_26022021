function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const confirmationCloseBtn = document.querySelectorAll(".btn-close");

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");
const confirmation = document.querySelector(".confirmation");

// use for the form validation, change to false if one condition doesn't match 
var isValid;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal event
confirmationCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// add error message with index of the div
function addError(index, message){
	formData[index].setAttribute("data-error-visible","true");
	formData[index].setAttribute("data-error", message);
	isValid = false;
}

// remove error message
function removeError(index){
	formData[index].removeAttribute("data-error-visible");
	formData[index].removeAttribute("data-error");
}

// listen the submit event of the form, block the submit to check for errors and display confirmation if form is valid
form.addEventListener("submit", function(event){
	event.preventDefault();

	if(validate()){
		displayConfirmation();
	}
})

// validate form, add error message
function validate() {

	var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	isValid = true;

	// check is firstname is not empty and at least 2 characters 
	if(first.value=="" || first.value.length < 2){
		addError(0, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
	} else {
		removeError(0);
	}

	// check lastname is not empty and at least 2 characters 
	if(last.value=="" || last.value.length < 2){
		addError(1, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
	} else {
		removeError(1);
	}

	// check email format
	if(email.value=="" || !emailReg.test(email.value)){
		addError(2, "Veuillez saisir une adresse mail valide.");
	} else {
		removeError(2);
	}

	// check birthdate is not empty
	if(birthdate.value==""){
		addError(3, "Vous devez entrer votre date de naissance.");
	} else {
		removeError(3);
	}

	// check quantity is not empty and is a number
	if(quantity.value=="" || isNaN(quantity.value)){
		addError(4, "Vous devez indiquer le nombre de tournois auxquels vous avez participé.");
	} else {
		removeError(4);
	}

	// check one location is selected
	if(!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)){
		addError(5, "Vous devez choisir une option.");
	} else {
		removeError(5);
	}

	// check CGU accepted
	if(!checkbox1.checked){
		addError(6, "Vous devez vérifier que vous acceptez les termes et conditions.")
	} else {
		removeError(6);
	}

	return isValid;
}

// launch message confirmation
function displayConfirmation() {
	form.style.display = "none";
	confirmation.style.display = "block";
}