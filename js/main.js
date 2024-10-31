import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams } from "./utils.js";

const { products } = await getAll("products");
console.log(products);

const hotSaleSection = document.getElementById("hot-sale");

function render(target, datas) {
	datas.forEach((item) => {
		const productElement = document.createElement("div");
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

render(hotSaleSection, products);
// render(hotSaleSection, products);

const productId = getParams("id");
console.log(productId);

const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);
