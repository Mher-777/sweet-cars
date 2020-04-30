$(function () {

})
const iconDown = (bottomScrollSection, scrollTopSection) => {
	const bottomScroll = document.querySelector(bottomScrollSection),
		elem = document.querySelector(scrollTopSection);
	bottomScroll.addEventListener('click', (event) => {
		const elemCountHeight = elem.scrollHeight
		event.preventDefault()
		window.scrollBy({top: elemCountHeight, behavior: "smooth"});
	})
}
iconDown('.header__bottom-icon', '.s-discount')

const select = () => {
	let selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('is-open');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('is-open');
		})
	});
};
select()
const sliceText = () => {
	const text = document.querySelector('.basket__title'),
			desc = document.querySelector('.basket__desc');
	if(text.clientHeight > 350){
		desc.classList.add('basket__desc--is-open')
	}
}
sliceText()
const tab = function () {
	let tabNav = document.querySelectorAll('.prices__navigation-item'), // Выбираем элементы навигации табов
		tabContent = document.querySelectorAll('.prices__content'), // Выбираем самы табы
		tabName; // Переменная для имени таба

	// Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
	tabNav.forEach((item) => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach((item) => {
			// Удаляем активный класс у всех элементов навигации табов
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');  // Добавляем активный укласс у элемента по которому кликнули
		tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
		selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
	}

	function selectTabContent(tab) {
		// Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
		tabContent.forEach((item) => {
			let classList = item.classList;
			classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
		});
	}
};
tab();
AOS.init();