
import { getProduct } from '../../../assets/js/category.js';
import { getAllCategory } from '../../../assets/js/services.js';
import { globalState  } from '../../../assets/js/stores/headerStore.js';
import { getLocalStorage, handleLocalStorage } from '../../../assets/js/utils.js';

const componentHeader = document.getElementById('header');

async function renderUI() {
	const headerElement = document.createElement('div');
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

export const inputSearchAllElement = document.getElementById('search-all');
const searchBtnElement = document.getElementById('search-btn');
const headerStore = getLocalStorage('headerStore'); // !


// function initGlobalState() {
// 	const oldData = {...globalState};
// 	handleLocalStorage("headerStore", globalState); // khỏi tạo galabal state vào local
//
// }
// initGlobalState();

const arrCategory = [];
async function getListCategory () {
	const result = await getAllCategory('products/category-list')
	// console.log('getListCategory arrCategory: ', result);
}
getListCategory();

// Logic click category điều hướng trang web
const itemCategoryElement = document.querySelectorAll('.item-category');
itemCategoryElement.forEach((tab) => {
	tab.addEventListener("click", handleCategoryClick);
});
function handleCategoryClick(event) {
    const category = event.currentTarget.getAttribute("data-category");

	globalState.urlHistory = headerStore.urlHistory;
	(globalState.urlHistory).push(window.location.href); // lưu url hiện tại
	globalState.searching = false;
	globalState.valueInputSearch= '',
	handleLocalStorage("headerStore", globalState); // lưu storage trc lúc chuyển trang trc lúc chuyển trang

	console.log('ở hàm handleCategoryClick ỉn ra category: ', category);
	console.log('ở hàm handleCategoryClick ỉn ra globalState: ', globalState);
	window.location.href = `./category.html?category=${category}`;
    // Thực hiện logic tìm kiếm hoặc gọi API tại đây với category và searchQuery
    // Ví dụ: getProductsByCategory(category, searchQuery);
}


// Ô SEARCH
inputSearchAllElement.addEventListener('input', handleInput);
// Gán lại ô search sau tải lại lúc chuyển trang
// inputSearchAllElement.value = headerStore.valueInputSearch || '';
export let inputSearchValue = inputSearchAllElement.value

// gán từ khóa tìm kiếm và đưa ra ngoài, ngay khi nhập liệu
function handleInput(event) {
	globalState.valueInputSearch = event.target.value; // Change input
	console.log('handleInput globalState: ', globalState);
	
	handleLocalStorage("headerStore", globalState); // lưu storage trc lúc chuyển trang
	console.log('handleInput headerStore: ', headerStore);
}
inputSearchAllElement.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
	  handleSearchProduct();
	}
});

// Click nút tìm kiến gọi hàm trang category gọi lại list vs trạng thái search vs url khác
searchBtnElement.addEventListener('click', handleSearchProduct);
// Gọi lại API get product ở category chỉ riêng cho search,  thay cờ trạng thái
async function handleSearchProduct() {

	globalState.valueInputSearch = headerStore.valueInputSearch;
	globalState.searching = true
	globalState.urlHistory = headerStore.urlHistory; // Lấy arr url quá khứ
	(globalState.urlHistory).push(window.location.href); // lưu url hiện tại
	console.log('ở header in ra globalState: ', globalState);

	handleLocalStorage("headerStore", globalState); // lưu storage trc lúc chuyển trang

	// Điều hướng sang trang mới
	// 'https://dummyjson.com/products/search?q=phone'
	// ./category.html?category=laptops
	setTimeout( async() => {
		window.location.href = `./category.html`;
		await getProduct(inputSearchAllElement.value);
		const url = new URL(window.location.href);
		url.searchParams.set('q', inputSearchAllElement.value);
 		// Cập nhật URL trên thanh địa chỉ không tải lại trang
		history.pushState({}, '', url);
	}, 500);


}
