/*
* Реализация функционала смены языка
* Разработчик: Владислав Баницкий
* Дата изменения: 
* Версия: 1.2
*/

const translations = {
    en: {
        "title": "PineappleOS is the operating system of the future today",
		"description_p": "Discover a new modern operating system based on Linux and combining lightness, performance, user-friendly and minimalistic interface. The PineappleOS logo is a juicy pineapple slice :)",
		"download_btn": "Download PineappleOS v.1.0",
		"faq_header": "Have you asked? We are responding!",
		"faq_q1": "Is PineappleOS a free operating system?",
		"faq_a1": "<p>Yes, and it contains open source code in the best traditions of the GNU GPL, so that everyone can customize the system for themselves or help in the development of the project.</p>",
		"faq_q2": "What are the PineappleOS system requirements?",
		"faq_a2": "<p><ul><li><strong>Processor</strong>: dual-core with a frequency of 1 GHz or higher.</li><li><strong>RAM</strong>: from 4 GB.</li><li><strong>Hard disk space</strong>: from 25 GB of free space.</li><li><strong>Video card</strong>: VGA with a screen resolution of 1024×768 and higher.</li></ul></p>",
		"faq_q3": "How do I get support?",
		"faq_a3": "<p>We support each other in our cozy community on GitHub.</p>",
		"faq_q4": "Who is the developer of PineappleOS?",
		"faq_a4": "<p>PineappleOS is a non—profit project that develops solely on the enthusiasm of its author in his spare time. In this regard, the entire responsibility for any damage caused by the use of PineappleOS, if any, is borne by the user of the system.</p>",
		"faq_q5": "How can I help with the development of PineappleOS?",
		"faq_a5": "<p>You can offer your ideas in our community on GitHub and put an asterisk <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\"version=\" 1.1\"width=\" 16\"data-view-component=\" true\"class=\" github-star\"><path d=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z\"></path></svg>.</p>",
		"faq_q6": "How do I install PineappleOS?",
		"faq_a6": "<p>Installing PineappleOS is no different from installing any other operating system:<ol><li>Loading the ISO image.</li><li>Creating a bootable USB flash drive using any convenient program, for example, via Rufus or Ventoy.</li><li>Booting from a USB flash drive via BIOS or Boot menu.</li><li>Installing the system with a disk wipe or next to an already installed Windows/Linux.</li></ol><strong>For stable operation of the system, it is recommended to install a system with an Internet connection.</strong></p>",
		"faq_q7": "The error Something went wrong appears during the system installation",
		"faq_a7": "<p><ul><li>Boot from the bootable USB flash drive again.</li><li>When the installer prompts you to connect to the Internet, do so.</li><li>If the installer offers to download the update for yourself, agree, then restart the installer.</li><li>If updates and third—party software (codecs, drivers) are offered, install everything, so there will be fewer problems in the future.</li></ul></p>",
		"faq_q8": "Another question",
		"faq_a8": "<p>Write to our community on GitHub — they will always support you here (the author of the project or other caring users).</p>",
		"phrase_1": "Hello, PineappleOS!",
		"highlight_1": "PineappleOS!",
		"phrase_2": "The system of the future!",
		"highlight_2": "future!",
		"phrase_3": "It's about performance,",
		"highlight_3": "performance",
		"phrase_4": "usability",
		"highlight_4": "usability",
		"phrase_5": "and a stylish interface!",
		"highlight_5": "stylish",
		"phrase_6": "Start today!",
		"highlight_6": "today!",
		"phrase_7": "Start now!",
		"highlight_7": "now!"
	},
    ru: {
        "title": "PineappleOS — операционная система будущего уже сегодня",
		"description_p": "Откройте для себя новую современную операционную систему, основанную на Linux и сочетающую в себе лёгкость, производительность, удобный и минималистичный интерфейс. Логотип PineappleOS — это сочная ананасовая долька :)",
		"download_btn": "Скачать PineappleOS v.1.0",
		"faq_header": "Спрашивали? Отвечаем!",
		"faq_q1": "PineappleOS — это бесплатная операционная система?",
		"faq_a1": "<p>Да, и содержит открытый исходный код в лучших традициях GNU GPL, благодаря чему каждый может настроить систему под себя или помочь в развитии проекта.</p>",
		"faq_q2": "Какие системные требования у PineappleOS?",
		"faq_a2": "<p><ul><li><strong>Процессор</strong>: двухъядерный с частотой 1 ГГц или выше.</li><li><strong>Оперативная память (RAM)</strong>: от 4 ГБ.</li><li><strong>Место на жёстком диске</strong>: от 25 ГБ свободного места.</li><li><strong>Видеокарта</strong>: VGA с разрешением экрана 1024×768 и выше.</li></ul></p>",
		"faq_q3": "Как получить поддержку?",
		"faq_a3": "<p>Мы поддерживаем друг друга в нашем уютном сообществе на GitHub.</p>",
		"faq_q4": "Кто разработчик PineappleOS?",
		"faq_a4": "<p>PineappleOS — это некоммерческий проект, развивающийся исключительно на энтузиазме его автора в свободное время. В связи с этим, вся ответственность за любой ущерб от использования PineappleOS, если такой возникнет, несёт пользователь системы.</p>",
		"faq_q5": "Как помочь в развитии PineappleOS?",
		"faq_a5": "<p>Можете предложить свои идеи в нашем сообществе на GitHub и поставить звёздочку <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"github-star\"><path d=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z\"></path></svg>.</p>",
		"faq_q6": "Как установить PineappleOS?",
		"faq_a6": "<p>Установка PineappleOS ничем не отличается от установки любой другой операционной системы:<ol><li>Загрузка ISO-образа.</li><li>Создание загрузочной флешки любой удобной программой, например через Rufus или Ventoy.</li><li>Загрузка с флешки через BIOS или Boot-меню.</li><li>Установка системы с затиранием диска или рядом с уже установленной Windows/Linux.</li></ol><strong>Для стабильной работы системы рекоммендуется устанавливать систему с подключением к интернету.</strong></p>",
		"faq_q7": "Во время установки системы появляется ошибка Something went wrong",
		"faq_a7": "<p><ul><li>Поновой загрузитесь с загрузочной флешки.</li><li>Когда установщик предложит подключиться к интернету — сделайте это.</li><li>Если установщик предложит скачать обновление для самого себя — соглашайтесь, далее, повторно запустите установщик.</li><li>Если будут предложены обновления и стронний софт (кодеки, драйвера) — всё устанавливайте, так будет меньше проблем в дальнейшем.</li></ul></p>",
		"faq_q8": "Другой вопрос",
		"faq_a8": "<p>Пишите в наше сообщество на GitHub — здесь всегда поддержат (автор проекта или другие неравнодушные пользователи).</p>",
		"phrase_1": "Привет, PineappleOS!",
		"highlight_1": "PineappleOS!",
		"phrase_2": "Система будущего!",
		"highlight_2": "будущего!",
		"phrase_3": "Это про производительность,",
		"highlight_3": "производительность",
		"phrase_4": "удобство использования",
		"highlight_4": "удобство",
		"phrase_5": "и стильный интерфейс!",
		"highlight_5": "стильный",
		"phrase_6": "Начни сегодня!",
		"highlight_6": "сегодня!",
		"phrase_7": "Начни сейчас!",
		"highlight_7": "сейчас!",
	}
};

