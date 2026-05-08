-- Simple comment
/* 
   Block comment: 
   Example SQL script for Monokai Kai.
*/

-- DDL: Create Table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) DEFAULT 'example@example.com',
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index
CREATE INDEX idx_status ON users(status);

-- DML: Insert
INSERT INTO users (username, email) 
VALUES ('monokai_user', 'monokai@example.com'),
       ('kai_tester', 'kai@example.com');

-- DML: Select with Joins and Functions
SELECT 
    u.user_id,
    UPPER(u.username) AS display_name,
    COUNT(p.post_id) AS total_posts
FROM users u
LEFT JOIN posts p ON u.user_id = p.author_id
WHERE u.status = 'active'
  AND u.created_at > '2026-01-01'
GROUP BY u.user_id
HAVING total_posts > 5
ORDER BY total_posts DESC
LIMIT 10;

-- Update and Delete
UPDATE users SET status = 'inactive' WHERE user_id = 42;
DELETE FROM users WHERE last_login < DATE_SUB(NOW(), INTERVAL 1 YEAR);
