import { isMobile, uniqArray, FLS } from "../files/functions.js";
import { flsModules } from "../files/modules.js";

// Наблюдатель объектов [всевидящее око]
// data-watch - можно писать значения для применения кастомного кода
// data-watch-root - родительский элемент внутри которого наблюдать за объектом
// data-watch-margin -отступ
// data-watch-threshold - процент показа объекта для срабатывания
// data-watch-once - наблюдать только один раз
// _watcher-view - класс который добавляется при появлении объекта

class ScrollWatcher {
	constructor({ logging = true } = {}) {
		this.config = { logging };
		this.observer = null;

		if (!document.documentElement.classList.contains("watcher")) {
			document.documentElement.classList.add("watcher");
			this.init();
		}
	}

	init() {
		const items = document.querySelectorAll("[data-watch]");
		if (!items.length) return;

		this.scrollWatcherLogging(`Начало наблюдения за ${items.length} элементами`);
		this.createObserver();

		items.forEach(item => {
			this.observer.observe(item);
		});
	}

	createObserver() {
		const config = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1
		};

		this.observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const target = entry.target;

				if (entry.isIntersecting) {
					target.classList.add("_watcher-view");
				} else {
					target.classList.remove("_watcher-view");
				}

				// Если стоит data-watch-once и элемент вошёл в зону видимости
				if (target.hasAttribute("data-watch-once") && entry.isIntersecting) {
					this.observer.unobserve(target);
				}

				// Кастомное событие для внешних подписчиков
				document.dispatchEvent(new CustomEvent("watcherCallback", {
					detail: { entry }
				}));
			});
		}, config);
	}

	scrollWatcherLogging(message) {
		if (this.config.logging) {
			console.log(`[ScrollWatcher]: ${message}`);
		}
	}
}

// Запуск
if (typeof flsModules !== 'undefined') {
	flsModules.watcher = new ScrollWatcher({});
}
