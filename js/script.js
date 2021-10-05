const accordion = Array.from(document.getElementsByClassName('container'));

accordion.forEach(element => {
	element.addEventListener('click', () => element.classList.toggle('active'))
});