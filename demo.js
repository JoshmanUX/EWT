$(document).ready(function () {
  $("p").css({ color: "green", "margin-top": "25px" });
  $(".redFont").css({ color: "red", "margin-top": "25px" });
  $("#myTag").css({ color: "blue", "margin-top": "25px" });
  $("[href]").css("color", "#777");
});

$(function () {
  $("p").css("color", "red");
});

$(function () {
  $("#myTag").css("background-color", "green");
});

$(function () {
  $("#hide").css("padding", "35px 10px");
  $("#show").css("padding", "10px 35px");
  $("#toggle").css("padding", "25px 25px");
});

$("#hide").on("click", function () {
  $("p").hide();
});

$("#show").on("click", function () {
  $("p").show();
});

$("#toggle").on("click", function () {
  $("h1").toggle();
});
