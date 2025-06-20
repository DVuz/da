import Link from 'next/link';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

export default function ReactBasics() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">React Cơ Bản</h1>
        <p className="text-xl text-gray-600">Tìm hiểu React từ những khái niệm cơ bản nhất</p>
      </div>

      <Card title="React là gì?">
        <p className="mb-4">
          <strong>React</strong> là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook
          (Meta) để xây dựng giao diện người dùng (User Interface - UI), đặc biệt là cho các ứng
          dụng web.
        </p>

        <h4 className="text-lg font-semibold mb-2">Đặc điểm chính của React:</h4>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Component-based:</strong> Xây dựng UI từ các component độc lập, có thể tái sử
            dụng
          </li>
          <li>
            <strong>Declarative:</strong> Mô tả UI như thế nào thay vì làm thế nào
          </li>
          <li>
            <strong>Virtual DOM:</strong> Sử dụng Virtual DOM để tối ưu hiệu suất
          </li>
          <li>
            <strong>One-way data flow:</strong> Dữ liệu chảy một chiều từ parent đến child
          </li>
        </ul>

        <CodeBlock>
          {`// Ví dụ component React đơn giản
import React from 'react';

function Welcome(props) {
  return <h1>Xin chào, {props.name}!</h1>;
}

// Sử dụng component
function App() {
  return (
    <div>
      <Welcome name="Nguyễn Văn A" />
      <Welcome name="Trần Thị B" />
    </div>
  );
}

export default App;`}
        </CodeBlock>
      </Card>

      <Card title="Lợi ích của React">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Lợi ích chính:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Hiệu suất cao:</strong> Virtual DOM giúp tối ưu việc cập nhật UI
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Tái sử dụng component:</strong> Viết một lần, dùng nhiều nơi
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Cộng đồng lớn:</strong> Nhiều tài liệu, thư viện hỗ trợ
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>SEO friendly:</strong> Hỗ trợ Server-side rendering
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Dễ học:</strong> Cú pháp JSX gần giống HTML
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-600">Ứng dụng thực tế:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>Single Page Applications (SPA)</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>Mobile apps (React Native)</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>Desktop apps (Electron)</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>Progressive Web Apps (PWA)</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>Static websites (Gatsby, Next.js)</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="JSX - JavaScript XML">
        <p className="mb-4">
          JSX là phần mở rộng cú pháp cho JavaScript cho phép viết HTML-like syntax trong
          JavaScript.
        </p>

        <CodeBlock>
          {`// JSX
const element = <h1>Hello, world!</h1>;

// Tương đương với JavaScript thuần:
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);

// JSX với expressions
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// JSX với attributes
const element = <img src={user.avatarUrl} alt={user.name} />;

// JSX với children
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);`}
        </CodeBlock>
      </Card>

      <Card title="Components và Props">
        <p className="mb-4">
          Components là khối xây dựng cơ bản của React. Props (properties) là cách truyền dữ liệu từ
          component cha đến component con.
        </p>

        <h4 className="text-lg font-semibold mb-3">Function Components:</h4>
        <CodeBlock>
          {`// Function Component đơn giản
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}

// Destructuring props
const Welcome = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Sử dụng component
<Welcome name="Alice" age={25} />`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Props Validation với PropTypes:</h4>
        <CodeBlock>
          {`import PropTypes from 'prop-types';

function UserCard({ name, email, age, isActive }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <span>{isActive ? 'Active' : 'Inactive'}</span>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool
};

UserCard.defaultProps = {
  age: 0,
  isActive: false
};`}
        </CodeBlock>
      </Card>

      <Card title="State và Lifecycle">
        <p className="mb-4">
          State là dữ liệu nội bộ của component có thể thay đổi theo thời gian. Hooks như useState
          và useEffect giúp quản lý state và lifecycle.
        </p>

        <h4 className="text-lg font-semibold mb-3">useState Hook:</h4>
        <CodeBlock>
          {`import React, { useState } from 'react';

function Counter() {
  // Khai báo state variable
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên của bạn"
      />
      <p>Xin chào, {name}!</p>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">useEffect Hook:</h4>
        <CodeBlock>
          {`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect chạy khi component mount và khi userId thay đổi
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Dependency array

  // Cleanup effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array = chỉ chạy khi mount/unmount

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Event Handling">
        <p className="mb-4">
          React sử dụng SyntheticEvents để xử lý events một cách nhất quán trên các trình duyệt khác
          nhau.
        </p>

        <CodeBlock>
          {`function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  // Handle button click
  const handleClick = (e) => {
    console.log('Button clicked!', e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Tên của bạn"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tin nhắn"
      />

      <button type="submit">Gửi</button>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </form>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Conditional Rendering">
        <p className="mb-4">React cho phép render components hoặc elements dựa trên điều kiện.</p>

        <CodeBlock>
          {`function UserGreeting({ user, isLoggedIn }) {
  // If-else với early return
  if (!isLoggedIn) {
    return <div>Vui lòng đăng nhập</div>;
  }

  // Ternary operator
  return (
    <div>
      {user ? (
        <h1>Xin chào, {user.name}!</h1>
      ) : (
        <h1>Xin chào, khách!</h1>
      )}

      {/* Logical AND operator */}
      {user && user.isAdmin && (
        <div className="admin-panel">
          <h2>Admin Panel</h2>
        </div>
      )}

      {/* Multiple conditions */}
      {user && user.notifications && user.notifications.length > 0 && (
        <div className="notifications">
          Bạn có {user.notifications.length} thông báo mới
        </div>
      )}
    </div>
  );
}

// Switch-case pattern với object
function StatusIndicator({ status }) {
  const statusConfig = {
    loading: { color: 'yellow', text: 'Đang tải...' },
    success: { color: 'green', text: 'Thành công!' },
    error: { color: 'red', text: 'Có lỗi xảy ra!' },
    idle: { color: 'gray', text: 'Sẵn sàng' }
  };

  const config = statusConfig[status] || statusConfig.idle;

  return (
    <div style={{ color: config.color }}>
      {config.text}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Lists và Keys">
        <p className="mb-4">
          Khi render danh sách items trong React, cần sử dụng keys để React có thể track được các
          changes.
        </p>

        <CodeBlock>
          {`function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>
            Xóa
          </button>
        </li>
      ))}
    </ul>
  );
}

// Render nested lists
function CategoryList({ categories }) {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Filter và render
function ProductList({ products, filter }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>Không tìm thấy sản phẩm nào</div>
      )}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← Trang chủ
        </Link>
        <Link
          href="/spa"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tiếp theo: SPA →
        </Link>
      </div>
    </div>
  );
}
