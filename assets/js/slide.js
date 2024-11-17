const carouselInner = document.querySelector('.carousel-inner');
const processElement = document.querySelector('.process');
console.log('processElement: ', processElement, typeof processElement);

// const dataSlide = document.querySelectorAll('.slide');
// import dataSlide from './slideData.js';
// console.log('dataSlide: ', dataSlide, typeof dataSlide, dataSlide.length);

const dataSlide = [
	{
		id: 1,
		title: 'Super sale 1',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.',
		image: 'https://toshiko.vn/storage/files/Bannerweb/Si%C3%AAu%20sale%201920x800.jpg'
	},
	{
		id: 2,
		title: 'Super sale 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ratione?',
		image: 'https://toshiko.vn/storage/files/Bannerweb/banner-ghe-massage-toshiko-t9-pc.jpg'
	},
	{
		id: 3,
		title: 'Super sale 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.',
		image: 'https://toshiko.vn/storage/files/Bannerweb/Banner-ghe-massage-toshiko-t90-pc.jpg'
	},
];

const nextBtn = document.getElementsByClassName('next')[0];
const prevBtn = document.getElementsByClassName('prev')[0];

const slideLength = dataSlide.length;
let currentSlide = 0;

function renderDot() {
	for (let i = 0; i < slideLength; i++) {
		processElement.innerHTML += ` <div class="dot"></div> `;
	}
}
renderDot();

const dots = document.querySelectorAll('.dot');

dots.forEach((item, index) => {
	item.addEventListener('click', () => setSlideByDot(index));
});

function setSlideByDot(index) {
	currentSlide = index;
	console.log(dots[index]);
	renderSlide();
}

function renderSlide() {
	if (!Array.isArray(dataSlide)) {
		carouselInner.innerHTML = `Dũ liệu chưa đúng định dạng`;
		return false;
	}
	carouselInner.innerHTML = '';

	if (dataSlide) {
		dataSlide.forEach(item => {
			carouselInner.innerHTML += `
				<div class="slide-item">
					<img src="${item?.image}" alt="${item?.title}" />
				</div>
			`;
		});
	}

	if (dataSlide.length <= 0) {
		todosElement.innerText = `Hiện chưa có công việc`;
	}

	// Ẩn tất cả các slide
	const slides = document.querySelectorAll('.slide-item');
	slides.forEach(item => {
		item.style.display = 'none';
	});
	slides[currentSlide].style.display = 'block';

	dots.forEach(item => {
		item.style.background = 'white';
	});
	dots[currentSlide].classList.add('active');
}


function next() {
	console.log('next: ');

	currentSlide++;
	if (currentSlide >= slideLength) {
		currentSlide = 0;
	}
	renderSlide();
}

function prev() {
	console.log('prev: ');
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slideLength - 1;
	}
	renderSlide();
}

setInterval(function renderSlide() {
	next();
}, 4000);

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

renderSlide();

/**
 * Bước 1:
 * - Khai báo 1 biến để lưu slide hiện tại (slide đang được hiển thị): currentSlide
 * - Khai báo 1 hàm để cập nhật slide khi có sự kiện.
 *
 * Bước 2:
 * - Xử lý từng sự kiện next, prev
 *
 * Bước 3:
 * - Xử lý trường hợp cuộn đến cuối hoặc đầu.
 *
 * Bước 4: Xử lý thanh process.
 */
