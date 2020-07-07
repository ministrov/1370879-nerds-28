var buttonContacts = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal");
var popupClose = document.querySelector(".close-form");
var loginField = document.querySelector(".login-input")
buttonContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  loginField.focus();
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
