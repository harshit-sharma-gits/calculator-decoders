let string = '';
let buttons = document.querySelectorAll('.button');
const audio = new Audio('../assets/keyPressClick.mp3');
Array.from(buttons).forEach((button) => {
	button.addEventListener('click', (e) => {
		audio.play();
		if (e.target.innerHTML == '=') {
			string = eval(string);
			document.querySelector('input').value = string;
		} else if (e.target.innerHTML == 'C') {
			string = '';
			document.querySelector('input').value = string;
		} else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			document.querySelector('input').value = string;
		}
	});
});
