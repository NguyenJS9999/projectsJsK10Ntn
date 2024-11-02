## Cấu trúc giống dự án reactjs
Chi tiết từng thư mục
assets/: Tập trung các tài nguyên tĩnh (hình ảnh, icon, font).

css/: CSS được chia làm hai phần:

main.css: File CSS chính, chứa những kiểu chung dùng cho toàn bộ dự án.
components/: CSS của từng thành phần, giúp dễ dàng quản lý và tái sử dụng kiểu dáng (ví dụ: header.css dành cho phần đầu trang, product-card.css cho thẻ sản phẩm, và modal.css cho các modal).
js/:

api/: Thư mục chứa các file xử lý API, ví dụ như productApi.js quản lý các gọi API cho sản phẩm, giúp code ngăn nắp hơn.
components/: Tập hợp các thành phần giao diện tái sử dụng, mỗi file trong đây sẽ là một thành phần nhỏ trong giao diện, như header.js cho phần đầu trang, productCard.js cho thẻ sản phẩm, và modal.js cho các modal.
pages/: Mã JavaScript cho từng trang cụ thể như home.js (trang chủ) và shop.js (trang cửa hàng). Mỗi file quản lý logic và nội dung riêng cho từng trang.
main.js: Điểm khởi đầu chính để chạy JavaScript của ứng dụng, dùng để kết nối các thành phần khác.
Cách hoạt động
main.js: Đây sẽ là file gốc để khởi chạy dự án. Bạn có thể import các thành phần từ components/ và logic cho từng trang từ pages/.

Tái sử dụng component: Các component trong components/ giúp bạn viết mã một lần và dùng lại ở các trang. Ví dụ: productCard.js có thể được dùng lại ở cả home.js và shop.js.

CSS cho component: Để CSS không bị lẫn, mỗi thành phần có CSS riêng trong components/ để dễ dàng quản lý và chỉnh sửa giao diện.

Chạy dự án
Vẫn như trước, bạn có thể dùng JSON Server và lite-server:

bash
Sao chép mã
# Chạy JSON Server
json-server --watch db.json --port 3000

# Khởi động lite-server cho frontend
npm start
Cấu trúc này giúp bạn có một dự án dễ bảo trì hơn khi làm việc với HTML, CSS, và JavaScript thuần, đồng thời vẫn tổ chức mã rõ ràng và dễ phát triển tiếp.