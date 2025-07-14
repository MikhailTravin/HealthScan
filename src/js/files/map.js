const mapElement = document.querySelector('#map');

if (mapElement) {
	const mapObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				mapObserver.unobserve(mapElement);

				if (typeof ymaps === 'undefined') {
					const script = document.createElement('script');
					script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';  // ← Проверьте URL
					script.async = true;

					script.onload = () => {
						if (typeof ymaps !== 'undefined') {
							ymaps.ready(safeInitMap);  // ← Используем ymaps.ready
						}
					};

					script.onerror = () => {
						console.error('Yandex Maps failed to load');
					};

					document.head.appendChild(script);
				} else {
					ymaps.ready(safeInitMap);  // ← Запускаем через ymaps.ready
				}
			}
		});
	}, {
		rootMargin: '0px 0px 200px 0px'
	});

	mapObserver.observe(mapElement);
}

function safeInitMap() {
	const mapElement = document.getElementById('map');
	if (!mapElement || mapElement.dataset.initialized === 'true') return;

	try {
		const preview = mapElement.querySelector('.map-preview');
		if (preview) preview.remove();

		// Инициализация карты
		const myMap = new ymaps.Map('map', {
			center: [59.890857, 30.411512],
			zoom: 17,
			controls: ['zoomControl']
		});

		// Кастомный стиль (пример темной темы)
		myMap.options.set('styles', [
			{
				"featureType": "all",
				"elementType": "geometry",
				"stylers": [{ "color": "#242f3e" }]
			}
		]);

		// Метка
		const placemark = new ymaps.Placemark([59.890175, 30.411566], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/location.svg',
			iconImageSize: [68, 76],
			iconImageOffset: [-14, -36]
		});

		myMap.geoObjects.add(placemark);
		mapElement.dataset.initialized = 'true';

	} catch (error) {
		console.error("Map init error:", error);
	}
}
