import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams, render } from "./utils.js";

// 2 - Phần top 5 sp bán chạy Lớn đến Bé
const { products } = await getAll("/products");
products.sort((a, b) => b.rating - a.rating)
const top5Products = products.slice(0, 5);
// console.log('hotSaleSection: products', products);
const hotSaleSection = document.getElementById("highly-rated-inner"); // rating
render(hotSaleSection, top5Products);

// 2 - Phần top 5 sp giảm giá % giảm giá cao nhất
products.sort((a, b) => b.discountPercentage - a.discountPercentage)
const topfiveProdiscount = products.slice(0, 5);
console.log('hotSaleSection: topfiveProdiscount', topfiveProdiscount);
const discountPercentageSection = document.getElementById("discount-percentage-inner"); // discountPercentage
render(discountPercentageSection, topfiveProdiscount);

// 3 - Phần top 5 sp được bảo hành lâu nhất warrantyInformation
products.sort((a, b) => b.warrantyInformation - a.warrantyInformation)
const top5ProductsWarrantyDuration = products.slice(0, 5);
const newArrivalsSection = document.getElementById("new-arrivals-inner"); // meta
render(newArrivalsSection, top5ProductsWarrantyDuration);

// Lấy id trên url
// const productId = getParams("id");
// const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
// console.log(product);


function getDetail() {
    window.location = "";
}