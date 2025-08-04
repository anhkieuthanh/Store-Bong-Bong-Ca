// Đảm bảo toàn bộ trang web đã được tải xong trước khi chạy code
document.addEventListener('DOMContentLoaded', () => {

    // --- KHỞI TẠO BIẾN VÀ TRẠNG THÁI ---
    let cart = [];
    let customerInfo = {};
    
    // Lấy các phần tử trên trang
    const productGrid = document.getElementById('product-grid');
    const cartStatus = document.getElementById('cart-status');
    const checkoutButton = document.getElementById('checkout-button');
    const filtersContainer = document.getElementById('filters');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    
    // Khai báo các Modal
    const customerInfoModal = document.getElementById('customer-info-modal');
    const closeInfoModalButton = document.getElementById('close-info-modal-button');
    const customerInfoForm = document.getElementById('customer-info-form');
    const formError = document.getElementById('form-error');
    const orderModal = document.getElementById('order-modal');
    const closeOrderModalButton = document.getElementById('close-order-modal-button');
    const exportImageButton = document.getElementById('export-image-button');

    // --- CÁC HÀM XỬ LÝ ---

    /**
     * Định dạng số thành chuỗi tiền tệ Việt Nam.
     * @param {number} number - Số cần định dạng.
     * @returns {string} Chuỗi đã định dạng.
     */
    function formatCurrency(number) { 
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number); 
    }
    
    /**
     * Hiển thị sản phẩm ra màn hình.
     * @param {Array} productList - Danh sách sản phẩm cần hiển thị.
     */
    function displayProducts(productList) {
        productGrid.innerHTML = '';
        if (productList.length === 0) {
            productGrid.innerHTML = `<p class="col-span-full text-center text-gray-500">Không tìm thấy sản phẩm nào phù hợp.</p>`;
            return;
        }
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card flex flex-col bg-white rounded-lg shadow-md overflow-hidden';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                <div class="p-6 flex flex-col flex-grow">
                    <h2 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h2>
                    <p class="text-xl font-semibold text-indigo-600 mb-4">${formatCurrency(product.price)}</p>
                    <div class="mb-4 flex-grow">
                        <ul class="list-disc list-inside text-gray-600 space-y-1 text-sm">
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mt-auto flex items-center gap-3">
                        <div class="flex items-center border border-gray-300 rounded-lg">
                            <button data-product-id="${product.id}" class="quantity-btn quantity-minus font-bold w-8 h-8 text-xl text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors">-</button>
                            <span id="quantity-${product.id}" class="quantity-display w-10 text-center font-semibold text-gray-800 bg-white">1</span>
                            <button data-product-id="${product.id}" class="quantity-btn quantity-plus font-bold w-8 h-8 text-xl text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors">+</button>
                        </div>
                        <button data-id="${product.id}" class="add-to-cart-btn flex-grow bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300">Thêm</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    /**
     * Hàm lọc sản phẩm chính, xử lý tất cả các tiêu chí.
     */
    function applyFilters() {
        const selectedBrands = Array.from(document.querySelectorAll('#brand-filters input:checked')).map(cb => cb.value);
        const selectedTypes = Array.from(document.querySelectorAll('#type-filters input:checked')).map(cb => cb.value);
        const priceRangeValue = document.querySelector('#price-filters input:checked').value;

        let filteredProducts = products.filter(product => {
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.category);
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
            
            let priceMatch = true;
            if (priceRangeValue !== 'all') {
                const [minPrice, maxPrice] = priceRangeValue.split('-').map(Number);
                priceMatch = product.price >= minPrice && product.price <= (maxPrice || Infinity);
            }

            return brandMatch && typeMatch && priceMatch;
        });

        displayProducts(filteredProducts);
    }
    
    // --- LOGIC GIỎ HÀNG VÀ THANH TOÁN ---
    function addToCart(productId, quantity) {
        const id = parseInt(productId);
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const productToAdd = products.find(p => p.id === id);
            if (productToAdd) cart.push({ ...productToAdd, quantity: quantity });
        }
        updateCartStatus();
    }

    function updateCartStatus() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartStatus.textContent = `Giỏ hàng: ${totalItems} sản phẩm`;
        checkoutButton.disabled = cart.length === 0;
    }

    function showOrderModal() {
        if (cart.length === 0) return;
        const summaryList = document.getElementById('order-summary-list');
        const totalPriceEl = document.getElementById('order-total-price');
        const customerDetailsSummary = document.getElementById('customer-details-summary');
        let totalPrice = 0;
        
        customerDetailsSummary.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 mb-2">Thông tin giao hàng</h3>
            <p class="text-gray-700"><strong>Tên:</strong> ${customerInfo.name}</p>
            <p class="text-gray-700"><strong>SĐT:</strong> ${customerInfo.phone}</p>
            <p class="text-gray-700"><strong>Địa chỉ:</strong> ${customerInfo.address}</p>
            ${customerInfo.deliveryTime ? `<p class="text-gray-700"><strong>Ghi chú:</strong> ${customerInfo.deliveryTime}</p>` : ''}
        `;
        
        summaryList.innerHTML = '';
        cart.forEach(item => {
            const itemTotalPrice = item.price * item.quantity;
            summaryList.innerHTML += `
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                        <span class="font-semibold text-gray-800">${item.name}</span>
                        <span class="text-sm text-gray-500 ml-2">(x${item.quantity})</span>
                    </div>
                    <span class="font-semibold text-gray-800">${formatCurrency(itemTotalPrice)}</span>
                </div>
            `;
            totalPrice += itemTotalPrice;
        });
        totalPriceEl.textContent = formatCurrency(totalPrice);
        orderModal.classList.remove('hidden');
    }

    function exportOrderAsImage() {
        const modalContent = document.getElementById('modal-content-to-export');
        html2canvas(modalContent, { scale: 2, backgroundColor: '#ffffff', useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = `don_hang_${customerInfo.name.replace(/\s/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    // --- GẮN CÁC SỰ KIỆN ---
    filtersContainer.addEventListener('change', applyFilters);

    clearFiltersBtn.addEventListener('click', () => {
        document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.getElementById('price-all').checked = true;
        applyFilters();
    });
    
    productGrid.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('.quantity-btn')) {
            const productId = target.dataset.productId;
            const quantityEl = document.getElementById(`quantity-${productId}`);
            let quantity = parseInt(quantityEl.textContent);
            if (target.matches('.quantity-plus')) quantity++;
            else if (target.matches('.quantity-minus') && quantity > 1) quantity--;
            quantityEl.textContent = quantity;
        }
        if (target.matches('.add-to-cart-btn')) {
            const productId = target.dataset.id;
            const quantityEl = document.getElementById(`quantity-${productId}`);
            const quantity = parseInt(quantityEl.textContent);
            addToCart(productId, quantity);
            quantityEl.textContent = 1;
            target.textContent = 'Đã thêm!';
            target.classList.replace('bg-indigo-600', 'bg-green-500');
            setTimeout(() => {
                target.textContent = 'Thêm';
                target.classList.replace('bg-green-500', 'bg-indigo-600');
            }, 1500);
        }
    });

    checkoutButton.addEventListener('click', () => { if (cart.length > 0) customerInfoModal.classList.remove('hidden'); });
    closeInfoModalButton.addEventListener('click', () => customerInfoModal.classList.add('hidden'));
    customerInfoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const address = document.getElementById('customer-address').value.trim();
        if (!name || !phone || !address) {
            formError.classList.remove('hidden');
            return;
        }
        formError.classList.add('hidden');
        customerInfo = { name, phone, address, deliveryTime: document.getElementById('delivery-time').value.trim() };
        customerInfoModal.classList.add('hidden');
        showOrderModal();
    });
    closeOrderModalButton.addEventListener('click', () => orderModal.classList.add('hidden'));
    exportImageButton.addEventListener('click', exportOrderAsImage);

    // --- KHỞI CHẠY KHI TẢI TRANG ---
    displayProducts(products);
});
