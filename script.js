window.moveTo(0, 0);
window.resizeTo(screen.availWidth, screen.availHeight);
gsap.registerPlugin(CSSPlugin);

const body = document.querySelector('.body');

const BtnNavMobile = document.querySelector('.btn-nav-mobile'),
    NavMobile = document.querySelector('.nav-mobile'),
    BtnNavMobileClose = document.querySelector('.btn-nav-mobile-close');

//Меню на мобилках
BtnNavMobile.addEventListener('click', () => {
    NavMobile.classList.toggle('hide');
    body.classList.toggle('no-scroll');
});

BtnNavMobileClose.addEventListener('click', () => {
    NavMobile.classList.toggle('hide');
    body.classList.toggle('no-scroll');
});


/* Курсор */
(function ($) {
    "use strict";
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
})(jQuery);




// function AnimatePage () {
//     gsap.fromTo(".header .h1", {
//         y: 20,
//         opacity: 0
//     },{
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         ease: "expo.inOut"
//     });
//     gsap.fromTo(".header p", {
//         y: 20,
//         opacity: 0
//     },{
//         delay: 0.6,
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         ease: "expo.inOut"
//     });
//     gsap.fromTo(".header .btn", {
//         y: 20,
//         opacity: 0
//     },{
//         delay: 0.8,
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         ease: "expo.inOut"
//     });
// };