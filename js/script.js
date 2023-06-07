let slideIndex = 1,
	slides = document.querySelectorAll(".sliderNew-item"),
	prev = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	dotsWrap = document.querySelector(".sliderNew-dots"),
	dots = document.querySelectorAll(".dot");
showSlides(slideIndex);
function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	slides.forEach((item) => (item.style.display = "none"));
	dots.forEach((item) => item.classList.remove("dot-active"));
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("dot-active");
}
function plusSlides(n) {
	showSlides((slideIndex += n));
}
function currentSlide(n) {
	showSlides((slideIndex = n));
}
prev.addEventListener("click", function () {
	plusSlides(-1);
});
next.addEventListener("click", function () {
	plusSlides(1);
});
dotsWrap.addEventListener("click", function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (
			event.target.classList.contains("dot") &&
			event.target == dots[i - 1]
		) {
			currentSlide(i);
		}
	}
});


const cookies = document.getElementById("cookies");
	const cookiesBtn = document.getElementById("cookies__btn");

	cookiesBtn.addEventListener("click", function () {
		cookies.style.display = "none";
	});


window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	hideTabContect(1);
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContect(0);
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					target.classList.add("active");

					ShowTabContect(i);

					break;
				}
			}
		}
	});

	const modal = document.getElementById("modal");
	const btn = document.getElementById("open-modal__btn");
	const closeBtn = document.querySelector(".modal__close");

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});


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
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	const menu = document.querySelector("#menu").cloneNode(1);
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		popup.appendChild(menu);
	}
});
