const paymentForm = document.getElementById("payment-form");
const paymentModal = document.getElementById("payment-modal");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  paymentModal.classList.add("d-none");
});
