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
