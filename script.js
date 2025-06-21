// var menuBtn = document.getElementById("menuBtn")
// var sideNave = document.getElementById("sideNave")
// var menu = document.getElementById("menu")

// menuBtn.onclick = function(){
//     if(sideNave.style.right == "-250px"){
//         sideNave.style.right = "0";

//     }
//     else {
//         sideNave.style.right == "-250px"
        
//     }
// }

var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "cross.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "yt.png";
        
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


