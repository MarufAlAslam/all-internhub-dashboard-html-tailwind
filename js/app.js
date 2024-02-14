const paymentForm = document.getElementById("payment-form");
const paymentModal = document.getElementById("payment-modal");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "./data-analysis";
});

const enrollBtns = document.querySelectorAll(".enroll-btn");

enrollBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    paymentModal.classList.add("active");
  });
});
