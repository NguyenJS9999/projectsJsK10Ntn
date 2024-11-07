import { getTotalPages, itemsPerPage, renderPagination } from '../../src/components/componentPagination/componentPagination.js';
import { getAll } from './services.js';
import { getParams, render } from './utils.js';
// Theo danh mục

const baseURL = `products/category/`;
export let arrProducts = [];
const param = getParams('category');
async function initGetProductByCategory() {
	const { products } = await getAll(`products/category/${param}`);
    arrProducts = products;
};
await initGetProductByCategory()


const baseUrl = `http://localhost:3000/todos`;
let contentFeildToSearch = ""; // Nội dung input tìm kiếm tương đối
let searchByFeild = 'title' // Trường search Cố đinh tạm sau sẽ là title_like= '' &description_like=''
let sortField = ""; // Tên Trường sắp xếp
let sortOrder = "asc"; // Thứ tự sắp xếp (asc hoặc desc)

function buildURL({ page = 1, limit = 10, sort = "asc", search = "" } = {}) {
    const url = new URL(baseURL);
    const params = new URLSearchParams();

    // Phân trang
    params.append("skip", (page - 1) * limit); // Ví dụ: page 2, limit 5 -> skip = 5
    params.append("limit", limit);

    // Thêm tham số sắp xếp nếu cần
    if (sort) params.append("sort", sort);

    // Thêm tham số tìm kiếm nếu cần
    if (search) params.append("q", search); // API của dummyjson dùng "q" cho tìm kiếm

    url.search = params.toString();
    return url.toString();
}


const totalPages = getTotalPages(arrProducts.length, itemsPerPage);
console.log('category totalPages:', totalPages);
console.log(' arrProducts.length:', arrProducts.length);

renderPagination(totalPages);
export function handlePagination(i) {
    console.log('handlePagination i:', i);
}

// Đưa data và UI
const categoryTemplate = document.getElementById('category-template');
const titleCategory = document.getElementById('title-category');
titleCategory.innerText = `${param}:`.toUpperCase();

render(categoryTemplate, arrProducts);

