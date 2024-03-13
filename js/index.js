const generateBtn = document.getElementById('generate-btn');
const password = document.getElementById('password');

const value = document.getElementById('value');
const input = document.getElementById('input-range');
value.textContent = input.value;

input.addEventListener('input', (event) => {
	value.textContent = event.target.value;
});

const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

let passwordLength = 0;

function getRandomCharacters() {
	let randomChar = Math.floor(Math.random() * characters.length);
	return characters[randomChar];
}

generateBtn.addEventListener('click', function () {
	passwordLength = input.value;

	function generateRandomPassword() {
		let randomPassword = '';

		for (let i = 0; i < passwordLength; i++) {
			randomPassword += getRandomCharacters();
		}

		return randomPassword;
	}

	let randomPassword = generateRandomPassword();

	password.textContent = randomPassword;
});

const copycontext = async () => {
	try {
		await navigator.clipboard.writeText(password.innerHTML);
		alert('Copied to clipboard');
	} catch (err) {
		console.error('Failed to copy:', err);
	}
};
