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
