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
modalClose.addEventListener("click", closeModal); //pour fermer la modal au click

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  initializeFields();
}

//launch close modal
function closeModal() {
  initializeFields();
  modalBg.style.display = "none"; // fermeture du modal formulaire
}

// fonction de vérification du champs prénom

function checkOutFirstName() {
  if (!firstName.value) {
    //si champs vide erreur
    //si le champs est vide
    firstNameError.innerHTML = "Veuillez renseigner votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else if (firstName.value.length < 2) {
    // si il y a moins de 2 charactères donc erreur
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else {
    //si tous est bon pas de message d'erreur
    firstNameError.style.display = "none";
    return true;
  }
}

// fonction de vérification du champs nom

function checkOutLastName() {
  if (!lastName.value) {
    //si champs vide erreur
    lastNameError.innerHTML = "Veuillez renseigner votre nom";
    lastNameError.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    //si il y a moins de 2 charactères donc erreur
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre nom";
    lastNameError.style.display = "block";
    return false;
  } else {
    //si tous est bon pas de message d'erreur
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
    // si le champs est vide message d'erreur
    emailError.innerHTML = "Veuillez renseigner votre adresse email";
    emailError.style.display = "block";
    return false;
  } else if (regexEmail.exec(email.value) == null) {
    //si se n'est pas conforme au regex email donc pas valide
    emailError.innerHTML =
      "Entrez une adresse valide. Exemple : contact@nom.com";
    emailError.style.display = "block";
    return false;
  } else {
    //si tout est respecté pas de message d'erreur
    emailError.style.display = "none";
    return true;
  }
}

//fonction de vérification du champs birthday
function checkOutBirth() {
  //récupération de la date
  let dateBirth = birthdate.value;

  if (!dateBirth) {
    //si la date de naissance n'est pas renseigné champs vide
    ageError.innerHTML = "Veuillez renseigner votre date de naissance";
    ageError.style.display = "block";
    return false;
  } else {
    let birthYear = dateBirth.split("-")[0];//récupère l'année de naissance
    let currentYear = new Date().getFullYear(); // variable qui récupère la date actuelle
    let age = currentYear - birthYear;//date actuelle- date de naissance = age 
    if (age <= 17) {
      //si l'age est inferieur ou égale à 17 ans donc erreur car il faut avoir 18 ans
      ageError.innerHTML = "votre date de naissance n'est pas valide!";
      ageError.style.display = "block";
      return false;
    } else {
      //si tout est bon on enlève le message d'erreur
      ageError.style.display = "none";
      return true;
    }
  }
}

// fonction de vérification du champs quantity
function checkOutQuant() {
  if (!participation.value) {
    // si le champs est vide message d'erreur
    participationError.innerHTML =
      "Merci de saisir un nombre de participations";
    participationError.style.display = "block";
    return false;
  } else if (participation.value > 99) {
    // si le nombre est suppérieur à 99 donc erreur
    participationError.innerHTML =
      "Vous avez atteint un nombre maximal d'entrées.";
    participationError.style.display = "block";
    return false;
  } else {
    //si tout est bon on enlève le message d'erreur
    participationError.style.display = "none";
    return true;
  }
}

//tableau des boutons radios
let locationArray = [
  //création d'un variable qui récupère tout les boutons radios du DOM
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
    //si un bouton est coché plus d'erreur
    cityError.style.display = "none";
    return true;
  }
}

//fonction de vérification de la CGU (Conditions générales d'utilisation) cochée ou décochée
function checkedCgu() {
  if (!cgU.checked) {
    //si le bouton n'est pas coché alors erreur
    errorCgu.innerHTML =
      "Veuillez accepter les conditions générales d'utilisation";
    errorCgu.style.display = "block";
    return false;
  } else {
    //s'il est coché plus d'erreur
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
    //si tous les champs sont validés on peut envoyer le formulaire sinon message d'erreur est la modal formulaire reste en display block
    modalBg.style.display = "none";
    bground.style.display = "block"; // le fond d'écran s'affiche en background-color: rgba(26, 39, 156, 0.4);
    modalGood(); //on appel la fonction de validation
    initializeFields();
  }
}

//initialisation de tous les champs du formulaire
function initializeFields() {
  firstName.value = null;
  lastName.value = null;
  email.value = null;
  birthdate.value = null;
  participation.value = null;
  city.checked = false;
  cgU.checked = false;
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  ageError.style.display = "none";
  participationError.style.display = "none";
  cityError.style.display = "none";
  errorCgu.style.display = "none";
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
