function indents() {
    const header = document.querySelector('.header');
    const page = document.querySelector('.main');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));
    if (page) {
        page.style.paddingTop = hHeader + 'px';
    }
}

window.addEventListener('scroll', () => {
    indents();
});

window.addEventListener('resize', () => {
    indents();
});

indents();

//========================================================================================================================================================

document.querySelector('.lang-header__title').addEventListener('click', function () {
    const content = this.closest('.lang-header__content');
    if (content) {
        content.classList.toggle('_active');
    }
});

//========================================================================================================================================================

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function (e) {
        // Проверяем ширину экрана
        if (window.innerWidth <= 991.92) {
            e.preventDefault(); // предотвращаем переход по ссылке

            const parentItem = this.closest('.menu__item');

            if (parentItem) {
                // Если уже есть _active — убираем, иначе добавляем
                if (parentItem.classList.contains('_active')) {
                    parentItem.classList.remove('_active');
                } else {
                    // Сначала убираем _active у всех
                    document.querySelectorAll('.menu__item._active').forEach(item => {
                        item.classList.remove('_active');
                    });

                    // Добавляем _active текущему
                    parentItem.classList.add('_active');
                }
            }
        }
    });
});