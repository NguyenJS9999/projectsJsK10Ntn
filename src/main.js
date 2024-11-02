import { getAll, getById, removeById, updateById } from './services/product.js';
import { getParams } from './util/getParams.js';
import AppElement from './app.js';

// C:\Users\Nguyen\Documents\F88\+ K10\home-work\projectsJsK10Ntn\src\services\services.js
const { products } = await getAll('products');
console.log(products);

const hotSaleSection = document.getElementById('section-hot-sale');

function render2(target, datas) {
	datas.forEach(item => {
		const productElement = document.createElement('div');
		productElement.innerHTML = /*html*/ `
        <div class="product-card">
          <a href='/product-detail.html?id=${item.id}'><img src="${item.thumbnail}" alt="${item.title}" /></a>
          <div class="product-infor">
            <h2>${item.title}</h2>
            <div>Giá: ${item.price}</div>
            <p>Mô tả: ${item.description}</p>
            <button>Xem chi tiết</button>
          </div>
        </div>
    `;
		target && target.appendChild(productElement);
	});
}

render2(hotSaleSection, products);
// render(hotSaleSection, products);

const productId = getParams('id');
console.log('productId: ', productId);

const product = await getById('products', productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);

/**
 * Mổ tả:
 * Chưa các hàm tái sử dụng, truy vấn phần tử, Gọi API, đỏ dữ liệu
 */

const rootElement = document.getElementById('root');

if (rootElement) {
	rootElement.innerHTML = AppElement;
} else {
	rootElement.innerHTML = `<h1>Không nội dung App</h1>`;
}

function render(htmlContent) {
	const rootElement = document.getElementById('root');
	if (rootElement) {
		rootElement.innerHTML = htmlContent;
	} else {
		console.error("Không tìm thấy phần tử với id 'root'");
	}
}

render(AppElement());
