import { inputSearchValue } from '../../src/components/componentHeader/componentHeader.js';
import { getAll } from './services.js';
import { renderBreacumb, render, getLocalStorage } from './utils.js';

const path = '/products';
const typeCategory = new URLSearchParams(window.location.search).get('category') || '';
const categoryTemplate = document.getElementById('category-template');
const breadcrumEle = document.getElementById('breadcrum');
const paginationList = document.getElementById('pagination-list');
const titleCategory = document.getElementById('title-category');
const headerStore = getLocalStorage('headerStore'); // !

let params = {
    limit: 10,
    skip: 0,
    sortBy: '',
    order: 'asc',
};
let arrProducts = [];
let currentPage = 1;

function updateUrlParams() {
    const url = new URL(window.location.href);
    if ( headerStore.searching ) {
        url.searchParams.set('limit', params.limit);
        url.searchParams.set('skip', params.skip);
        url.searchParams.set('sortBy', params.sortBy || '');
        url.searchParams.set('order', params.order || '');
    } else {
        url.searchParams.set('q', headerStore.valueInputSearch);
    }

    history.pushState({}, '', url); // Cập nhật URL mà không tải lại trang
}

// Fetch Products API
export async function getProduct() {
    let endpoint = '';
    // let endpoint = params.q
    //     ? `${path}/search`
    //     : `${path}/category/${typeCategory}`;

    if ( headerStore.searching ) {
        // https://dummyjson.com/products/search?q=phone
        params = {
            q: headerStore.valueInputSearch,
        }
        endpoint = `${path}/search`; // ?q=${headerStore.valueInputSearch}

    } else {
        endpoint = `${path}/category/${typeCategory}`
    }

    const { products } = await getAll(endpoint, params);
    arrProducts = products;

    // Render dữ liệu & phân trang
    render(categoryTemplate, arrProducts);
    renderPagination(arrProducts.length, params.limit);
}

// Render Pagination
function renderPagination(dataLength, itemsPerPage) {
    paginationList.innerHTML = ''; // Clear old pagination

    const totalPages = Math.ceil(dataLength / itemsPerPage);

    // Previous Button
    const previousItem = document.createElement('li');
    previousItem.classList.add('page-item');
    previousItem.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    previousItem.addEventListener('click', () => handlePageChange('previous'));
    paginationList.appendChild(previousItem);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item', currentPage === i ? 'active' : '');
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', () => handlePageChange(i));
        paginationList.appendChild(pageItem);
    }

    // Next Button
    const nextItem = document.createElement('li');
    nextItem.classList.add('page-item');
    nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
    nextItem.addEventListener('click', () => handlePageChange('next'));
    paginationList.appendChild(nextItem);
}

// Handle Page Change
function handlePageChange(action) {
    const totalPages = Math.ceil(arrProducts.length / params.limit);

    if (action === 'previous' && currentPage > 1) {
        currentPage -= 1;
    } else if (action === 'next' && currentPage < totalPages) {
        currentPage += 1;
    } else if (typeof action === 'number') {
        currentPage = action;
    }

    params.skip = (currentPage - 1) * params.limit;
    updateUrlParams(); // Update URL
    getProduct(); // Fetch data
}

// Change Items Per Page
const itemsPerPageSelect = document.getElementById('itemsPerPageSelect');
if (itemsPerPageSelect) {
    itemsPerPageSelect.addEventListener('change', (event) => {
        params.limit = parseInt(event.target.value, 10);
        currentPage = 1; // Reset to first page
        params.skip = 0;
        updateUrlParams(); // Update URL
        getProduct(); // Fetch data
    });
}

// Sort Logic
const btnSortElements = document.querySelectorAll('#btn-sort');
btnSortElements.forEach(button => {
    button.addEventListener('click', (event) => {
        const button = event.currentTarget;
        params.sortBy = button.name;
        params.order = button.value;
        currentPage = 1; // Reset to first page
        params.skip = 0;
        updateUrlParams(); // Update URL
        getProduct(); // Fetch data
    });
});

// Initial Render
if (titleCategory) {
    titleCategory.innerText = `Danh mục ${typeCategory}`.toUpperCase();
}
if (headerStore.searching) { renderBreacumb(breadcrumEle, 'Tìm kiếm')}
else {renderBreacumb(breadcrumEle, typeCategory);}

getProduct();
