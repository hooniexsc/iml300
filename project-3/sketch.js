function draw() {
  let flower1 = select("#item1");
  let flower2 = select("#item2");
  let flower3 = select("#item3");
let flower4 = select('#item4');
  
  let posX = map(mouseX, 0, width, 2, -2);
  let posY = map(mouseY, 0, height, 2, -2);
  flower1.position(posX, posY);

  let posX2 = map(mouseX, 0, width, 4.5, -4.5);
  let posY2 = map(mouseY, 0, height, 4.5, -4.5);
  flower2.position(posX2, posY2);

  let posX3 = map(mouseX, 0, width, 7, -7);
  let posY3 = map(mouseY, 0, height, 7, -7);
  flower3.position(posX3, posY3);
    
let posX4 = map(mouseX, 0, width, 1, -1);
  let posY4 = map(mouseY, 0, height, 1, -1);
  flower4.position(posX4, posY4);
}


//draggable//
$(document).ready(function () {
    $(function () {
        $(".workout").draggable();
    });   
    
      $(function () {
        $(".meditation").draggable();
    });   
    
      $(function () {
        $(".art").draggable();
    });   
    
      $(function () {
        $(".cook").draggable();
    });   
    
      $(function () {
        $(".book").draggable();
    });   
    
      $(function () {
        $(".family").draggable();
    });   
    
//draggable//    
    
    $('.meditation').click(function () {
        $('.p1').toggle();
    });
    
        $('.art').click(function () {
        $('.p2').toggle();
    });
    
           $('.cook').click(function () {
        $('.p3').toggle();
    });
    
    
    
           $('.book').click(function () {
        $('.p4').toggle();
    });
    
     
           $('.family').click(function () {
        $('.p5').toggle();
    });
    
    
    
           $('.workout').click(function () {
        $('.p6').toggle();
    });
//    
//        $('#p1').click(function () {
//        $('.pop-up').toggle();
//    });

//        $('.workout').hover(function () {
//        $('.p2').fadeIn();
//    }, function () {
//        $('.p2').fadeOut();
//    });
    
    
//        $(".art").click(function () {
//                $(".p1").toggle();
//        $(".p2").toggle();
//    });
    
       $('.red').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });
    
    
    
    
    
    
});

