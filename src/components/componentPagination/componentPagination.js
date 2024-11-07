import { handlePagination } from "../../../assets/js/category.js";

const paginationElement = document.getElementById('pagination-component');
const paginationList = document.getElementById('pagination-list');

export const itemsPerPage = 10; // Số bản ghi 1 trang

export function getTotalPages(dataLength, itemsPerPage) {
	console.log(
		'Math.ceil(dataLength / itemsPerPage);',
		Math.ceil(dataLength / itemsPerPage)
	);
	return Math.ceil(dataLength / itemsPerPage);
}

function callBackHandlePagination(i) {
    console.log('callBackHandlePagination i:', i);
    handlePagination(i);
}

export function renderPagination(totalPages) {
	console.log('renderPagination totalPages: ', totalPages);

	// Xóa các phần tử cũ
    paginationList.innerHTML = "";

    // Thêm nút "Previous"
    const previousItem = document.createElement('li');
    previousItem.classList.add('page-item');
    previousItem.innerHTML = `<a class="page-link" href="#" value="previous">Previous</a>`;
    paginationList.appendChild(previousItem);

    // Thêm sự kiện click cho "Previous"
    previousItem.addEventListener('click', () => {
        callBackHandlePagination('previous');
    });

    // Tạo các nút số trang
    for (let i = 1; i <= totalPages; i++) {
        let pageItem = document.createElement('li');
        pageItem.classList.add('page-item');

        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = "#";
        pageLink.setAttribute('value', i);
        pageLink.textContent = i;

        // Thêm sự kiện click cho từng nút số trang
        pageLink.addEventListener('click', () => callBackHandlePagination(i));

        pageItem.appendChild(pageLink);
        paginationList.appendChild(pageItem);
    }

    // Thêm nút "Next"
    const nextItem = document.createElement('li');
    nextItem.classList.add('page-item');
    nextItem.innerHTML = `<a class="page-link" href="#" value="next">Next</a>`;
    paginationList.appendChild(nextItem);

    // Thêm sự kiện click cho "Next"
    nextItem.addEventListener('click', () => {
        callBackHandlePagination('next');
    });
}
