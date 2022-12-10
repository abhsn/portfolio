const headerTag = document.getElementsByTagName('header')[0];
const mainTag = document.getElementsByTagName('main')[0];
const navTag = document.getElementsByTagName('nav')[0];
const menuBtnImg = document.querySelector('#menu-btn > img');

// gets the height of header
const headerHeight = headerTag.clientHeight;
// adds top margin same as header height
mainTag.style.marginTop = `${headerHeight}px`;
// main element gets the rest of the window height
mainTag.style.height = `${window.innerHeight - headerHeight}px`;

navTag.style.top = `${headerHeight}px`;

let navTagWidth = navTag.clientWidth;

let showMenu = false;
navTag.style.right = `-${navTagWidth}px`;

function toggleMenu() {
	showMenu = !showMenu;
	if (showMenu) {
		navTag.classList.remove('nav-animation-out');
		navTag.classList.add('nav-animation-in');
		document.body.style.overflow = 'hidden';
		navTag.style.overflow = 'scroll';
		menuBtnImg.src = '../assets/images/skull-crossbones.svg';
	} else {
		navTag.classList.remove('nav-animation-in');
		// navTag.style.right = `-${navTag.clientWidth}px`;
		document.body.style.overflow = 'auto';
		navTag.style.overflow = 'hidden';
		menuBtnImg.src = '../assets/images/burger.svg';

		const fadeOut = document.createElement('style');
		fadeOut.innerText = `@keyframes slideout { from {right: 0;} to {right: ${navTagWidth}; } }`;
		document.head.appendChild(fadeOut);
		navTag.classList.add('nav-animation-out');
	}
}

// adds margin top to main and set height to main when window is resized
window.addEventListener('resize', () => {
	mainTag.style.marginTop = `${headerHeight}px`;
	mainTag.style.height = `${window.innerHeight - headerHeight}px`;
	navTag.style.top = `${headerHeight}px`;
	navTagWidth = navTag.clientWidth;
	if (!showMenu) {
		navTag.style.right = `-${navTag.clientWidth}px`;
	}
});