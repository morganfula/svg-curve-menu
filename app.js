import { gsap } from 'gsap';

let path = document.querySelector('.path');
let menuToggle = document.querySelector('.menu-tog');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
console.log(li);

console.log(path.getAttribute('d'));

function lerp(start, end, t) {
	return start * (1 - t) + end * t;
}

let toggle = false;

// Start SVG at bottom of screen
let y = 100;
let c = 100;

const animate = () => {
	if (toggle) {
		y = lerp(y, 0, 0.055);
		c = lerp(c, 0, 0.075);
		path.setAttribute(
			'd',
			`M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`
		);
	} else {
		y = lerp(y, 100, 0.055);
		c = lerp(c, 100, 0.075);
		path.setAttribute(
			'd',
			`M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, ${50} ${c}, 0 ${y}`
		);
	}

	requestAnimationFrame(animate);
};

animate();

menuToggle.addEventListener('click', () => {
	setTimeout(() => {
		toggle = !toggle;
	}, 300);
	if (toggle) {
		ul.classList.remove('active');
	} else {
		setTimeout(() => {
			ul.classList.add('active');
		}, 1000);
	}

	menuToggle.classList.toggle('active');
});
