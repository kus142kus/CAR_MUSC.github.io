// Создание слайдера
// Текущий слайд
// Переменная slideIndex со значением 1
let slideIndex = 1,
	//поиск элементов
	slides = document.querySelectorAll(".sliderNew-item"),
	prev = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	dotsWrap = document.querySelector(".sliderNew-dots"),
	dots = document.querySelectorAll(".dot");
showSlides(slideIndex);
// Функция показа слайдов, принимает аргумент номер слайда, который нужно показывать
function showSlides(n) {
	// доп проверка, чтобы индекс не вышел за пределы
	if (n > slides.length) {
		// возврат к первому слайду
		slideIndex = 1;
	}
	if (n < 1) {
		// возврат к последнему слайдц
		slideIndex = slides.length;
	}
	slides.forEach((item) => (item.style.display = "none"));
	dots.forEach((item) => item.classList.remove("dot-active"));
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("dot-active");
}
// Функция перелистывания слайдов
function plusSlides(n) {
	showSlides((slideIndex += n));
}
// Изображение текущего слайда
function currentSlide(n) {
	showSlides((slideIndex = n));
}
//Создание события "Клика"
prev.addEventListener("click", function () {
	plusSlides(-1);
});
next.addEventListener("click", function () {
	plusSlides(1);
});
// Создаем событие клика на родителя, используя делегирование событий
dotsWrap.addEventListener("click", function (event) {
	// перебираем все dot и узнаем на какую именно кликнули
	for (let i = 0; i < dots.length + 1; i++) {
		// проверяем элемент на соответствие и узнаем номер точки
		if (
			event.target.classList.contains("dot") &&
			event.target == dots[i - 1]
		) {
			currentSlide(i);
		}
	}
});

// Создание куки модальное окно
// Переменная, которую нельзя изменить
const cookies = document.getElementById("cookies");
	const cookiesBtn = document.getElementById("cookies__btn");

	cookiesBtn.addEventListener("click", function () {
		cookies.style.display = "none";
	});

// Создание табов
window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	// Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	// Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	// Скрываются все кроме 1 элемента
	hideTabContect(1);
	// Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	// Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			// Связь элементов при совпадении target
			for (let i = 0; i < tab.length; i++) {
				// если совпадают
				if (target == tab[i]) {
					// Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					// элементу target(на который кликнули) добавляем активный класс
					target.classList.add("active");

					// Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});

// Создание модального окна
	const modal = document.getElementById("modal");
	const btn = document.getElementById("open-modal__btn");
	const closeBtn = document.querySelector(".modal__close");

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");
			
			// Отключаем детектор событий
			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		//Закрытие при клике вне зоны модального окна
		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

// Создание аккордеона
	const accordion = () => {
		const btns = document.querySelectorAll(".accordion-head");
		const blocks = document.querySelectorAll(".accordion-block");

		blocks.forEach((block) => {
			block.classList.add("animate__animated", "animate__bounceInUp");
		});
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				if (!this.classList.contains("active-p")) {
					btns.forEach((btn) => {
						btn.classList.remove("active-p", "active-style");
					});
					this.classList.add("active-p", "active-style");
				} else
					btns.forEach((btn) => {
						btn.classList.remove("active-p", "active-style");
					});
			});
		});
	};
	accordion();


// Создание бургер меню
	// получаем иконку бургер меню
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	// Глубокое клонирование со всем содержимым
	const menu = document.querySelector("#menu").cloneNode(1);
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		// Вставка
		popup.appendChild(menu);
	}

});
