gsap.registerPlugin(TextPlugin, CSSPlugin);

const NavLinks = document.querySelectorAll('.nav-link');
const TabPanes = document.querySelectorAll('.tab-pane');
const navbarHeadnigs = document.querySelectorAll('.crs-header__description .h2');
const GuideStepper = document.getElementById('nav-tabs-stepper-guide');
const GuideTabs = document.getElementById('course-guide-content');
const HelloName = document.querySelector('.course-start__content');
const BtnStartCourse = document.getElementById('btn-start-course');
const CourseStart = document.querySelector('.course-start');

// Анимания показа курса
btnCourseStart.addEventListener('click', () => {
    body.classList.add('c-wait');
    gsap.to(".course-start__content .h3", {
        delay: 0.3,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .body-l-regular", {
        delay: 0.5,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .btn-primary", {
        delay: 0.7,
        duration: 1,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .btn-secondary", {
        delay: 0.7,
        duration: 1,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start", {
        delay: 1.5,
        duration: 1,
        opacity: 0,
        ease: "power4.in"
    });
    gsap.to(".course-start", {
        delay: 2.5,
        duration: 0.1,
        top: "-100%",
        onComplete: () => {
            // HelloName.classList.add('hide');
            // GuideStepper.classList.remove('hide');
            // GuideTabs.classList.remove('hide');
            body.classList.remove('c-wait');
            body.classList.remove('no-scroll');
        }
    })
});

btnGuideStart.addEventListener('click', () => {
    body.classList.add('c-wait');
    gsap.to(".course-start__content .h3", {
        delay: 0.3,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .body-l-regular", {
        delay: 0.5,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .btn-primary", {
        delay: 0.7,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut"
    });
    gsap.to(".course-start__content .btn-secondary", {
        delay: 0.7,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "expo.inOut",
        onComplete: () => {
            gsap.fromTo(GuideStepper, {
                opacity: 0
            }, {
                duration: 1,
                opacity: 1
            })
            gsap.fromTo(GuideTabs, {
                opacity: 0
            }, {
                duration: 1,
                opacity: 1
            })
            HelloName.classList.add('hide');
            body.classList.remove('c-wait');
            GuideStepper.classList.remove('hide');
            GuideTabs.classList.remove('hide');
        }
    });
});

    BtnStartCourse.addEventListener('click', ()=> {
        body.classList.add('c-wait');
        body.classList.add('no-scroll');
        gsap.to(GuideStepper, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "expo.inOut"
        })
        gsap.to(GuideTabs, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "expo.inOut"
        })
        gsap.to(".course-start", {
            duration: 2,
            opacity: 0,
            ease: "expo.inOut",
            onComplete: () => {
                body.classList.remove('c-wait');
                body.classList.remove('no-scroll');
                CourseStart.classList.add('hide');
            }
        })
    });



//     // gsap.fromTo("#course-guide-content", {
//     //     opacity: 0,
//     // }, {
//     //     delay: 1,
//     //     duration: 2,
//     //     opacity: 1,
//     //     top: 0,
//     //     ease: "expo.inOut"
//     // });
//     // gsap.fromTo("#nav-tabs-stepper-guide", {
//     //     opacity: 0,
//     // }, {
//     //     delay: 1,
//     //     duration: 2,
//     //     opacity: 1,
//     //     top: 0,
//     //     ease: "expo.inOut"
//     // });
// });

// Анимация .header
// for (let i = 0; i < NavLinks.length; i++) {
//     NavLinks[i].addEventListener('click', () => {
//         gsap.fromTo(".crs-header", {
//             height: 300
//         }, {
//             duration: 1.5,
//             ease: "expo.inOut",
//             height: 480
//         });
//     });
// };

// Анимация .tab-pane
// for (let i = 0; i < TabPanes.length; i++) {
//     NavLinks[i].addEventListener('click', () => {
//         // alert('1');
//         gsap.fromTo(".tab-pane", {
//             opacity: 0
//         }, {
//             duration: 1,
//             ease: "power4.out",
//             opacity: 1
//         });
//     });
// };

// Анимация h в .header
// for (let i = 0; i < navbarHeadnigs.length; i++) {
//     NavLinks[i].addEventListener('click', () => {
//         // alert('1');
//         gsap.To(NavLinks, {
//             duration: 1,
//             text: "This is the new text",
//             ease: "expo.inOut"
//         });
//     });
// };







// themeLink2.addEventListener('click', () => {
//     gsap.to(#stocks, {
//         duration: 2,
//         text: "Устройство рынка",
//         ease: none
//     })
// });

// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//     e.target // newly activated tab
//     e.relatedTarget // previous active tab
//   })


// carouselBtnNext.addEventListener('click', () => {
//     // Анимация слоев
//     gsap.fromTo('.layer-up', {
//         left: "1%",
//         top: "16px",
//         width: "98%"
//     }, {
//         duration: 0.3,
//         ease: "none",
//         left: "0%",
//         top: "0px",
//         width: "100%",
//         opacity: "0.8"
//     });
//     gsap.fromTo('.layer-down', {
//         delay: 0.4,
//         left: "2%",
//         top: "32px",
//         width: "96%",
//         opacity: "0.7"
//     }, {
//         duration: 0.3,
//         ease: "none",
//         left: "1%",
//         top: "16px",
//         width: "98%",
//         opacity: "0.8"
//     });
//     // Возвращаем слои к нижнему краю
//     gsap.fromTo('.layer-up', {
//         delay: 1,
//         duration: 0.3,
//         ease: "none",
//         left: "0%",
//         top: "0px",
//         width: "100%",
//         opacity: "0.8"
//     }, {
//         left: "1%",
//         top: "16px",
//         width: "98%",
//         opacity: "0"
//     });
//     gsap.fromTo('.layer-down', {
//         delay: 1,
//         duration: 0.3,
//         ease: "none",
//         left: "1%",
//         top: "16px",
//         width: "98%",
//         opacity: "0.8"
//     }, {
//         left: "2%",
//         top: "32px",
//         width: "96%",
//         opacity: "0"
//     });
// }); 