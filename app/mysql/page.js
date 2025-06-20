import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function MySQL() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          MySQL - Hệ quản trị cơ sở dữ liệu
        </h1>
        <p className="text-xl text-gray-600">
          Tìm hiểu về MySQL, từ cơ bản đến nâng cao, và cách tích hợp với React
        </p>
      </div>

      <Card title="MySQL là gì?">
        <p className="mb-4">
          <strong>MySQL</strong> là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở,
          sử dụng ngôn ngữ SQL (Structured Query Language) để quản lý dữ liệu.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Đặc điểm chính của MySQL:</h4>
          <ul className="space-y-1 text-blue-700">
            <li>• Được phát triển bởi Oracle Corporation</li>
            <li>• Hỗ trợ nhiều hệ điều hành (Windows, Linux, macOS)</li>
            <li>• Miễn phí và có hiệu suất cao</li>
            <li>• Được sử dụng rộng rãi trong web development</li>
            <li>• Hỗ trợ ACID transactions</li>
            <li>• Có thể scale horizontally và vertically</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Ưu điểm:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Hiệu suất cao:</strong> Tối ưu cho read-heavy workloads</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Dễ sử dụng:</strong> Syntax đơn giản, documentation tốt</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Cộng đồng lớn:</strong> Nhiều tài liệu và support</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Replication:</strong> Master-slave, master-master</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-orange-600">Nhược điểm:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">!</span>
                <div><strong>Licensing:</strong> Dual license (GPL vs Commercial)</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">!</span>
                <div><strong>Complex queries:</strong> Không mạnh bằng PostgreSQL</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">!</span>
                <div><strong>Storage engines:</strong> Cần hiểu để tối ưu</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">!</span>
                <div><strong>Memory usage:</strong> Có thể tiêu tốn nhiều RAM</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Kiểu dữ liệu trong MySQL">
        <p className="mb-4">
          MySQL hỗ trợ nhiều kiểu dữ liệu khác nhau để lưu trữ các loại thông tin.
        </p>

        <h4 className="text-lg font-semibold mb-3">Kiểu số (Numeric Types):</h4>
        <CodeBlock language="sql">
{`-- Số nguyên
TINYINT     -- 1 byte, -128 to 127
SMALLINT    -- 2 bytes, -32,768 to 32,767
MEDIUMINT   -- 3 bytes, -8,388,608 to 8,388,607
INT         -- 4 bytes, -2,147,483,648 to 2,147,483,647
BIGINT      -- 8 bytes, very large numbers

-- Số thực
DECIMAL(M,D)  -- Exact numeric, M=total digits, D=decimal places
FLOAT(M,D)    -- Single precision floating point
DOUBLE(M,D)   -- Double precision floating point

-- Ví dụ sử dụng
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL(10,2),          -- 99999999.99
    weight FLOAT(5,2),            -- 999.99
    stock_quantity SMALLINT UNSIGNED
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Kiểu chuỗi (String Types):</h4>
        <CodeBlock language="sql">
{`-- Chuỗi có độ dài cố định và thay đổi
CHAR(M)       -- Fixed length, 0-255 characters
VARCHAR(M)    -- Variable length, 0-65,535 characters
TEXT          -- Up to 65,535 characters
MEDIUMTEXT    -- Up to 16,777,215 characters
LONGTEXT      -- Up to 4,294,967,295 characters

-- Binary data
BINARY(M)     -- Fixed length binary
VARBINARY(M)  -- Variable length binary
BLOB          -- Binary Large Object

-- Ví dụ sử dụng
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    full_name VARCHAR(100),
    bio TEXT,
    profile_image BLOB
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Kiểu ngày tháng (Date/Time Types):</h4>
        <CodeBlock language="sql">
{`-- Các kiểu ngày tháng
DATE          -- YYYY-MM-DD (1000-01-01 to 9999-12-31)
TIME          -- HH:MM:SS (-838:59:59 to 838:59:59)
DATETIME      -- YYYY-MM-DD HH:MM:SS (1000-01-01 to 9999-12-31)
TIMESTAMP     -- YYYY-MM-DD HH:MM:SS (1970-01-01 to 2038-01-19)
YEAR          -- YYYY (1901 to 2155)

-- Ví dụ sử dụng
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    event_date DATE,
    start_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Kiểu đặc biệt (Special Types):</h4>
        <CodeBlock language="sql">
{`-- Boolean
BOOLEAN       -- TINYINT(1), 0=FALSE, 1=TRUE

-- Enum
ENUM('value1', 'value2', 'value3')

-- Set
SET('option1', 'option2', 'option3')

-- JSON (MySQL 5.7+)
JSON          -- Native JSON storage

-- Ví dụ sử dụng
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    tags SET('tech', 'business', 'lifestyle', 'news'),
    is_featured BOOLEAN DEFAULT FALSE,
    metadata JSON
);`}
        </CodeBlock>
      </Card>

      <Card title="Lệnh SQL cơ bản">
        <p className="mb-4">
          Các lệnh SQL cơ bản để thao tác với dữ liệu trong MySQL.
        </p>

        <h4 className="text-lg font-semibold mb-3">CREATE - Tạo cơ sở dữ liệu và bảng:</h4>
        <CodeBlock language="sql">
{`-- Tạo database
CREATE DATABASE blog_app
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE blog_app;

-- Tạo bảng users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Tạo bảng posts với foreign key
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content LONGTEXT,
    excerpt TEXT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    user_id INT NOT NULL,
    view_count INT DEFAULT 0,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_published_at (published_at),
    FULLTEXT idx_title_content (title, content)
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">INSERT - Thêm dữ liệu:</h4>
        <CodeBlock language="sql">
{`-- Insert một record
INSERT INTO users (username, email, password, full_name)
VALUES ('john_doe', 'john@example.com', 'hashed_password', 'John Doe');

-- Insert nhiều records
INSERT INTO users (username, email, password, full_name) VALUES
    ('alice_smith', 'alice@example.com', 'hashed_password', 'Alice Smith'),
    ('bob_johnson', 'bob@example.com', 'hashed_password', 'Bob Johnson'),
    ('charlie_brown', 'charlie@example.com', 'hashed_password', 'Charlie Brown');

-- Insert với subquery
INSERT INTO posts (title, slug, content, user_id, status)
SELECT
    CONCAT('Sample Post for ', full_name),
    CONCAT('sample-post-', id),
    'This is a sample post content',
    id,
    'published'
FROM users
WHERE is_active = TRUE;

-- Insert with ON DUPLICATE KEY UPDATE
INSERT INTO users (username, email, full_name)
VALUES ('john_doe', 'john.doe@example.com', 'John Doe Updated')
ON DUPLICATE KEY UPDATE
    email = VALUES(email),
    full_name = VALUES(full_name),
    updated_at = CURRENT_TIMESTAMP;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">SELECT - Truy vấn dữ liệu:</h4>
        <CodeBlock language="sql">
{`-- Basic SELECT
SELECT * FROM users;
SELECT username, email, created_at FROM users;

-- WHERE clause
SELECT * FROM users WHERE is_active = TRUE;
SELECT * FROM posts WHERE status = 'published' AND view_count > 100;

-- ORDER BY và LIMIT
SELECT * FROM posts
WHERE status = 'published'
ORDER BY created_at DESC
LIMIT 10;

-- LIKE và wildcards
SELECT * FROM users WHERE full_name LIKE '%John%';
SELECT * FROM posts WHERE title LIKE 'How to%';

-- IN và NOT IN
SELECT * FROM posts WHERE status IN ('published', 'draft');
SELECT * FROM users WHERE id NOT IN (1, 2, 3);

-- BETWEEN
SELECT * FROM posts
WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

-- JOIN operations
SELECT
    u.username,
    u.full_name,
    p.title,
    p.created_at
FROM users u
INNER JOIN posts p ON u.id = p.user_id
WHERE p.status = 'published'
ORDER BY p.created_at DESC;

-- LEFT JOIN để lấy users có thể không có posts
SELECT
    u.username,
    u.full_name,
    COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id AND p.status = 'published'
GROUP BY u.id, u.username, u.full_name
ORDER BY post_count DESC;

-- Aggregate functions
SELECT
    status,
    COUNT(*) as count,
    AVG(view_count) as avg_views,
    MAX(view_count) as max_views,
    MIN(created_at) as oldest_post
FROM posts
GROUP BY status
HAVING COUNT(*) > 5;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">UPDATE - Cập nhật dữ liệu:</h4>
        <CodeBlock language="sql">
{`-- Basic UPDATE
UPDATE users
SET full_name = 'John Smith'
WHERE username = 'john_doe';

-- Update multiple columns
UPDATE users
SET
    full_name = 'Alice Johnson',
    bio = 'Software Developer',
    updated_at = CURRENT_TIMESTAMP
WHERE id = 2;

-- Update với JOIN
UPDATE posts p
INNER JOIN users u ON p.user_id = u.id
SET p.view_count = p.view_count + 1
WHERE u.username = 'john_doe' AND p.status = 'published';

-- Conditional UPDATE
UPDATE posts
SET status = 'archived'
WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 YEAR)
  AND view_count < 10;

-- UPDATE với subquery
UPDATE users
SET bio = CONCAT('Author of ',
    (SELECT COUNT(*) FROM posts WHERE user_id = users.id),
    ' posts')
WHERE id IN (SELECT DISTINCT user_id FROM posts);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">DELETE - Xóa dữ liệu:</h4>
        <CodeBlock language="sql">
{`-- Basic DELETE
DELETE FROM posts WHERE status = 'draft' AND created_at < '2023-01-01';

-- DELETE với JOIN
DELETE p
FROM posts p
INNER JOIN users u ON p.user_id = u.id
WHERE u.is_active = FALSE;

-- DELETE với subquery
DELETE FROM users
WHERE id NOT IN (
    SELECT DISTINCT user_id
    FROM posts
    WHERE status = 'published'
);

-- Safe DELETE với LIMIT
DELETE FROM posts
WHERE status = 'spam'
ORDER BY created_at ASC
LIMIT 100;`}
        </CodeBlock>
      </Card>

      <Card title="Indexes và Performance">
        <p className="mb-4">
          Indexes là công cụ quan trọng để tối ưu hiệu suất truy vấn trong MySQL.
        </p>

        <h4 className="text-lg font-semibold mb-3">Các loại Index:</h4>
        <CodeBlock language="sql">
{`-- Primary Index (tự động tạo với PRIMARY KEY)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Primary index
    username VARCHAR(50) UNIQUE         -- Unique index
);

-- Single column index
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_created_at ON posts(created_at);

-- Composite index (multi-column)
CREATE INDEX idx_user_status ON posts(user_id, status);
CREATE INDEX idx_status_created ON posts(status, created_at);

-- Unique index
CREATE UNIQUE INDEX idx_unique_slug ON posts(slug);

-- Partial index (với WHERE clause)
CREATE INDEX idx_published_posts ON posts(created_at)
WHERE status = 'published';

-- Full-text index
CREATE FULLTEXT INDEX idx_search ON posts(title, content);

-- Prefix index (chỉ index một phần của column)
CREATE INDEX idx_title_prefix ON posts(title(50));`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Sử dụng EXPLAIN để phân tích query:</h4>
        <CodeBlock language="sql">
{`-- EXPLAIN basic
EXPLAIN SELECT * FROM posts WHERE user_id = 1;

-- EXPLAIN FORMAT=JSON cho thông tin chi tiết
EXPLAIN FORMAT=JSON
SELECT p.title, u.username
FROM posts p
INNER JOIN users u ON p.user_id = u.id
WHERE p.status = 'published'
ORDER BY p.created_at DESC
LIMIT 10;

-- EXPLAIN ANALYZE (MySQL 8.0+)
EXPLAIN ANALYZE
SELECT * FROM posts
WHERE status = 'published'
AND created_at > '2024-01-01';

-- Các thông tin quan trọng trong EXPLAIN:
-- type: ALL (bad), index, range, ref, eq_ref, const (good)
-- key: Index được sử dụng
-- rows: Số rows ước tính cần scan
-- Extra: Thông tin bổ sung (Using filesort, Using temporary, etc.)`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Query Optimization Tips:</h4>
        <CodeBlock language="sql">
{`-- 1. Sử dụng LIMIT để giới hạn kết quả
SELECT * FROM posts
WHERE status = 'published'
ORDER BY created_at DESC
LIMIT 20;

-- 2. Sử dụng covering index
-- Index bao gồm tất cả columns cần thiết
CREATE INDEX idx_covering ON posts(status, user_id, title, created_at);

SELECT user_id, title, created_at
FROM posts
WHERE status = 'published';

-- 3. Tránh function trong WHERE clause
-- Chậm:
SELECT * FROM posts WHERE YEAR(created_at) = 2024;

-- Nhanh:
SELECT * FROM posts
WHERE created_at >= '2024-01-01'
AND created_at < '2025-01-01';

-- 4. Sử dụng EXISTS thay vì IN với subquery lớn
-- Chậm:
SELECT * FROM users
WHERE id IN (SELECT user_id FROM posts WHERE status = 'published');

-- Nhanh:
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM posts p
    WHERE p.user_id = u.id AND p.status = 'published'
);

-- 5. Optimize ORDER BY
-- Tạo index cho ORDER BY
CREATE INDEX idx_status_created_desc ON posts(status, created_at DESC);

SELECT * FROM posts
WHERE status = 'published'
ORDER BY created_at DESC;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Index Management:</h4>
        <CodeBlock language="sql">
{`-- Xem tất cả indexes của bảng
SHOW INDEX FROM posts;

-- Xem size của indexes
SELECT
    TABLE_NAME,
    INDEX_NAME,
    ROUND(STAT_VALUE * @@innodb_page_size / 1024 / 1024, 2) AS 'Index Size (MB)'
FROM information_schema.INNODB_SYS_TABLESTATS
WHERE TABLE_NAME LIKE '%posts%';

-- Drop index
DROP INDEX idx_old_index ON posts;

-- Rebuild index
ALTER TABLE posts DROP INDEX idx_user_status, ADD INDEX idx_user_status(user_id, status);

-- Check unused indexes
SELECT
    s.table_schema,
    s.table_name,
    s.index_name,
    s.cardinality
FROM information_schema.statistics s
LEFT JOIN performance_schema.table_io_waits_summary_by_index_usage i
ON s.table_schema = i.object_schema
AND s.table_name = i.object_name
AND s.index_name = i.index_name
WHERE i.index_name IS NULL
AND s.table_schema NOT IN ('mysql', 'performance_schema', 'information_schema');`}
        </CodeBlock>
      </Card>

      <Card title="Transactions và ACID">
        <p className="mb-4">
          Transactions đảm bảo tính toàn vẹn dữ liệu và tuân thủ các nguyên tắc ACID.
        </p>

        <h4 className="text-lg font-semibold mb-3">ACID Properties:</h4>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-600">Atomicity (Tính nguyên tử):</strong>
              Transaction là một đơn vị không thể chia tách - hoặc tất cả operations thành công, hoặc tất cả fail
            </li>
            <li>
              <strong className="text-green-600">Consistency (Tính nhất quán):</strong>
              Database luôn chuyển từ valid state này sang valid state khác
            </li>
            <li>
              <strong className="text-purple-600">Isolation (Tính cô lập):</strong>
              Concurrent transactions không ảnh hưởng lẫn nhau
            </li>
            <li>
              <strong className="text-orange-600">Durability (Tính bền vững):</strong>
              Sau khi commit, changes được lưu trữ vĩnh viễn
            </li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Basic Transactions:</h4>
        <CodeBlock language="sql">
{`-- Transaction cơ bản
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Kiểm tra điều kiện
SELECT balance FROM accounts WHERE id = 1;

-- Nếu OK thì commit
COMMIT;

-- Nếu có lỗi thì rollback
-- ROLLBACK;

-- Transaction với Savepoints
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (1, 100);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 1, 2);
INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 2, 1);

-- Nếu có lỗi ở order_items, rollback về savepoint
-- ROLLBACK TO SAVEPOINT order_created;

-- Hoặc commit toàn bộ
COMMIT;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Isolation Levels:</h4>
        <CodeBlock language="sql">
{`-- Xem isolation level hiện tại
SELECT @@transaction_isolation;

-- Set isolation level
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;  -- Default
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Transaction với isolation level cụ thể
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
SELECT * FROM accounts WHERE id = 1;
-- ... other operations
COMMIT;`}
        </CodeBlock>

        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h5 className="font-semibold mb-2">Isolation Levels và vấn đề:</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Level</th>
                  <th className="text-left p-2">Dirty Read</th>
                  <th className="text-left p-2">Non-repeatable Read</th>
                  <th className="text-left p-2">Phantom Read</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">READ UNCOMMITTED</td>
                  <td className="p-2 text-red-600">Có thể</td>
                  <td className="p-2 text-red-600">Có thể</td>
                  <td className="p-2 text-red-600">Có thể</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">READ COMMITTED</td>
                  <td className="p-2 text-green-600">Không</td>
                  <td className="p-2 text-red-600">Có thể</td>
                  <td className="p-2 text-red-600">Có thể</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">REPEATABLE READ</td>
                  <td className="p-2 text-green-600">Không</td>
                  <td className="p-2 text-green-600">Không</td>
                  <td className="p-2 text-red-600">Có thể</td>
                </tr>
                <tr>
                  <td className="p-2">SERIALIZABLE</td>
                  <td className="p-2 text-green-600">Không</td>
                  <td className="p-2 text-green-600">Không</td>
                  <td className="p-2 text-green-600">Không</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-3 mt-6">Deadlock Handling:</h4>
        <CodeBlock language="sql">
{`-- Deadlock example và cách xử lý
DELIMITER //
CREATE PROCEDURE transfer_money(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        GET DIAGNOSTICS CONDITION 1
            @error_code = MYSQL_ERRNO,
            @error_message = MESSAGE_TEXT;

        -- Log error hoặc handle specific errors
        IF @error_code = 1213 THEN  -- Deadlock
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Deadlock detected, please retry';
        ELSE
            RESIGNAL;
        END IF;
    END;

    START TRANSACTION;

    -- Lock accounts in consistent order để tránh deadlock
    IF from_account < to_account THEN
        SELECT balance FROM accounts WHERE id = from_account FOR UPDATE;
        SELECT balance FROM accounts WHERE id = to_account FOR UPDATE;
    ELSE
        SELECT balance FROM accounts WHERE id = to_account FOR UPDATE;
        SELECT balance FROM accounts WHERE id = from_account FOR UPDATE;
    END IF;

    -- Kiểm tra balance
    IF (SELECT balance FROM accounts WHERE id = from_account) < amount THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;

    -- Thực hiện transfer
    UPDATE accounts SET balance = balance - amount WHERE id = from_account;
    UPDATE accounts SET balance = balance + amount WHERE id = to_account;

    COMMIT;
END //
DELIMITER ;`}
        </CodeBlock>
      </Card>

      <Card title="Backup và Recovery">
        <p className="mb-4">
          Backup và recovery là phần quan trọng để đảm bảo an toàn dữ liệu.
        </p>

        <h4 className="text-lg font-semibold mb-3">MySQL Dump:</h4>
        <CodeBlock language="bash">
{`# Backup single database
mysqldump -u username -p database_name > backup.sql

# Backup với structure + data
mysqldump -u username -p --routines --triggers database_name > full_backup.sql

# Backup chỉ structure (không có data)
mysqldump -u username -p --no-data database_name > structure_only.sql

# Backup chỉ data (không có structure)
mysqldump -u username -p --no-create-info database_name > data_only.sql

# Backup specific tables
mysqldump -u username -p database_name table1 table2 > tables_backup.sql

# Backup tất cả databases
mysqldump -u username -p --all-databases > all_databases.sql

# Backup với compression
mysqldump -u username -p database_name | gzip > backup.sql.gz

# Backup với single transaction (cho InnoDB)
mysqldump -u username -p --single-transaction --routines --triggers database_name > consistent_backup.sql`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Restore Database:</h4>
        <CodeBlock language="bash">
{`# Restore từ backup file
mysql -u username -p database_name < backup.sql

# Restore compressed backup
gunzip < backup.sql.gz | mysql -u username -p database_name

# Restore với progress indicator
pv backup.sql | mysql -u username -p database_name

# Restore với error logging
mysql -u username -p database_name < backup.sql 2> restore_errors.log`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Automated Backup Script:</h4>
        <CodeBlock language="bash">
{`#!/bin/bash

# MySQL backup script
DB_USER="backup_user"
DB_PASS="secure_password"
DB_NAME="blog_app"
BACKUP_DIR="/var/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=7

# Create backup directory if not exists
mkdir -p $BACKUP_DIR

# Perform backup
mysqldump -u $DB_USER -p$DB_PASS \
    --single-transaction \
    --routines \
    --triggers \
    --events \
    $DB_NAME | gzip > $BACKUP_DIR/$ {DB_NAME}_$ {DATE}.sql.gz

# Check if backup was successful
if [ $? -eq 0 ]; then
    echo "Backup completed successfully: $ {DB_NAME}_$ {DATE}.sql.gz"

    # Remove old backups
    find $BACKUP_DIR -name "$ {DB_NAME}_*.sql.gz" -mtime +$RETENTION_DAYS -delete
    echo "Old backups cleaned up (older than $RETENTION_DAYS days)"
else
    echo "Backup failed!" >&2
    exit 1
fi

# Optional: Upload to S3 or other cloud storage
# aws s3 cp $BACKUP_DIR/$ {DB_NAME}_$ {DATE}.sql.gz s3://your-backup-bucket/mysql/`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Point-in-Time Recovery:</h4>
        <CodeBlock language="bash">
{`# Enable binary logging in my.cnf
[mysqld]
log-bin=mysql-bin
server-id=1
binlog-format=ROW

# Backup với binary log position
mysqldump -u username -p --single-transaction --master-data=2 database_name > backup_with_position.sql

# Xem binary logs
SHOW BINARY LOGS;
SHOW MASTER STATUS;

# Recovery process:
# 1. Restore từ full backup
mysql -u username -p database_name < backup_with_position.sql

# 2. Apply binary logs từ backup point đến desired time
mysqlbinlog --start-datetime="2024-01-01 10:00:00" \
           --stop-datetime="2024-01-01 11:30:00" \
           mysql-bin.000001 | mysql -u username -p database_name

# Hoặc sử dụng position thay vì datetime
mysqlbinlog --start-position=4 --stop-position=106 \
           mysql-bin.000001 | mysql -u username -p database_name`}
        </CodeBlock>
      </Card>

      <Card title="Express.js - Backend API cho MySQL">
        <p className="mb-4">
          <strong>Express.js</strong> đóng vai trò là backend server để tạo RESTful APIs, 
          kết nối React frontend với MySQL database.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Vai trò của Express.js trong stack:</h4>
          <ul className="space-y-1 text-blue-700">
            <li>• <strong>API Layer:</strong> Tạo endpoints REST cho CRUD operations</li>
            <li>• <strong>Database Connection:</strong> Quản lý connection pool với MySQL</li>
            <li>• <strong>Authentication:</strong> Xử lý đăng nhập, phân quyền</li>
            <li>• <strong>Middleware:</strong> Validation, logging, error handling</li>
            <li>• <strong>Security:</strong> CORS, rate limiting, input sanitization</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <p className="text-green-800">
            <strong>📚 Tìm hiểu chi tiết:</strong> Để học Express.js từ cơ bản đến nâng cao, 
            vui lòng xem trang <Link href="/express" className="text-blue-600 hover:text-blue-800 underline">Express.js Framework</Link>.
          </p>
        </div>

        <h4 className="text-lg font-semibold mb-3">Express + MySQL Setup cơ bản:</h4>
        <CodeBlock language="bash">
{`# Cài đặt dependencies
npm install express mysql2 cors dotenv
npm install -D nodemon`}
        </CodeBlock>

        <CodeBlock>
{`// server.js - Express server với MySQL
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp',
  waitForConnections: true,
  connectionLimit: 10
});

// API endpoints
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});`}
        </CodeBlock>
      </Card>

      <Card title="Tích hợp MySQL với React">
        <p className="mb-4">
          Kết nối React frontend với MySQL backend thông qua RESTful APIs.
        </p>

        <h4 className="text-lg font-semibold mb-3">Backend API Setup (Express + MySQL):</h4>
        <CodeBlock language="bash">
{`# Cài đặt dependencies
npm init -y
npm install express mysql2 cors dotenv bcrypt jsonwebtoken
npm install -D nodemon`}
        </CodeBlock>

        <CodeBlock>
{`// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'blog_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Middleware để verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Routes

// User registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password, full_name } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, full_name]
    );

    res.status(201).json({
      message: 'User created successfully',
      userId: result.insertId
    });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Username or email already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// User login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await pool.execute(
      'SELECT id, username, email, password, full_name FROM users WHERE username = ? AND is_active = TRUE',
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        full_name: user.full_name
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const { page = 1, limit = 10, status = 'published' } = req.query;
    const offset = (page - 1) * limit;

    const [rows] = await pool.execute(\`
      SELECT
        p.id, p.title, p.slug, p.excerpt, p.status,
        p.view_count, p.created_at,
        u.username, u.full_name
      FROM posts p
      INNER JOIN users u ON p.user_id = u.id
      WHERE p.status = ?
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    \`, [status, parseInt(limit), parseInt(offset)]);

    // Get total count
    const [countResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM posts WHERE status = ?',
      [status]
    );

    res.json({
      posts: rows,
      total: countResult[0].total,
      page: parseInt(page),
      limit: parseInt(limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single post
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const [rows] = await pool.execute(\`
      SELECT
        p.*,
        u.username, u.full_name, u.bio
      FROM posts p
      INNER JOIN users u ON p.user_id = u.id
      WHERE p.slug = ? AND p.status = 'published'
    \`, [slug]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Increment view count
    await pool.execute(
      'UPDATE posts SET view_count = view_count + 1 WHERE slug = ?',
      [slug]
    );

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new post (authenticated)
app.post('/api/posts', authenticateToken, async (req, res) => {
  try {
    const { title, content, excerpt, status = 'draft' } = req.body;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const [result] = await pool.execute(
      'INSERT INTO posts (title, slug, content, excerpt, status, user_id) VALUES (?, ?, ?, ?, ?, ?)',
      [title, slug, content, excerpt, status, req.user.id]
    );

    res.status(201).json({
      message: 'Post created successfully',
      postId: result.insertId,
      slug
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">React Frontend Integration:</h4>
        <CodeBlock>
{`// api/client.js - API client setup
const API_BASE_URL = 'http://localhost:3001/api';

class ApiClient {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  async request(endpoint, options = {}) {
    const url = \`\${API_BASE_URL}\${endpoint}\`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: \`Bearer \${this.token}\` }),
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth methods
  async login(username, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: { username, password },
    });
    this.setToken(data.token);
    return data;
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: userData,
    });
  }

  logout() {
    this.setToken(null);
  }

  // Posts methods
  async getPosts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(\`/posts?\${queryString}\`);
  }

  async getPost(slug) {
    return this.request(\`/posts/\${slug}\`);
  }

  async createPost(postData) {
    return this.request('/posts', {
      method: 'POST',
      body: postData,
    });
  }

  async updatePost(id, postData) {
    return this.request(\`/posts/\${id}\`, {
      method: 'PUT',
      body: postData,
    });
  }

  async deletePost(id) {
    return this.request(\`/posts/\${id}\`, {
      method: 'DELETE',
    });
  }
}

export default new ApiClient();`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">React Components với MySQL data:</h4>
        <CodeBlock>
{`// components/PostList.js
import React, { useState, useEffect } from 'react';
import apiClient from '../api/client';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });

  useEffect(() => {
    fetchPosts();
  }, [pagination.page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await apiClient.getPosts({
        page: pagination.page,
        limit: pagination.limit,
        status: 'published'
      });

      setPosts(data.posts);
      setPagination(prev => ({
        ...prev,
        total: data.total
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <div className="post-list">
      <h2>Blog Posts</h2>

      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h3>
              <a href={\`/posts/\${post.slug}\`}>{post.title}</a>
            </h3>
            <p className="excerpt">{post.excerpt}</p>
            <div className="meta">
              <span>By {post.full_name || post.username}</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <span>{post.view_count} views</span>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            Previous
          </button>

          <span>
            Page {pagination.page} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default PostList;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Custom Hooks cho MySQL operations:</h4>
        <CodeBlock>
{`// hooks/usePosts.js
import { useState, useEffect } from 'react';
import apiClient from '../api/client';

export function usePosts(options = {}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: options.page || 1,
    limit: options.limit || 10,
    total: 0
  });

  const fetchPosts = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);

      const data = await apiClient.getPosts({
        ...pagination,
        ...params
      });

      setPosts(data.posts);
      setPagination(prev => ({
        ...prev,
        total: data.total,
        ...params
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      await apiClient.createPost(postData);
      await fetchPosts(); // Refresh list
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      await apiClient.updatePost(id, postData);
      await fetchPosts(); // Refresh list
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await apiClient.deletePost(id);
      await fetchPosts(); // Refresh list
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [pagination.page, pagination.limit]);

  return {
    posts,
    loading,
    error,
    pagination,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    setPagination
  };
}

// hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';
import apiClient from '../api/client';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem('token');
    if (token) {
      apiClient.setToken(token);
      // You might want to verify token with server here
      setUser({ token }); // Simplified for example
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const data = await apiClient.login(username, password);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const data = await apiClient.register(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    apiClient.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}`}
        </CodeBlock>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/advanced"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← React nâng cao
        </Link>
        <div className="flex gap-4">
          <Link
            href="/express"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Express.js →
          </Link>
          <Link
            href="/sequelize"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Sequelize →
          </Link>
        </div>
      </div>
    </div>
  );
}
