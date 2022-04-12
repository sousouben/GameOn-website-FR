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
const modalForm = document.getElementById("modal-form");
const modalClose = document.getElementById("close"); // pour de fermer la modal

//Variables du formulaire
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let age = document.getElementById("birthdate");
let participation = document.getElementById("quantity");
let city = document.querySelector('input[name="location"]');

//Variables messages d'erreurs du formulaire
let firstNameError = document.getElementById("firstname-error");
let lastNameError = document.getElementById("lastname-error");
let emailError = document.getElementById("email-error");
let ageError = document.getElementById("birth-error");
let participationError = document.getElementById("quantity-error");
let cityError = document.getElementById("city-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//launch closing-modal event
modalClose.addEventListener("click", (e) => {
  modalbg.style.display = "none";
}); // lorsqu'on click sur la croix la modal se ferme

// fonction de vérification du champs prénom
function checkOutFirstName() {
  if (!firstName.value) {
    firstNameError.innerHTML = "Veuillez renseigner votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else if (firstName.value.length < 2) {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else {
    firstNameError.style.display = "none";
    return true;
  }
}

// fonction de vérification du champs nom
function checkOutLastName() {
  if (!lastName.value) {
    lastNameError.innerHTML = "Veuillez renseigner votre nom";
    lastName.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    lastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour votre nom";
    lastName.style.display = "block";
    return false;
  } else {
    lastName.style.display = "none";
    return true;
  }
}

//regex email
let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// fonction de vérification du champs email
function checkOutEmail() {
  if (!email.value) {
    emailError.innerHTML = "Veuillez renseigner votre adresse email";
    emailError.style.display = "block";
    return false;
  } else if (regexEmail.exec(email.value) == null) {
    emailError.innerHTML = "Votre adresse email n'est pas valide";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

//fonction de vérification du champs birthday
function checkOutBirth() {}

// fonction de vérification du champs quantity
function checkOutQuant() {
  if (!participation.value) {
    participationError.innerHTML =
      "Merci de saisir un nombre de participations";
    participationError.style.display = "block";
    return false;
  } else if (participation.value > 99) {
    participationError.innerHTML =
      "Vous avez atteint un nombre maximal d'entrées.";
    participationError.style.display = "block";
    return false;
  } else {
    participationError.style.display = "none";
    return true;
  }
}

//appel des fonction pour valider le formulaire
function validForm() {
  alert("formulaire envoyer");
}
