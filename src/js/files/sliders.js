/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay, FreeMode, Pagination } from 'swiper';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Список слайдеров
if (document.querySelector('.bottom-main-home__slider')) { // Указываем склад нужного слайдера
	// Создаем слайдер
	new Swiper('.bottom-main-home__slider', { // Указываем склад нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 28,
		speed: 800,

		// Кнопки «влево/вправо»
		navigation: {
			prevEl: '.bottom-main-home__arrow-prev',
			nextEl: '.bottom-main-home__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.15,
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 28,
			},
		},

	});
}

if (document.querySelector('.main-home__slider')) { // Указываем склад нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем склад нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		lazy: true,
		loop: true, 
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-home__pagination',
			clickable: true,
		},

	});
}

if (document.querySelector('.gallery__slider')) { // Указываем склад нужного слайдера
	// Создаем слайдер
	new Swiper('.gallery__slider', { // Указываем склад нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, FreeMode],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		freeMode: true,
		speed: 800,

		// Кнопки «влево/вправо»
		navigation: {
			prevEl: '.gallery__arrow-prev',
			nextEl: '.gallery__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 'auto',
			},
			991.98: {
				spaceBetween: 1,
			},
		},

	});
}

if (document.querySelector('.about__slider')) { // Указываем склад нужного слайдера
	// Создаем слайдер
	new Swiper('.about__slider', { // Указываем склад нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 800,
		loop: true,
		lazy: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Кнопки «влево/вправо»
		navigation: {
			prevEl: '.about__arrow-prev',
			nextEl: '.about__arrow-next',
		},

	});
}

if (document.querySelector('.test__slider')) { // Указываем склад нужного слайдера
	// Создаем слайдер
	new Swiper('.test__slider', { // Указываем склад нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 28,
		speed: 800,

		// Кнопки «влево/вправо»
		navigation: {
			prevEl: '.test__arrow-prev',
			nextEl: '.test__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.08,
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 1.8,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 28,
			},
		},

	});
}
