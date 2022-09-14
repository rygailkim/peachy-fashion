
// // ------------------------------------
// // HAMBURGER MENU
// // ------------------------------------

// let menuButton = document.querySelector(".menu-button");
// let navbar = document.querySelector(".navbar")

// menuButton.addEventListener("click", function() {
//     navbar.classList.toggle("opened")
// })

// // ------------------------------------
// // PARALLAX
// // ------------------------------------

// let allParallax = document.querySelectorAll(".parallax");
// // console.log(allParallax)

// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }

// window.addEventListener("scroll", function() {
//     for (let index = 0; index < allParallax.length; index++) {
//         let elem = allParallax[index];
        
//         if (isScrolledIntoView(elem)) {
//             // console.log("div is in view")
//             // console.log(elem)

//             let stickers = elem.querySelectorAll(".grid-sticker, .income-coin");
//             // console.log(stickers)

//             for (let index = 0; index < stickers.length; index++) {
//                 let position = (window.scrollY - elem.offsetTop) * -0.2;
//                 // console.log("scrollY: ", window.scrollY)
//                 // console.log("element offset top: ", elem.offsetTop)

//                 stickers[index].style.transform = "translate3d(0px, " + position + "px, 0px)";
//             }
//         }
//     }
// })


// // ------------------------------------
// // PAGE SCROLL NAVBAR
// // ------------------------------------

// // var logo = document.createElement("navLogo");
// // navLogo.src = "./assets/img/nav-logo.svg"

// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if (scroll > 0){
//     $("nav").addClass('scrolled');
//     $(".logo-wrapper").hide(0);
//     // document.querySelector("nav").appendChild(navLogo);
//   } else{
//     $("nav").removeClass('scrolled');
//     $(".logo-wrapper").show(0);
//   }
// })


// // ------------------------------------
// // SEARCH
// // ------------------------------------

// $(".search-button").click(function(event){
//     event.preventDefault();
//     $(".nav-button-right .search-button").addClass("active");
//     $(".search-input").toggle(500);
// });


