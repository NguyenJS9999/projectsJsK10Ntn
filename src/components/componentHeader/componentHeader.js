
import { getProduct } from '../../../assets/js/category.js';
import { searchState  } from '../../../assets/js/stores/headerStore.js';
import { handleLocalStorage } from '../../../assets/js/utils.js';

const componentHeader = document.getElementById('header');

const headerElement = document.createElement('div');

async function renderUI() {
	headerElement.innerHTML = /*html*/ `
    <div class="header-top">
			<div class="header-top-inner">
			</div>
		</div>

		<div class="header-main">
			<div class="container">
				<div class="header-main-inner">

					<div class="header-logo">
						<a href="./index.html">
							Massage
						</a>
					</div>

					<div class="header-search-desktop">
						<div class="form-search-control">
							<div class="form-search">
								<span class="header-search-back d-lg-none d-xl-none">
									<i class="fa-light fa-xmark"></i>
								</span>
								<!-- <span class="header-search-icon"></span> -->
								<input
									autocomplete="off" type="text" name="search-all"
									class="form-control"
									placeholder="Nhập từ khoá tìm kiếm" id="search-all"
								>
								<button id="search-btn" class="search-btn" type="button">
									<i class="fa-solid fa-magnifying-glass"></i>
								</button>

							</div>
						</div>
					</div>
					<!-- https://toshiko.vn/gio-hang -->
					<div class="header-right-item" id="cart-item" >
						<a href="./src/pages/cart/cart.html">
							<span class="hri-icon">
								<i class="fa-solid fa-cart-arrow-down"></i>
								<span class="cart-qty">1</span>
							</span>
							<div class="hri-content">
								<!-- <span class="label"><span class="cart-qty">1</span> sản phẩm</span> -->
							</div>
						</a>
					</div>

					<div class="header-right-item" id="auth-item" >
						<a>
							<div class="hri-content">
								<i class="fa-regular fa-user"></i>
								<!-- <span class="label"><span class="cart-qty">1</span> sản phẩm</span> -->
							</div>
						</a>
					</div>


				</div>
			</div>
		</div>

		<div class="header-bottom">
			<div class="container">
				<div class="header-nav">
					<ul class="megamenu">
						<!-- megamenu-active -->
						<li class="item-category" data-category="smartphones" >
							<!-- <a href=" "><img src="" alt=""><span>Ghế massage</span></a> -->
							<!-- <a href="./category.html?category=smartphones">Smart Phones</a> -->
							Smart Phones
						</li>
						<li class="item-category" data-category="laptops" >
							<!-- <a href=" "><img src="" alt=""><span>Máy chạy bộ</span></a> -->
							<!-- <a href="./category.html?category=laptops">Laptops</a> -->
							Laptops
						</li>
						<li class="item-category" data-category="furniture" >
							<!-- <a href=" "><img src="" alt=""><span>Xe đạp tập</span></a> -->
							<!-- <a href="./category.html?category=furniture">Furniture</a> -->
							Furniture
						</li>
						<li class="item-category" data-category="groceries" >
							<!-- <a href=" "><img src="" alt=""><span>Thiết bị thể thao</span></a> -->
							<!-- <a href="./category.html?category=groceries">Groceries</a> -->
							Groceries
						</li>
						<!-- <li class="">
							<a href=" "><img src="" alt=""><span>Hệ thống Showroom</span></a>
						</li> -->
						<!-- <li class="">
							<a href=" "><img src="" alt=""><span>Liên hệ</span></a>
						</li> -->

					</ul>
				</div>
			</div>
		</div>
`;
	componentHeader.appendChild(headerElement);
}
await renderUI();

const arrCategory = [];
async function getListCategory () {
	arrCategory = await fetch('https://dummyjson.com/products/category-list')
}

// Logic click category điều hướng trang web
const itemCategoryElement = document.querySelectorAll('.item-category');
itemCategoryElement.forEach((tab) => {
	tab.addEventListener("click", handleCategoryClick);
});
function handleCategoryClick(event) {
    const category = event.currentTarget.getAttribute("data-category");
	searchState.urlHistory.push(window.location.href); // lưu url hiện tại
	searchState.searching = false;
	searchState.valueInputSearch= '',
	handleLocalStorage("headerStore", searchState); // đưa data search vào localstorage chống mất khi f5
	console.log('ở hàm handleCategoryClick ỉn ra category: ', category);
	console.log('ở hàm handleCategoryClick ỉn ra searchState: ', searchState);

	window.location.href = `./category.html?category=${category}`;
    // Thực hiện logic tìm kiếm hoặc gọi API tại đây với category và searchQuery
    // Ví dụ: getProductsByCategory(category, searchQuery);
}



const inputSearchAllElement = document.getElementById('search-all');
inputSearchAllElement.addEventListener('input', handleInput);
 // gán từ khóa tìm kiếm và đưa ra ngoài, ngay khi nhập liệu
function handleInput() {
	searchState.valueInputSearch = inputSearchAllElement.value;
}
// Click nút tìm kiến gọi hàm bên category gọi lại list vs trạng thái search vs url khác
const searchBtnElement = document.getElementById('search-btn');
searchBtnElement.addEventListener('click', handleSearchProduct); // gán vào nút và gọi Api trang khác, thay cờ trạng th


// Gọi lại API get product ở category chỉ riêng cho search
async function handleSearchProduct() {
	searchState.searching = true; // thay đổi thuộc tính trong đối tượng
	handleLocalStorage("headerStore", searchState);

	console.log('ở header in ra valueInputSearch ở heard:', searchState.valueInputSearch);
	console.log('ở header in ra handleSearchProduct window.location.href:', window.location.href);


	// Lưu URL hiện tại vào mảng
	searchState.urlHistory.push(window.location.href);
	console.log('ở header in ra searchState: ', searchState);

	// Điều hướng sang trang mới
	// 'https://dummyjson.com/products/search?q=phone'
	// ./category.html?category=laptops
	setTimeout( async() => {
		window.location.href = `./category.html`;
		await getProduct(inputSearchAllElement.value);
	}, 2000);
}
