const baseUrl = 'https://dummyjson.com';

async function getAllCategory() {
	try {
		const res = await fetch(`${baseUrl}/${path}/${params}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function getAll(path = '', params = '') {
	console.log('Gọi hàm getAll path:', path, typeof path);
	console.log('Gọi hàm getAll params:', params, typeof params);

	// Tạo URL bằng `URL` để quản lý đường dẫn và tham số
	const endUrl = new URL(`${baseUrl}/${path}`);
	if (params) {
		endUrl.search = new URLSearchParams(params).toString();
	}

	console.log('ở getAll in ra endUrl:', endUrl.toString());

	try {
		const res = await fetch(endUrl.toString());
		console.log('Gọi hàm getAll res:', res, typeof res);

		// Kiểm tra lỗi từ response (ví dụ: 404 hoặc lỗi khác)
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Lỗi trong hàm getAll:', error);
	}
}

async function getById(path, id) {
	try {
		const res = await fetch(`${baseUrl}/${path}/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function updateById(path, id, body) {
	try {
	} catch (error) {
		console.log(error);
	}
}

async function create(path, body) {
	try {
	} catch (error) {
		console.log(error);
	}
}

async function removeById(path, id) {
	try {
	} catch (error) {
		console.log(error);
	}
}

export { getAll, getById, create, updateById, removeById };
