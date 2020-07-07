var buttonContacts = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal");
var popupClose = document.querySelector(".close-form");

buttonContacts.addEventListener("click", function () {
  popup.classList.add("modal-show");
})

popupClose.addEventListener("click", function () {
  popup.classList.remove("modal-show");
})
