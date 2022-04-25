function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalForm = document.querySelector("#modal-form"); //formulaire du modal
const modalClose = document.querySelector("#close"); // pour de fermer la modal
const modalGoodMessage = document.querySelector("#modal-message");
const modalCloseGoodMessage = document.querySelector(
  "#modal-message_close-message"
);
const modalCloseGoodBtn = document.querySelector("#close-message-bg");
const bground = document.querySelector(".bground2");

//Variables du formulaire
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const participation = document.querySelector("#quantity");
const city = document.querySelector('input[name="location"]');
const cgU = document.querySelector("#checkbox1");

//Variables messages d'erreurs du formulaire
const firstNameError = document.querySelector("#firstname-error");
const lastNameError = document.querySelector("#lastname-error");
const emailError = document.querySelector("#email-error");
const ageError = document.querySelector("#birth-error");
const participationError = document.querySelector("#quantity-error");
const cityError = document.querySelector("#city-error");
const errorCgu = document.querySelector("#error-cgu");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // tous les boutons "je m'inscris" au click le modal formulaire s'ouvre
modalClose.addEventListener("click", closeModal); //pour fermer le modal au click

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

//launch close modal
function closeModal() {
  modalBg.style.display = "none"; // fermeture du modal
}

// fonction de vérification du champs prénom

function checkOutFirstName() {
  if (!firstName.value) {
    //si le champs est vide
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
    emailError.innerHTML =
      "Entrez une adresse valide. Exemple : contact@nom.com";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

//fonction de vérification du champs birthday
function checkOutBirth() {
  //récupération de la date
  let dateBirth = birthdate.value;
  console.log(dateBirth.split("-")[0]);

  if (!dateBirth) {
    ageError.innerHTML = "Veuillez renseigner votre date de naissance";
    ageError.style.display = "block";
    return false;
  } else {
    let birthYear = dateBirth.split("-")[0];
    let currentYear = new Date().getFullYear(); // variable qui récupère la date actuelle
    let age = currentYear - birthYear;
    if (age <= 18) {
      ageError.innerHTML = "votre date de naissance n'est pas valide!";
      ageError.style.display = "block";
      return false;
    } else {
      ageError.style.display = "none";
      return true;
    }
  }
}

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

//tableau des boutons radios
let locationArray = [
  document.querySelector("#location1"),
  document.querySelector("#location2"),
  document.querySelector("#location3"),
  document.querySelector("#location4"),
  document.querySelector("#location5"),
  document.querySelector("#location6"),
];

//fonction de vérification des villes
function checkOutCity() {
  if (
    !locationArray[0].checked &&
    !locationArray[1].checked &&
    !locationArray[2].checked &&
    !locationArray[3].checked &&
    !locationArray[4].checked &&
    !locationArray[5].checked
  ) {
    // si l'un des boutons n'est pas cochés donc message d'erreur
    cityError.innerHTML =
      "veuillez renseinger une ville pour pouvoir participer";
    cityError.style.display = "block";
    return false;
  } else {
    cityError.style.display = "none";
    return true;
  }
}

//fonction de vérification de la CGU (Conditions générales d'utilisation) cochée ou décochée
function checkedCgu() {
  if (!cgU.checked) {
    errorCgu.innerHTML =
      "Veuillez accepter les conditions générales d'utilisation";
    errorCgu.style.display = "block";
    return false;
  } else {
    errorCgu.style.display = "none";
    return true;
  }
}

//fonction qui ouvre la modal de remerciement
function modalGood() {
  modalGoodMessage.style.display = "block";
}

//appel des fonction pour valider le formulaire
function validForm(e) {
  e.preventDefault(); //méthode pour empêcher le rafraichissement de la page formulaire car pas de php
  //j'ai crée des variable de validation pour appeler chaque fonction de champs vérifiés
  let validCheckOutFirstName = checkOutFirstName();
  let validCheckOutLastName = checkOutLastName();
  let validCheckOutEmail = checkOutEmail();
  let validCheckOuBirth = checkOutBirth();
  let validCheckOutQuant = checkOutQuant();
  let validCheckOuCity = checkOutCity();
  let validCheckOuCgu = checkedCgu();

  if (
    validCheckOutFirstName &&
    validCheckOutLastName &&
    validCheckOutEmail &&
    validCheckOuBirth &&
    validCheckOutQuant &&
    validCheckOuCity &&
    validCheckOuCgu
  ) {
    //si tous les champs sont validés on passe de display block à none
    modalBg.style.display = "none";
    bground.style.display = "block"; // le fond d'écran s'affiche en background-color: rgba(26, 39, 156, 0.4);
    modalGood(); //on appel la fonction de validation
    return true; // validation du formulaire
  }
}

// fermeture de la modal de remerciement
modalCloseGoodMessage.addEventListener("click", (e) => {
  //au click sur la croix la modal se ferme
  modalGoodMessage.style.display = "none";
  bground.style.display = "none"; //le fond d'écran s'enlève
});

modalCloseGoodBtn.addEventListener("click", (e) => {
  //au click sur le bouton fermer il se ferme
  modalGoodMessage.style.display = "none";
  bground.style.display = "none"; //le fond d'écran s'enlève
});
