const selectButtonNews = document.querySelector('.projects-select__button');
const selectListNews = document.querySelector('.projects-category__nav');
const selectListItemsNews = document.querySelectorAll('.projects-category__link');

//Клик по кнопке. Открыть, закрыть select
selectButtonNews.addEventListener('click', function() {
    selectListNews.classList.toggle('projects-category__nav--active');
    this.classList.add('projects-select__button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
selectListItemsNews.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectButtonNews.innerText = this.innerText;
        selectButtonNews.focus();
        selectListNews.classList.toggle('projects-category__nav--active');
    })
})

//Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== selectButtonNews) {
        selectButtonNews.classList.remove('projects-select__button--active');
        selectListNews.classList.remove('projects-category__nav--active');
    }
})