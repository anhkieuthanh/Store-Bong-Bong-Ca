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
    //Bổ sung các sản phẩm Play-Ah Không Sẵn Hàng
    { id: 9, name: "Play-Ah ôm sát True Fit (Hộp 3c) - Không sẵn", category: "play-ah", type: "true-fit", price: 38000, image: "product_pics/9.png", features: ["Hãng: Play-Ah", "Loại: Ôm sát True Fit - 49mm", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 10, name: "Play-Ah Khổng Lồ (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 62000, image: "product_pics/10.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng - 55mm", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 11, name: "Play-Ah Gel Rainbow Nhiều Gel (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 67000, image: "product_pics/11.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 12, name: "Play-Ah Gel Basic 100ml - Không sẵn", category: "play-ah", type: "gel", price: 135000, image: "product_pics/12.png", features: ["Hãng: Play-Ah", "Loại: Gel", "Độ dày: N/A", "Quy cách: 100ml"] },
    { id: 13, name: "Play-Ah Her Feel Siêu Mỏng Cao cấp (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 79000, image: "product_pics/13.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 14, name: "Play-Ah Her Feel HA Siêu Mỏng Cao cấp (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 87000, image: "product_pics/14.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng kèm Gel HA", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 15, name: "Play-Ah Gel HA 70ml - Không sẵn", category: "play-ah", type: "gel", price: 155000, image: "product_pics/15.png", features: ["Hãng: Play-Ah", "Loại: Gel", "Độ dày: N/A", "Quy cách: 70ml"] },
    { id: 16, name: "Play-Ah Her Feel Warm Sensation Siêu Mỏng Cao cấp (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 87000, image: "product_pics/16.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng ấm", "Độ dày: 0.035mm", "Quy cách: 3 chiếc"] },
    { id: 17, name: "Play-Ah Non-Latex (Hộp 3c) - Không sẵn", category: "play-ah", type: "sieu-mong", price: 229000, image: "product_pics/17.png", features: ["Hãng: Play-Ah", "Loại: Siêu mỏng", "Độ dày: 0.01mm", "Quy cách: 3 chiếc"] },
    { id: 18, name: "Play-Ah Gel kích thích 70ml - Không sẵn", category: "play-ah", type: "gel", price: 199000, image: "product_pics/18.png", features: ["Hãng: Play-Ah", "Loại: Gel", "Độ dày: N/A", "Quy cách: 70ml"] },
    //Bổ sung các sản phẩm Sagami
    { id: 19, name: "Gel bôi trơn Sagami Original - Không sẵn", category: "sagami", type: "gel", price: 196000, image: "product_pics/19.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: N/A", "Quy cách: Tuýp 60g"] },
    { id: 20, name: "Sagami Love Me Gold cao su tự nhiên (Hộp 10c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/20.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.03mm", "Quy cách: 10 chiếc"] },
    { id: 21, name: "Sagami Love Orange cao su tự nhiên (Hộp 10c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/21.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.03mm", "Quy cách: 10 chiếc"] },
    // { id: 22, name: "Sagami Original 0.02 (Hộp 3c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/22.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 23, name: "Sagami Original 0.02 (Hộp 3c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/23.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 24, name: "Sagami Original 0.02 (Hộp 3c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/24.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 25, name: "Sagami Original 0.02 (Hộp 3c) - Không sẵn", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/25.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 26, name: "Sagami Original 0.02 (Hộp 3c)", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/26.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 27, name: "Sagami Original 0.02 (Hộp 3c)", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/27.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 28, name: "Sagami Original 0.02 (Hộp 3c)", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/28.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
    // { id: 29, name: "Sagami Original 0.02 (Hộp 3c)", category: "sagami", type: "sieu-mong", price: 79000, image: "product_pics/29.jpg", features: ["Hãng: Sagami", "Loại: Original", "Độ dày: 0.02mm", "Quy cách: 3 chiếc"] },
];
