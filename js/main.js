// --------------------------PRELOADER-------------------
// document.addEventListener('DOMContentLoaded', () => {
// const mediaFiles = document.querySelectorAll('img');
// const preloader = document.querySelector('.preloader');
// const percents = document.querySelector('.percents');
// const preloaderLight = document.querySelector('.preloader-light');

//     let i = 0

//     Array.from(mediaFiles).forEach((file, index) => {
//         file.onload = () => {
//             i++
//             console.log(mediaFiles)

//             percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed()

//             if(i === mediaFiles.length) {
//                 percents.innerHTML = 100
//                 percents.classList.add('percents--hide')
//                 preloaderLight.classList.add('preloader-light--show')
//                 // setTimeout(preloader.classList.add('preloader--hide'), 500)
//                 preloader.classList.add('preloader--hide')
//             }
//         }
//     })
// })
const preloader = document.querySelector('.preloader')
const percents = document.querySelector('.percents')
const preloaderLight = document.querySelector('.preloader-light')

let images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0;

for (var i = 0; i < images_total_count; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

console.log(images_total_count);
console.log(images_loaded_count);

function image_loaded() {
    images_loaded_count++;
    percents.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
    if(images_loaded_count >= images_total_count){
        percents.classList.add('percents--hide')
        preloaderLight.classList.add('preloader-light--show')
        setTimeout(function(){            
            preloader.classList.add('preloader--hide')
        }, 1000);
    }
}


// --------------------------POP-UP------------------
let popup = document.querySelector('.popup')
    popupOpen = document.querySelector('.popup-open')
    popupClose = document.querySelector('.popup-close')
    sendClose = document.querySelector('.form-area__submit')
    blockBody = document.querySelector('body')

    popupOpen.onclick = function(){
        popup.classList.add('popup--visible');
        blockBody.classList.add('body--block')
    };
    popupClose.onclick = function(){
        popup.classList.remove('popup--visible');
        blockBody.classList.remove('body--block')
    };
    sendClose.onclick = function(){
        popup.classList.remove('popup--visible');
        blockBody.classList.remove('body--block')
    };
    window.onclick = function(e){
        if(e.target == popup){
            popup.classList.remove('popup--visible');
            blockBody.classList.remove('body--block')
        }
    };

// ------------------------FILTER BLOG---------------
function app() {
    const buttons = document.querySelectorAll('.filter')
    const cards = document.querySelectorAll('.blog-news__item')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })
}

app()


// ---------------SWIPER header-------------------------
var swiper = new Swiper('.intro-swiper', {
    //Стрелки
    navigation: {
        nextEl: '.intro-swiper__button-next',
        prevEl: '.intro-swiper__button-prev'
    },
    slidesPerView: 1.16,
    spaceBetween: -20,
    slidesPerGroup: 1,
    //бесконечное прокручивание
    loop: true,
});

// ---------------SWIPER about-page-----------------------
var swiper = new Swiper('.about-philosophy__slider', {
    //Стрелки
    navigation: {
        nextEl: '.about-philosophy__next',
        prevEl: '.about-philosophy__prev'
    },
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 1.16,
    spaceBetween: 12,
    slidesPerGroup: 1,
    //бесконечное прокручивание
    loop: true,
});

// ---------------SWIPER one-blog-------------------------
var swiper = new Swiper('.latest-news__slider', {
    slidesPerView: 3.5,
    spaceBetween: 45,
    slidesPerGroup: 1,
    simulateTouch: true,
    grabCursor: true,
    //бесконечное прокручивание
    loop: true,
});

// --------------------------TABS----------------------------
const tabsBtn   = document.querySelectorAll(".projects-category__link");
const tabsItems = document.querySelectorAll(".project-page__gallery");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
// document.querySelector('.projects-category__link').click();