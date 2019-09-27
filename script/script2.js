console.log('hi');

$(document).ready(function() {
    // javascript goes here
  
  


    $('.abutton2').mousedown('click touchstart', function () {

    	 $(".abutton2").toggleClass("abutton");
    	 $(".item").toggleClass("circlebutton");


  });


var colors = ["#08F7FE","#09FBD3","#FE53BB","#F5D300","#FFD300","#DE38C8","#652EC7"];


       $('.colorbutton').mousedown('click touchstart', function () {
       	var rand = Math.floor(Math.random() * colors.length);

    	 $(".colorbutton,#item10,#item13,#item16,#item18,#item29,#item38,#item44,#item46,#item67,#item69,#item75,#item88,#item100,#item94,#item97,#item102,#item122,#item130,#item126,#item128,#item125,#item146,#item148,#item143,#item151,#item149,#item178,#item180,#item186,#item181,#item189,#item194,#item212,#item197,#item206,#item232,#item236,#item260,#item264,#item273,#item278,#item260,#item264,#item273,#item278,#item281,#item291,#item294,#item299,#item312,#item345,#item346,#item347,#item351,#item352,#item373,#item374,#item380,#item402,#item405,#item408,#item410,#item429,#item430,#item436,#item438,#item458,#item460,#item461,#item466,#item485,#item486,#item492,#item514,#item515,#item518,#item521,#item523,#item538,#item541,#item543,#item550,#item551,#item569,#item572,#item578,#item597,#item600,#item606,#item625,#item626,#item627,#item628,#item634,#item635,#item653,#item656,#item658,#item661,#item664,#item681,#item684,#item690,#item693,#item698,#item709,#item711,#item714,#item718,#item719").css("background", colors[rand]);
    	 

  });
    

  });