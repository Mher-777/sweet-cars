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