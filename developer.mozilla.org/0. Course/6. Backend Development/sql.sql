-- ========================================
-- 🧠 BÀI HỌC TỔNG HỢP: XÂY DỰNG HỆ THỐNG BÁN HÀNG VỚI SQL – TỪ CƠ BẢN ĐẾN NÂNG CAO
-- ========================================

-- ========================================
-- 1️⃣ TẠO BẢNG VÀ THÊM DỮ LIỆU BAN ĐẦU
-- ========================================

CREATE TABLE customers (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    category_id INT
);

INSERT INTO categories VALUES 
(1, 'Stationery'),
(2, 'Bags');

INSERT INTO products VALUES 
(1, 'Pen', 1.20, 1),
(2, 'Notebook', 2.50, 1),
(3, 'Backpack', 25.00, 2);

INSERT INTO customers VALUES 
(1, 'Trung', 'Dinh', 'trung@example.com'),
(2, 'Phuc', 'Bui', 'phuc@example.com');

-- ========================================
-- 2️⃣ ĐỌC VÀ LỌC DỮ LIỆU VỚI SELECT & WHERE
-- ========================================

SELECT * FROM customers;

SELECT * FROM products WHERE price < 5.00;

SELECT * FROM customers WHERE first_name = 'Trung';

SELECT * FROM products WHERE category_id = 1;

-- ========================================
-- 3️⃣ CẬP NHẬT VÀ CHỈNH SỬA BẢNG
-- ========================================

ALTER TABLE customers ADD phone VARCHAR(15);

UPDATE customers
SET phone = '0987654321'
WHERE id = 1;

UPDATE products
SET price = 20.00
WHERE name = 'Backpack';

-- ========================================
-- 4️⃣ XÓA DỮ LIỆU KHÔNG CẦN THIẾT
-- ========================================

DELETE FROM customers WHERE id = 2;

DELETE FROM products WHERE price > 20;

-- ========================================
-- 5️⃣ TẠO QUAN HỆ – FOREIGN KEY & INNER JOIN
-- ========================================

CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO orders VALUES 
(1, 1, '2024-07-01'),
(2, 1, '2024-07-02');

INSERT INTO order_items VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1);

SELECT 
    c.first_name,
    c.last_name,
    p.name AS product_name,
    oi.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id;

-- ========================================
-- 6️⃣ THỐNG KÊ VỚI GROUP BY VÀ SUM()
-- ========================================

SELECT 
    c.first_name,
    c.last_name,
    SUM(oi.quantity) AS total_items
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY c.id, c.first_name, c.last_name;

-- ========================================
-- 7️⃣ LEFT JOIN – DỮ LIỆU THIẾU
-- ========================================

SELECT 
    p.name AS product_name,
    SUM(oi.quantity) AS total_sold
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.id, p.name;

-- ========================================
-- 8️⃣ SUBQUERY – TRUY VẤN LỒNG NHAU
-- ========================================

SELECT * FROM products
WHERE price = (
    SELECT MAX(price) FROM products
);

-- ========================================
-- 9️⃣ VIEW – TẠO BẢNG ẢO ĐỂ TÁI SỬ DỤNG
-- ========================================

CREATE VIEW customer_orders_summary AS
SELECT 
    c.first_name,
    c.last_name,
    o.id AS order_id,
    o.order_date,
    SUM(oi.quantity * p.price) AS total_amount
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
GROUP BY o.id, c.first_name, c.last_name, o.order_date;

SELECT * FROM customer_orders_summary;

-- ========================================
-- 🔟 INDEX – TỐI ƯU TRUY VẤN
-- ========================================

CREATE INDEX idx_customers_email ON customers(email);

-- ========================================
-- 🔁 TRANSACTION – ĐẢM BẢO TOÀN VẸN DỮ LIỆU
-- ========================================

BEGIN;

INSERT INTO orders (id, customer_id, order_date)
VALUES (3, 1, '2024-07-03');

INSERT INTO order_items VALUES (3, 1, 1);
INSERT INTO order_items VALUES (3, 2, 2);

COMMIT;

-- Nếu xảy ra lỗi, dùng:
-- ROLLBACK;

-- ========================================
-- 1️⃣1️⃣ CASE WHEN – LOGIC ĐIỀU KIỆN
-- ========================================

-- Hiển thị tên sản phẩm và phân loại giá: 'Rẻ', 'Trung bình', 'Đắt'
SELECT 
    name,
    price,
    CASE 
        WHEN price < 5 THEN 'Rẻ'
        WHEN price BETWEEN 5 AND 20 THEN 'Trung bình'
        ELSE 'Đắt'
    END AS price_level
FROM products;

-- Gắn nhãn cho khách hàng theo số lượng đơn hàng đã đặt
SELECT 
    c.first_name,
    c.last_name,
    COUNT(o.id) AS total_orders,
    CASE 
        WHEN COUNT(o.id) = 0 THEN 'Mới'
        WHEN COUNT(o.id) <= 2 THEN 'Thường'
        ELSE 'Trung thành'
    END AS customer_status
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.first_name, c.last_name;

-- ========================================
-- 1️⃣2️⃣ DATE FUNCTIONS – HÀM XỬ LÝ NGÀY GIỜ
-- ========================================

-- Lấy các đơn hàng trong tháng 7 năm 2024
SELECT * FROM orders
WHERE EXTRACT(MONTH FROM order_date) = 7
  AND EXTRACT(YEAR FROM order_date) = 2024;

-- Tính số ngày kể từ khi đơn hàng được tạo
SELECT 
    id,
    order_date,
    CURRENT_DATE - order_date AS days_ago
FROM orders;

-- Hiển thị ngày, tháng, năm riêng biệt
SELECT 
    id,
    EXTRACT(DAY FROM order_date) AS day,
    EXTRACT(MONTH FROM order_date) AS month,
    EXTRACT(YEAR FROM order_date) AS year
FROM orders;

-- ========================================
-- 1️⃣3️⃣ UNION, EXISTS – TẬP HỢP VÀ KIỂM TRA TỒN TẠI
-- ========================================

-- UNION: Lấy tất cả tên khách hàng và tên sản phẩm vào một danh sách chung (demo)
SELECT first_name AS name FROM customers
UNION
SELECT name FROM products;

-- EXISTS: Kiểm tra khách hàng có đơn hàng không
SELECT 
    first_name,
    last_name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
);

-- NOT EXISTS: Khách hàng chưa từng đặt đơn
SELECT 
    first_name,
    last_name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
);

