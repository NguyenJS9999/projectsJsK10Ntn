import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams, render } from "./utils.js";

const { products } = await getAll("products");
console.log(products);

const hotSaleSection = document.getElementById("hot-sale");

render(hotSaleSection, products);
// render(hotSaleSection, products);

const productId = getParams("id");

const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);
