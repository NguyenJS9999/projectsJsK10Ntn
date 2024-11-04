export function getParams(key) {
	console.log(window.location.search);
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
