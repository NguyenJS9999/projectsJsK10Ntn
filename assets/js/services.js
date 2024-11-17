
const baseUrl = 'https://dummyjson.com';

// https://dummyjson.com/products/category-list
async function getAllCategory(path) {
	try {
		const endUrl = new URL(`${baseUrl}/${path}`);
		const res = await fetch(endUrl);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function getAll1(path, params) {
	console.log('Gọi hàm getAll path:', path, typeof path);
	// Xây dựng URL đầy đủ
	const endUrl = new URL(`${baseUrl}/${path}`);
	console.log('URL API endUrl:', endUrl); // Để kiểm tra URL được tạo ra

	try {
		// showLoading()
		const res = await fetch(endUrl.toString());
		console.log('Gọi hàm getAll res:', res, typeof res);

		if (!res.ok) {
			// hideLoading();
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		// hideLoading();
		return data;
	} catch (error) {
		console.log('Lỗi trong hàm getAll:', error);
	}
}

async function getAll(path, params) {
	// console.log('Gọi hàm chung getAll path:', path, typeof path);
	// console.log('Gọi hàm chung getAll params:', params, typeof params);

	try {
		// Tạo URL bằng cách kết hợp baseUrl và path
		const url = new URL(`${baseUrl}${path}`);

		// Tạo URLSearchParams để thêm các tham số vào URL
		const searchParams = new URLSearchParams(params);

		// Gán chuỗi truy vấn cho URL
		url.search = searchParams.toString();
		console.log('Gọi hàm chung getAll url.search:', url, typeof url);


        const response = await fetch(url);
        if (!response.ok) throw new Error('Lỗi khi gọi API');

        return await response.json();
    } catch (error) {
        console.error('Lỗi khi gọi getAll:', error);
        return null;
    }
}

async function getById(path, id) {
	try {
		const endUrl = new URL(`${baseUrl}/${path}/${id}`);
		const res = await fetch(endUrl);
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

export { getAllCategory, getAll, getById, create, updateById, removeById };
