// dropdown
$("nav li ul").hide().removeClass("dropdown");

$("nav li").hover(
  function () {
    $("ul", this).stop().slideDown(1000);
  },
  function () {
    $("ul", this).stop().slideUp(1000);
  }
);