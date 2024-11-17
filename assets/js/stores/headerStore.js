
export let globalState = {
    urlHistory: [], // Mảng lưu lịch sử các URL
    searching: false, // Trạng thái cờ của chức năng search, hoạt động độc lập
    valueInputSearch: '',
};


// // Lưu URL hiện tại vào mảng
// urlHistory.push(window.location.href);
//
// // Điều hướng tới URL mới
// history.pushState({}, "", "http://www.example.com");
//
// // Kiểm tra mảng URL
// console.log(urlHistory);
// // Quay lại trang trước
// history.back();
// // Hoặc dùng history.go(-1)
// history.go(-1);