function changeLanguage(language) {
    document.title = translations[language]["title"];
    document.getElementById("description_p").textContent = translations[language]["description_p"];
	document.getElementById("download_btn").textContent = translations[language]["download_btn"];
	document.getElementById("faq_header").textContent = translations[language]["faq_header"];
	document.getElementById("faq_q1").textContent = translations[language]["faq_q1"];
	document.getElementById("faq_a1").innerHTML = translations[language]["faq_a1"];
	document.getElementById("faq_q2").textContent = translations[language]["faq_q2"];
	document.getElementById("faq_a2").innerHTML = translations[language]["faq_a2"];
	document.getElementById("faq_q3").textContent = translations[language]["faq_q3"];
	document.getElementById("faq_a3").innerHTML = translations[language]["faq_a3"];
	document.getElementById("faq_q4").textContent = translations[language]["faq_q4"];
	document.getElementById("faq_a4").innerHTML = translations[language]["faq_a4"];
	document.getElementById("faq_q5").textContent = translations[language]["faq_q5"];
	document.getElementById("faq_a5").innerHTML = translations[language]["faq_a5"];
	document.getElementById("faq_q6").textContent = translations[language]["faq_q6"];
	document.getElementById("faq_a6").innerHTML = translations[language]["faq_a6"];
	document.getElementById("faq_q7").textContent = translations[language]["faq_q7"];
	document.getElementById("faq_a7").innerHTML = translations[language]["faq_a7"];
	document.getElementById("faq_q8").textContent = translations[language]["faq_q8"];
	document.getElementById("faq_a8").innerHTML = translations[language]["faq_a8"];
	phrases = [
	{ text: translations[language]["phrase_1"], highlightWord: translations[language]["highlight_1"] },
	{ text: translations[language]["phrase_2"], highlightWord: translations[language]["highlight_2"] },
	{ text: translations[language]["phrase_3"], highlightWord: translations[language]["highlight_3"] },
	{ text: translations[language]["phrase_4"], highlightWord: translations[language]["highlight_4"] },
	{ text: translations[language]["phrase_5"], highlightWord: translations[language]["highlight_5"] },
	{ text: translations[language]["phrase_6"], highlightWord: translations[language]["highlight_6"] },
	{ text: translations[language]["phrase_7"], highlightWord: translations[language]["highlight_7"] }
];
}

// Автоматическое определение языка браузера
if (Intl.DateTimeFormat().resolvedOptions().locale == "ru") {
    changeLanguage("ru");  // смена языка
    document.getElementById("lang_select").value = "ru";  // выбор в выпадающем списке
}
else {
    changeLanguage("en");  // смена языка
    document.getElementById("lang_select").value = "en";  // выбор в выпадающем списке
}

/* Обработчик для смена языка при выборе в выпадающем списке */
$('#lang_select').on('change', function (e) {
    changeLanguage(this.options[this.selectedIndex].value);
});