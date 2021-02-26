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

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
function validate() {

	var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if(first.value=="" || first.value.length < 2){
		formData[0].setAttribute("data-error-visible","true");
		formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
		return false; 
	} else {
		formData[0].removeAttribute("data-error-visible");
		formData[0].removeAttribute("data-error");
	}

	if(last.value=="" || last.value.length < 2){
		formData[1].setAttribute("data-error-visible","true");
		formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
		return false;
	} else {
		formData[1].removeAttribute("data-error-visible");
		formData[1].removeAttribute("data-error");
	}

	if(email.value=="" || !emailReg.test(email.value)){
		formData[2].setAttribute("data-error-visible","true");
		formData[2].setAttribute("data-error", "Veuillez saisir une adresse mail valide.");
		return false;
	} else {
		formData[2].removeAttribute("data-error-visible");
		formData[2].removeAttribute("data-error");
	}

	if(quantity.value=="" || !typeof quantity == 'number'){
		formData[4].setAttribute("data-error-visible","true");
		formData[4].setAttribute("data-error", "Vous devez indiquer le nombre de tournois auxquels vous avez participé.");
		return false;
	} else {
		formData[4].removeAttribute("data-error-visible");
		formData[4].removeAttribute("data-error");
	}

	if(!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)){
		formData[5].setAttribute("data-error-visible","true");
		formData[5].setAttribute("data-error", "Vous devez sélectionner une ville.");
		return false;
	} else {
		formData[5].removeAttribute("data-error-visible");
		formData[5].removeAttribute("data-error");
	}

	if(!checkbox1.checked){
		formData[6].setAttribute("data-error-visible","true");
		formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
		return false;
	} else {
		formData[6].removeAttribute("data-error-visible");
		formData[6].removeAttribute("data-error");
	}
}

