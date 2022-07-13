// ----------------mixitup-blog


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
    autoplay: {
        delay: 10000
    }
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
    autoplay: {
        delay: 10000
    }
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
document.querySelector('.projects-category__link').click();