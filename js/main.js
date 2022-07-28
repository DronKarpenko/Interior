const fileLoad = document.getElementById('file-upload');
const uploadProgress = document.querySelector(".upload-progress");
const uploadArea = document.querySelector(".upload-area");


    fileLoad.addEventListener('change', ({target, total}) => {
        let file = target.files[0];
        if (file) {
            let fileName = file.name;
            let fileSize = file.size;
            if (file.size > 10 * 1024 * 1024) {
                alert('File size not more than 10 MB');
                uploadProgress.innerHTML = "";
                uploadArea.insertAdjacentHTML("afterbegin", "");
                return;
            }
            if (file.size < 1000000) {
                fileSize = Math.floor(fileSize / 1000) + " KB";
            } else {
                fileSize = Math.floor(fileSize / 1000000) + " MB";
            }
            let progressHTML = `<li class="row">
                                    <img src="img/upload-file.png" width="30" alt="file">
                                    <div class="content">
                                        <div class="details">
                                            <span class="name">${fileName} * Uploading</span>
                                            <span class="percent">50%</span>
                                        </div>
                                        <div class="progress-bar">
                                            <div class="progress"></div>
                                        </div>
                                    </div>
                                </li>`;
            uploadProgress.innerHTML = progressHTML;
            setTimeout(() => {
                uploadProgress.innerHTML = "";
            }, 2000);
            setTimeout(() => {
                let uploadedHTML = `<li class="row">
                                        <div class="content">
                                            <img src="img/upload-file.png" width="30" alt="file">
                                            <div class="details">
                                                <span class="name">${fileName} * Uploaded</span>
                                                <span class="size">${fileSize}</span>
                                            </div>
                                        </div>
                                    </li>`;
            uploadArea.insertAdjacentHTML("afterbegin", uploadedHTML);
            }, 2100); 
            uploadFile(file);
        }
    });

function submitForm() {
   // Get the first form with the name
   // Hopefully there is only one, but there are more, select the correct index
   document.forms['popup-form'].reset()
}

const selectBtn = document.querySelector('.intro-feedback__geo');
const select = document.querySelector('.city-selection');
const selectItems = document.querySelectorAll('.city-selection__list');

selectBtn.onclick = function(){
    select.classList.toggle('city-selection--visible');
};
selectItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectBtn.innerText = this.innerText;
        selectBtn.focus();
        select.classList.toggle('city-selection--visible');
    })
})
document.addEventListener('click', function (e) {
    if (e.target !== selectBtn) {
        select.classList.remove('city-selection--visible');
        selectBtn.classList.remove('intro-feedback__geo--active');
    }
})


// -----------------------BURGER-MENU-----------------
$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu,.home-link,.header-nav__button').toggleClass('active');
        $('body').toggleClass('body--not_scroll');
    });
});

// --------------------------PRELOADER-------------------
// const preloader = document.querySelector('.preloader')
// const percents = document.querySelector('.percents')
// const preloaderLight = document.querySelector('.preloader-light')

// let images = document.images,
//     images_total_count = images.length,
//     images_loaded_count = 0;

// for (var i = 0; i < images_total_count; i++) {
//     image_clone = new Image();
//     image_clone.onload = image_loaded;
//     image_clone.onerror = image_loaded;
//     image_clone.src = images[i].src;
// }

// console.log(images_total_count);
// console.log(images_loaded_count);

// function image_loaded() {
//     images_loaded_count++;
//     percents.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
//     if(images_loaded_count >= images_total_count){
//         percents.classList.add('percents--hide')
//         preloaderLight.classList.add('preloader-light--show')
//         setTimeout(function(){            
//             preloader.classList.add('preloader--hide')
//         }, 1000);
//     }
// }


// --------------------------POP-UP------------------
let popup = document.querySelector('.popup')
    popupOpen = document.querySelector('.popup-open')
    popupClose = document.querySelector('.popup-close')
    sendClose = document.querySelector('.form-area__submit')
    blockBody = document.querySelector('body')
    // thanksPopup = document.querySelector('thanks-popup')

    popupOpen.onclick = function(){
        popup.classList.add('popup--visible');
        blockBody.classList.add('body--block')
    };
    popupClose.onclick = function(){
        popup.classList.remove('popup--visible');
        blockBody.classList.remove('body--block');
        document.getElementById('popupForm').reset();
    };
    sendClose.onclick = function(){
        popup.classList.remove('popup--visible');
        blockBody.classList.remove('body--block');
        document.getElementById('popupForm').reset();

    };
    window.onclick = function(e){
        if(e.target == popup){
            popup.classList.remove('popup--visible');
            blockBody.classList.remove('body--block');
            document.getElementById('popupForm').reset();
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
    breakpoints: {
        300: {
            slidesPerView: 1.1,
        },
        481: {
            slidesPerView: 1.5,
        },
        769: {
            slidesPerView: 2.5,
        },
        1025: {
            slidesPerView: 3.5,
        }  
    },
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
// ----------------------SELECT in INTRO-----------------


// ---------------------SELECT in POPUP------------------------
const popupSelectBtn = document.querySelector('.select-button');
const popupSelectList = document.querySelector('.select-list');
const popupSelectItem = document.querySelectorAll('.select-list__item');

popupSelectBtn.addEventListener('click', function() {
    popupSelectList.classList.toggle('select-list--active');
    this.classList.add('select-button--active');
});

popupSelectItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        popupSelectBtn.innerText = this.innerText;
        popupSelectBtn.focus();
        popupSelectList.classList.toggle('select-list--active');
    })
})
document.addEventListener('click', function (e) {
    if (e.target !== popupSelectBtn) {
        popupSelectBtn.classList.remove('select-button--active');
        popupSelectList.classList.remove('select-list--active');
    }
});