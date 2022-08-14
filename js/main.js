/* ON WINDOW stroll FUNTION */
$(window).scroll(function(){
  var top = $(window).scrollTop();
  if(top>=30){
      document.getElementById("headernav").style.backgroundColor = "#a8a8a7";
    }else {
      document.getElementById("headernav").style.backgroundColor = "rgba(1,1,1,0.25)";
    }
});
