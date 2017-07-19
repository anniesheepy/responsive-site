// drop-down menu
var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");
var i = 0;

//default to measure if/else from
nav.style.height = "2.5rem";
main.style.marginTop = "2.5rem";
for (i = 0; i < menu.length; i++) {
    menu[i].style.marginTop = "1rem";
}

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

// text modal
$('#modal').iziModal();
$('#modal2').iziModal();

if (window.matchMedia("(min-width: 1366px)").matches) {
    $('#modal').iziModal('setWidth', '70%');
    $('#modal2').iziModal('setWidth', '70%');
}else{
    $('#modal').iziModal('setWidth', 600);
    $('#modal2').iziModal('setWidth', 600);
}


$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal2').iziModal('open');
});




//img modal
var modal = document.getElementById('myModal');
var zoom = document.getElementById('zoom1');
var zoom2 = document.getElementById('zoom2');
var modalImg = document.getElementById("img01");
zoom1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/dinebig.jpg";
}
zoom2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/cookbig.jpg";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

    
    
    
//map
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
