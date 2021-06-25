$(document).ready(function(){

  // sticky nav
    $(".js--services-section").waypoint(function(direction){
      
        if(direction == "down"){
            $("nav").addClass("sticky");

        }
        else{
            $("nav").removeClass("sticky");

        }
    });
    // mixit up portfolio
    var mixer = mixitup('.container');
})



