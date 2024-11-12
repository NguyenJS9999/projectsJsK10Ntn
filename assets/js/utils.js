export function getParams(key) {
	// console.log(window.location.search);
	const params = new URLSearchParams(window.location.search);
	return params.get(key);
}

export function render(target, datas) {
	datas.forEach(item => {
		const productElement = document.createElement('div');
		productElement.innerHTML = /*html*/ `
        <div class="product-item">
            <a href='/product-detail.html?id=${item.id}'>
                <img src="${item.thumbnail}" alt="${item.title}" />
            </a>
            <div class="product-infor">
                <div class="prd-name shorten-text-two-line ">${item.title}</div>
                <div class="prd-price shorten-text-two-line ">
                    <span>Giá: </span>
                    <span>${item.price}$</span>
                </div>
                <p class="prd-description shorten-text-two-line ">Mô tả: ${item.description}</p>

                <button id="get-detail" class="btn btn-danger" onclick="getDetail()" >Xem chi tiết</button>

            </div>
        </div>
    `;
		target && target.appendChild(productElement);
	});
}


export function renderBreacumb(target, data) {
    // console.log("renderBreacumb target: ", target, typeof target);
    // console.log("renderBreacumb data: ", data, typeof data);
    const breacumbInner = document.createElement('div');
    breacumbInner.classList.add('container');
    if (typeof data === 'string') {
        // console.log("Giá trị là một chuỗi.");

        breacumbInner.innerHTML = /*html*/ `
        <ul>
            <li><a href="./"><i class="fa-solid fa-house"></i> Trang chủ</a></li>
            <li><i class="fa-solid fa-chevron-right"></i></li>
            <li><a href="./category.html?category=${data}" class="text-capitalize">
                ${data}</a></li>
            </ul>
      `;
        target.appendChild(breacumbInner);

    }
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        // console.log("Giá trị là một object, không phải là mảng.");

        breacumbInner.innerHTML = /*html*/ `
        <ul>
            <li><a href="./"><i class="fa-solid fa-house"></i> Trang chủ</a></li>
            <li><i class="fa-solid fa-chevron-right"></i></li>
            <li><a href="./category.html?category=${data?.smartphones}" class="text-capitalize">
                ${data?.category}</a></li>
            <li><i class="fa-solid fa-chevron-right"></i></li>
            <li><span class="text-lowercase text-capitalize">${data?.title}</span></li>
        </ul>
      `;
        target.appendChild(breacumbInner);
    }

}; // IIFE

export function handleLocalStorage( nameArrTodo, data) {
	console.log('handleLocalStorage');
	if (data) {
		localStorage.setItem(`${nameArrTodo}`, JSON.stringify(data));
	}
}

export function getLocalStorage(nameArrTodo) {
	console.log('getLocalStorage');
	const todosData = JSON.parse( localStorage.getItem(`${nameArrTodo}`) );
	if (todosData) {
		return todosData;
	} else {
		return [];
	}
}