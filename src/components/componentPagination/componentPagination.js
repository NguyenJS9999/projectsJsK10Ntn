// import { changeSize, onPageChange } from '../../../assets/js/category.js';

const paginationElement = document.getElementById('pagination-component');
const paginationList = document.getElementById('pagination-list');


export function getberPagination(dataLength, itemsPerPage) {
	// console.log('getberPagination numPagination:', totalPages);
	// console.log(
	// 	'Math.ceil(dataLength / itemsPerPage);',
	// 	Math.ceil(dataLength / itemsPerPage)
	// );
	return Math.ceil(dataLength / itemsPerPage);
}


// Goij thay số phân trang
function handleChangePagination(i) {
	console.log('handleChangePagination i:', i);
	onPageChange(i);
}

export function renderPagination(dataLength, itemsPerPage) {
	console.log('renderPagination dataLength: ', dataLength);
	console.log('renderPagination itemsPerPage: ', itemsPerPage);
    if ( paginationList ) {
        // Xóa các phần tử cũ
        // paginationList.innerText = '';

        const numPagination = Math.ceil(dataLength / itemsPerPage);

        const paginationList = document.getElementById('pagination-list');
        paginationList.innerHTML = ''; // Xóa các phần tử cũ

        // Previous Button
        const previousItem = document.createElement('li');
        previousItem.classList.add('page-item');
        previousItem.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        previousItem.addEventListener('click', () => onPageChange('previous'));
        paginationList.appendChild(previousItem);

        // Page Numbers
        for (let i = 1; i <= numPagination; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item', currentPage === i ? 'active' : '');
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', () => onPageChange(i));
            paginationList.appendChild(pageItem);
        }

        // Next Button
        const nextItem = document.createElement('li');
        nextItem.classList.add('page-item');
        nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextItem.addEventListener('click', () => onPageChange('next'));
        paginationList.appendChild(nextItem);
    }

}

// Thay đổi size số trang sp 1 trang
const itemsPerPageEle = document.getElementById('itemsPerPageSelect');
if (itemsPerPageEle) {
    itemsPerPageEle.addEventListener('change', function (event) {
        changeSize(event.target.value);
    });
}

