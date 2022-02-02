// Select accordion items
const accordion = Array.from(document.querySelectorAll(".container"));

// Accordion event listener
accordion.forEach(element => {
	element.addEventListener('click', () => accordionToggle(element))
});

// Unhides accordion content
function accordionToggle(element) {
	let elementContent = element.querySelector('.content');
	element.classList.contains('active') ? elementContent.style.height = 0 : elementContent.style.height = elementContent.scrollHeight + 16 + 'px';
	element.classList.toggle('active');
}