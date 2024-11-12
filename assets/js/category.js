// Theo danh mục - category

import {
	getTotalPages,
	itemsPerPage,
	renderPagination
} from '../../src/components/componentPagination/componentPagination.js';
import { getAll } from './services.js';
import { getLocalStorage, getParams, render, renderBreacumb } from './utils.js';
const breadcrumEle = document.getElementById('breadcrum');
const categoryTemplate = document.getElementById('category-template');
const titleCategory = document.getElementById('title-category');

export function handleSearchProduct(event) {
	console.log('handleSearchProduct category event: ', event);
}
// const searchInput = searchInputHeader;

const basePath = 'products'; // Thêm path cho url the danh mục
const typeCategory = getParams('category');
export let arrProducts = [];

// API init
export async function getProduct() {
	// const pathString = buildProductUrlPath({ query: '', page, limit, sortBy, order });

	const headerStore = getLocalStorage('headerStore');
	console.log('getProduct headerStore : ', headerStore);
	console.log('basePath: ', basePath); // 1
	console.log('typeCategory: ', typeCategory); // 2

	// Khởi tạo URL với từ khóa tìm kiếm
	if (headerStore.searching) {
		console.log('headerStore.searching === true');
		const url = `${basePath}/search?q=${headerStore.valueInputSearch}`;
		console.log('in ra url truoc khi  search', url);
		// Loại bỏ dấu `/` ở cuối, nếu có
		const { products } = await getAll(url);
		console.log('https://dummyjson.com/products/search?q=phone products: ', products);
		arrProducts = products;
	} else {
		console.log('headerStore.searching === false');
		const { products } = await getAll(`${basePath}/category/${typeCategory}`); // ${typeCategory}

		// Tạo URL tìm kiếm sản phẩm
		// const pathString = buildProductUrlPath({ query, page, limit, sortBy, order });
		// Gọi API để lấy dữ liệu sản phẩm
		// console.log('sau khi xây url rồi thi được: ', pathString);
		// const { products } = await getAll(`${pathString}`);
		// console.log('url: ', `${basePath}/${param}`);
		// const { products } = await getAll(`${basePath}/${param}`);

		arrProducts = products;
	}
}
await getProduct();

async function getProduct2() {
    try {
        const headerStore = getLocalStorage('headerStore');
        console.log('getProduct headerStore : ', headerStore);

    } catch (error) {
		console.error('Error fetching products:', error);
    }
}
// await getProduct2();

// console.log('breadcrumEle: ', breadcrumEle);
renderBreacumb(breadcrumEle, typeCategory);

let contentFeildToSearch = ''; // Nội dung input tìm kiếm tương đối
let searchByFeild = 'title'; // Trường search Cố đinh tạm sau sẽ là title_like= '' &description_like=''
let sortField = ''; // Tên Trường sắp xếp
let sortOrder = 'asc'; // Thứ tự sắp xếp (asc hoặc desc)

// function buildURL({ page = 1, limit = 10, sort = "asc", search = "" } = {}) {
//     const url = new URL(baseURL);
//     const params = new URLSearchParams();
//
//     // Phân trang
//     params.append("skip", (page - 1) * limit); // Ví dụ: page 2, limit 5 -> skip = 5
//     params.append("limit", limit);
//
//     // Thêm tham số sắp xếp nếu cần
//     if (sort) params.append("sort", sort);
//
//     // Thêm tham số tìm kiếm nếu cần
//     if (search) params.append("q", search); // API của dummyjson dùng "q" cho tìm kiếm
//
//     url.search = params.toString();
//     return url.toString();
// }

// Logic lọc và sắp xếp-thay đổi giá trị của biến -> xây url
const btnSortElements = document.querySelectorAll('#btn-sort');
btnSortElements.forEach(button => {
	button.addEventListener('click', handSortType);
});
function handSortType(event) {
	const button = event.currentTarget;
	console.log('Button sort clicked! button.name: ', button.name);
	console.log('Button sort clicked! button.value: ', button.value);
}

// https://dummyjson.com/products/category/smartphones?sortBy=title&order=asc
function buildProductUrlPath({
	query = '', // Sễ chỉ chuyển sang tìm toàn sản phẩm
	page = 1,
	limit = 10,
	sortBy = '',
	order = 'asc'
} = {}) {
	// Tạo đối tượng URL từ base URL
	const baseUrl = `${basePath}`;
	const url = new URL(baseUrl);

	// Sử dụng URLSearchParams để quản lý các tham số truy vấn
	const params = new URLSearchParams();
	console.log('URLSearchParams: ', URLSearchParams());

	// 1. Tìm kiếm theo từ khóa
	if (query) {
		url.pathname += '/search';
		params.append('q', query);
	}

	// 2. Phân trang
	const skip = (page - 1) * limit;
	params.append('limit', limit);
	params.append('skip', skip);

	// 3. Sắp xếp
	if (sortBy) {
		params.append('sortBy', sortBy);
		params.append('order', order);
	}

	// Kết hợp các tham số vào URL
	url.search = params.toString();

	return url.toString();
}

// Ví dụ sử dụng hàm
// const url1 = buildProductUrlPath({ query: "phone" });
// console.log("Tìm kiếm theo từ khóa:", url1);
//
// const url2 = buildProductUrlPath({ page: 2, limit: 10 });
// console.log("Phân trang:", url2);
//
// const url3 = buildProductUrlPath({ sortBy: "title", order: "asc" });
// console.log("Sắp xếp:", url3);

// Lấy tổng số trang
const totalPages = getTotalPages(arrProducts.length, itemsPerPage);
// console.log('category totalPages:', totalPages);
// console.log(' arrProducts.length:', arrProducts.length);
// In ra các ui phân trang
renderPagination(totalPages);
export function handlePagination(i) {
	console.log('handlePagination i:', i);
}

// Đưa data và UI
// titleCategory.innerText = `Danh mục ${typeCategory}:`.toUpperCase();
render(categoryTemplate, arrProducts);
