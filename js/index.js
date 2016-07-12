$(document).ready(function(){
  
  $('#slides').slick({
    autoplay: true,
    // adaptiveHeight: true,
    infinite: true,
    arrows: false,
    speed: 1000,
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

  $(".project1").hover(projectHover1, projectNormal1);
  $(".project2").hover(projectHover2, projectNormal2);
  $(".project3").hover(projectHover3, projectNormal3);
  $(".project4").hover(projectHover4, projectNormal4);
  $(".project5").hover(projectHover5, projectNormal5);
  $(".project6").hover(projectHover6, projectNormal6);


  function projectHover1() {
    $(".project1").fadeTo("fast", "1");
  }

  function projectNormal1(){
    $(".project1").fadeTo("fast", ".7");
  }

  function projectHover2() {
    $(".project2").fadeTo("fast", "1");
  }

  function projectNormal2(){
    $(".project2").fadeTo("fast", ".7");
  }

  function projectHover3() {
    $(".project3").fadeTo("fast", "1");
  }

  function projectNormal3(){
    $(".project3").fadeTo("fast", ".7");
  }

  function projectHover4() {
    $(".project4").fadeTo("fast", "1");
  }

  function projectNormal4(){
    $(".project4").fadeTo("fast", ".7");
  }

  function projectHover5(){
    $(".project5").fadeTo("fast", "1");
  }

  function projectNormal5(){
    $(".project5").fadeTo("fast", ".7");
  }

  function projectHover6(){
    $(".project6").fadeTo("fast", "1");
  }

  function projectNormal6(){
    $(".project6").fadeTo("fast", ".7");
  }



});