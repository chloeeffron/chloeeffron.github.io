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
    $(".project1").fadeTo("fast", ".78");
  }

  function projectHover2() {
    $(".project2").fadeTo("fast", "1");
  }

  function projectNormal2(){
    $(".project2").fadeTo("fast", ".78");
  }

  function projectHover3() {
    $(".project3").fadeTo("fast", "1");
  }

  function projectNormal3(){
    $(".project3").fadeTo("fast", ".78");
  }

  function projectHover4() {
    $(".project4").fadeTo("fast", "1");
  }

  function projectNormal4(){
    $(".project4").fadeTo("fast", ".78");
  }

  function projectHover5(){
    $(".project5").fadeTo("fast", "1");
  }

  function projectNormal5(){
    $(".project5").fadeTo("fast", ".78");
  }

  function projectHover6(){
    $(".project6").fadeTo("fast", "1");
  }

  function projectNormal6(){
    $(".project6").fadeTo("fast", ".78");
  }

  $(".project1").click(showProject1);
  $(".project2").click(showProject2);
  $(".project3").click(showProject3);
  $(".project4").click(showProject4);
  $(".project5").click(showProject5);
  $(".project6").click(showProject6);


  function showProject1(){
    $("#project1_expanded").css("display", "block");

    $("#project2_expanded").css("display", "none");
    $("#project3_expanded").css("display", "none");
    $("#project4_expanded").css("display", "none");
    $("#project5_expanded").css("display", "none");
    $("#project6_expanded").css("display", "none");
    $("#instructions").css("display", "none");

    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  function showProject2(){
    $("#project2_expanded").css("display", "block");
    
    $("#project1_expanded").css("display", "none");
    $("#project3_expanded").css("display", "none");
    $("#project4_expanded").css("display", "none");
    $("#project5_expanded").css("display", "none");
    $("#project6_expanded").css("display", "none");
    $("#instructions").css("display", "none");

    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  function showProject3(){
    $("#project3_expanded").css("display", "block");
    
    $("#project1_expanded").css("display", "none");
    $("#project2_expanded").css("display", "none");
    $("#project4_expanded").css("display", "none");
    $("#project5_expanded").css("display", "none");
    $("#project6_expanded").css("display", "none");
    $("#instructions").css("display", "none");

    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  function showProject4(){
    $("#project4_expanded").css("display", "block");

    $("#project1_expanded").css("display", "none");
    $("#project2_expanded").css("display", "none");
    $("#project3_expanded").css("display", "none");
    $("#project5_expanded").css("display", "none");
    $("#project6_expanded").css("display", "none");
    $("#instructions").css("display", "none");

    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  function showProject5(){
    $("#project5_expanded").css("display", "block");

    $("#project1_expanded").css("display", "none");
    $("#project2_expanded").css("display", "none");
    $("#project3_expanded").css("display", "none");
    $("#project4_expanded").css("display", "none");
    $("#project6_expanded").css("display", "none");
    $("#instructions").css("display", "none");

     $('html, body').animate({ scrollTop: 0 }, 'fast');

  }

  function showProject6(){
    $("#project6_expanded").css("display", "block");

    $("#project1_expanded").css("display", "none");
    $("#project2_expanded").css("display", "none");
    $("#project3_expanded").css("display", "none");
    $("#project4_expanded").css("display", "none");
    $("#project5_expanded").css("display", "none");
    $("#instructions").css("display", "none");
  
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  }


});