import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams, render } from "./utils.js";

const { products } = await getAll("products");
products.sort((a, b) => a.rating - b.rating)
const top5Products = products.slice(0, 5);
// console.log('hotSaleSection: products', products);
const hotSaleSection = document.getElementById("hot-sale-inner"); // rating
render(hotSaleSection, top5Products);


products.sort((a, b) => a.discountPercentage - b.discountPercentage)
const topfiveProdiscount = products.slice(0, 5);
console.log('hotSaleSection: topfiveProdiscount', topfiveProdiscount);
const discountPercentageSection = document.getElementById("discount-percentage-inner"); // discountPercentage
render(discountPercentageSection, topfiveProdiscount);

// const Section = document.getElementById("hot-sale-inner"); // meta



// render(hotSaleSection, products);

const productId = getParams("id");
const product = await getById("products", productId);


// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);


function getDetail() {
    window.location = "";
}