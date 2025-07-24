// Эффект при скролле
window.addEventListener('scroll', function() {
	if (window.scrollY > 50) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
});

// Динамический заголовок
var phrases = [
	{ text: "Привет, PineappleOS!", highlightWord: "PineappleOS!" },
	{ text: "Система будущего!", highlightWord: "будущего!" },
	{ text: "Это про производительность,", highlightWord: "производительность" },
	{ text: "удобство использования", highlightWord: "удобство" },
	{ text: "и стильный интерфейс!", highlightWord: "стильный" },
	{ text: "Начни сегодня!", highlightWord: "сегодня!" },
	{ text: "Начни сейчас!", highlightWord: "сейчас!" }
];

let i = 0, j = 0;
let currentPhrase = "";
let isDeleting = false;
let isHighlighting = false;
let highlightProgress = 0;
const textElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

function typeWriter() {
	const fullText = phrases[i].text;
	const highlightWord = phrases[i].highlightWord;
	
	if (isHighlighting) {
		// Побуквенное выделение
		highlightProgress++;
		const highlightedPart = highlightWord.substring(0, highlightProgress);
		const remainingPart = highlightWord.substring(highlightProgress);
		
		const newText = fullText.replace(
			highlightWord,
			`<span class="highlight-partial">${highlightedPart}</span>${remainingPart}`
		);
		textElement.innerHTML = newText;
		
		if (highlightProgress >= highlightWord.length) {
			isHighlighting = false;
			cursorElement.style.display = "none";
			setTimeout(() => {
				isDeleting = true;
				highlightProgress = 0;
				cursorElement.style.display = "inline-block";
				typeWriter();
			}, 2000);
		} else {
			setTimeout(typeWriter, 100);
		}
		return;
	}
	
	if (isDeleting) {
		currentPhrase = fullText.substring(0, j - 1);
		j--;
	} else {
		currentPhrase = fullText.substring(0, j + 1);
		j++;
	}

	if (!isDeleting && j === fullText.length) {
		isHighlighting = true;
		typeWriter();
		return;
	} else if (isDeleting && j === 0) {
		isDeleting = false;
		i = (i + 1) % phrases.length;
	}

	textElement.textContent = currentPhrase;
	setTimeout(typeWriter, isDeleting ? 50 : 100);
}

typeWriter();

document.addEventListener('DOMContentLoaded', function() {
	const darkImg = document.getElementById('dark-theme');
	const lightImg = document.getElementById('light-theme');
	const toggleButton = document.getElementById('toggleButton');

	let currentTheme = 'light'; // Начинаем с темной темы
	let autoChangeInterval;

	// Функция переключения темы
	function toggleTheme() {
		if (currentTheme === 'dark') {
			// Переключаем на светлую
			darkImg.style.opacity = 0;
			lightImg.style.opacity = 1;
			currentTheme = 'light';
		} else {
			// Переключаем на темную
			darkImg.style.opacity = 1;
			lightImg.style.opacity = 0;
			currentTheme = 'dark';
		}
	}

	// Автоматическое переключение
	function startAutoChange() {
		autoChangeInterval = setInterval(toggleTheme, 5000);
	}

	// Запускаем автоматическое переключение
	startAutoChange();

	// Предзагрузка изображений
	function preloadImages() {
		const images = ['screenshot_dark.png', 'screenshot_light.png'];
		images.forEach(img => {
			const image = new Image();
			image.src = img;
		});
	}

	preloadImages();
});

// Переключение темы
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	
	// Сохраняем предпочтение в localStorage
	localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Обработка FAQ
document.querySelectorAll('.faq-question').forEach(question => {
	question.addEventListener('click', function() {
		const item = this.parentNode;
		const isOpening = !item.classList.contains('active');
		
		// Закрываем все открытые вопросы
		document.querySelectorAll('.faq-item.active').forEach(activeItem => {
			if (activeItem !== item) {
				activeItem.classList.remove('active');
			}
		});
		
		// Открываем/закрываем текущий вопрос
		item.classList.toggle('active', isOpening);
	});
});

// Быстрое закрытие при клике вне FAQ
document.addEventListener('click', (e) => {
	if (!e.target.closest('.faq-item') && !e.target.closest('.theme-toggle')) {
		document.querySelectorAll('.faq-item.active').forEach(item => {
			item.classList.remove('active');
		});
	}
});