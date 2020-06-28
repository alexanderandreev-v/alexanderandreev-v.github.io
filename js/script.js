document.addEventListener('DOMContentLoaded', function(e){
    'use strict';
    var list = document.querySelectorAll('#tabs a');
    list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            e.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));

            // remove "act" class
            document.querySelector('#tabs .active')
                .classList.remove('active');
            document.querySelector('#tabsWrap .active')
                .classList.remove('active');

            // set "act"
            el.classList.add('active');
            tab.classList.add('active');
        })
    })
});

// imgs = [
//     'http://www.archi-europe.com/pictures/DRDH_1.jpg',
//     'http://c1038.r38.cf3.rackcdn.com/group1/building1978/media/bodo_kulturhus_drdh060309_5.jpg',
//     'http://static.dezeen.com/uploads/2010/08/dzn_Bod%C3%B8-Kulturhus-and-Library-by-drdharchitects-1.jpg',
//     'http://www.buildwithlingo.com/sites/lingo/uploads/images/projects/Beacon_Hill/_thumbs/Rendering-720-430-crop.png',
//     ];
    
//     setInterval(function(){
//         img = imgs[Math.floor(Math.random()*imgs.length)];
//         $('span').text(img);
//         $('img').attr('src', img);
//     }, 1000);