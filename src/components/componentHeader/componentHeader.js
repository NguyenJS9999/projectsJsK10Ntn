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
							<!-- <img src="https://toshiko.vn/storage/images/Logo/logo-toshiko-08.png" alt="header logo"> -->
							Massage
						</a>
					</div>

					<div class="header-search-desktop">
						<div class="form-search-control">
							<form class="form-search" method="GET" action="https://toshiko.vn/search">
								<span class="header-search-back d-lg-none d-xl-none">
									<i class="fa-light fa-xmark"></i>
								</span>
								<!-- <span class="header-search-icon"></span> -->
								<input autocomplete="off" type="text" name="search-all" class="form-control"
									placeholder="Nhập từ khoá tìm kiếm" id="search-all">
								<button class="search-btn" type="button">
									<i class="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>
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
						<li class="  ">
							<!-- <a href=" "><img src="" alt=""><span>Ghế massage</span></a> -->
							<a href="./category.html?category=smartphones">Smart Phones</a>
						</li>
						<li class="">
							<!-- <a href=" "><img src="" alt=""><span>Máy chạy bộ</span></a> -->
							<a href="./category.html?category=laptops">Laptops</a>
						</li>
						<li class="">
							<!-- <a href=" "><img src="" alt=""><span>Xe đạp tập</span></a> -->
							<a href="./category.html?category=furniture">Furniture</a>
						</li>
						<li class="">
							<!-- <a href=" "><img src="" alt=""><span>Thiết bị thể thao</span></a> -->
							<a href="./category.html?category=groceries">Groceries</a>
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

console.log('File: componentHeader');
const inputSearchAllElement = document.getElementById('search-all');
console.log('inputSearchAllElement: ', inputSearchAllElement);
