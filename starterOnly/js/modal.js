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
const modalForm = document.querySelector("#modal-form"); //formulaire du modal
const modalClose = document.querySelector("#close"); // pour de fermer la modal

//Variables du formulaire
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let age = document.querySelector("#birthdate");
let participation = document.querySelector("#quantity");
let city = document.querySelector('input[name="location"]');

//Variables messages d'erreurs du formulaire
let firstNameError = document.querySelector("#firstname-error");
let lastNameError = document.querySelector("#lastname-error");
let emailError = document.querySelector("#email-error");
let ageError = document.querySelector("#birth-error");
let participationError = document.querySelector("#quantity-error");
let cityError = document.querySelector("#city-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal); //pour fermer le modal au click

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//launch close modal
function closeModal() {
  modalbg.style.display = "none"; // fermeture du modal
}

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
    lastNameError.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre nom";
    lastNameError.style.display = "block";
    return false;
  } else {
    lastNameError.style.display = "none";
    return true;
  }
}

//regex email pour accepter les charactères spéciaux chiffres et lettre avant et après le @
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

//fonction de vérification des villes
function checkOutCity() {}

//appel des fonction pour valider le formulaire
function validForm() {
  let validCheckOutFirstName = checkOutFirstName();
  let validCheckOutLastName = checkOutLastName();
  let validCheckOutEmail = checkOutEmail();
  //let validCheckOuBirth = checkOutBirth();
  let validCheckOutQuant = checkOutQuant();
  //let validCheckOuCity = checkOutCity();

  if (
    validCheckOutFirstName &&
    validCheckOutLastName &&
    validCheckOutEmail &&
    validCheckOutQuant
  ) {
    alert("formulaire envoyé!");
    return true;
  }
}
