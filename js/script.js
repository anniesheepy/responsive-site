var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "2.5rem";
main.style.marginTop = "2.5rem";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="1rem";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "12rem") {
	nav.style.height = "2.5rem";
	main.style.marginTop = "2.5rem";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.display="none";
	menu[i].style.marginTop="12rem";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "2.5rem") {
	nav.style.height = "12rem";
	main.style.marginTop = "12rem";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.display="inline-block";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	
	}

};

$(function () { // Onload
    $("#showButton1").click(function () {
      $("#hiddenPanel1").fadeIn(600);
    });
    $("#closeButton1").click(function () {
       $("#hiddenPanel1").fadeOut(600);
    });
    $("#showButton2").click(function () {
      $("#hiddenPanel2").fadeIn(600);
    });
    $("#closeButton2").click(function () {
       $("#hiddenPanel2").fadeOut(600);
    });

  });

function initMap() {
        var uluru = {lat: 49.358462, lng: -123.106562};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
