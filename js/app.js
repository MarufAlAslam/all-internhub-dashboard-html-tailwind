// $(".demo").videoBox({
//   width: "100%",
//   height: "360",
//   loop: false,
//   autoplay: true,
//   muted: true,
//   byline: true,
//   color: "00adef",
//   maxheight: "",
//   maxwidth: "",
//   portrait: true,
//   title: "",
// });

$(".youtube-link").click(function () {
  const btnContentText = $(this).text();
  localStorage.setItem("videoLink", btnContentText);

  //   reload the page
  location.reload();
});

const videoLink = localStorage.getItem("videoLink");
//   add new demo attribute
$(".demo").attr("data-youtube", videoLink);

$(".demo").videoBox({
  width: "100%",
  height: "360",
  loop: false,
  autoplay: true,
  muted: true,
  byline: true,
  color: "00adef",
  maxheight: "",
  maxwidth: "",
  portrait: true,
  title: "",
});

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
