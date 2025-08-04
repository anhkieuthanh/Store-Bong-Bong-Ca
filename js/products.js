// Tệp này chỉ chứa dữ liệu về sản phẩm.
// Việc tách riêng dữ liệu giúp bạn dễ dàng cập nhật danh mục sản phẩm 
// mà không cần phải động đến code xử lý logic của trang web.

const products = [
    { id: 1, name: "Sagami Original 0.01 (Hộp 5c)", category: "sagami", type: "sieu-mong", price: 599000, image: "product_pics/1.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.01 mm", "Quy cách: 5 chiếc"] },
    { id: 2, name: "Sagami Original 0.02 (Hộp 2c)", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/2.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02 mm", "Quy cách: 2 chiếc"] },
    { id: 3, name: "Sagami Original 0.02 (Hộp 6c)", category: "sagami", type: "sieu-mong", price: 249000, image: "product_pics/3.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02 mm", "Quy cách: 6 chiếc"] },
    { id: 4, name: "Sagami Original 0.02 (Hộp 12c)", category: "sagami", type: "sieu-mong", price: 449000, image: "product_pics/4.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02 mm", "Quy cách: 12 chiếc"] },
    { id: 5, name: "Play-Ah Last Long (Hộp 3c)", category: "play-ah", type: "keo-dai", price: 62000, image: "product_pics/5.jpg", features: ["Hãng: Play-Ah", "Loại: Last Long", "Độ dày: 0.04mm", "Quy cách: 3 chiếc"] },
    { id: 6, name: "Play-Ah Siêu mỏng (Hộp 3c)", category: "play-ah", type: "sieu-mong", price: 54000, image: "product_pics/6.jpg", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 7, name: "Play-Ah Siêu mỏng (Hộp 10c)", category: "play-ah", type: "sieu-mong", price: 150000, image: "product_pics/7.jpg", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng", "Độ dày: 0.035mm", "Quy cách: 10 chiếc"] },
    { id: 8, name: "Play-Ah Có gai (Hộp 3c)", category: "play-ah", type: "gai", price: 54000, image: "product_pics/8.jpg", features: ["Hãng: Play-Ah", "Loại: Có gai", "Độ dày: N/A", "Quy cách: 3 chiếc"] },
];
