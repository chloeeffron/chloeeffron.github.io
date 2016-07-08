$(document).ready(function(){
  
  $('#slides').slick({
    autoplay: true,
    // adaptiveHeight: true,
    arrows: false,
    speed: 900,
    fade: true,
    cssEase: 'linear'
  });

   
  $("#button").hover(buttonHover, buttonNormal);

  function buttonHover() {
    $("#button").css("backgroundColor", "#AAEB08");
    $("#button").css("color", "black");
 }

  function buttonNormal() {
    $("#button").css("backgroundColor", "black");
    $("#button").css("color", "white");
  }

  
});