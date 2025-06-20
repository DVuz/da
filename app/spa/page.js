import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function SPA() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          SPA - Single Page Application
        </h1>
        <p className="text-xl text-gray-600">
          Tìm hiểu về mô hình Single Page Application và cách React hỗ trợ xây dựng SPA
        </p>
      </div>

      <Card title="SPA là gì?">
        <p className="mb-4">
          <strong>Single Page Application (SPA)</strong> là một ứng dụng web hoạt động trong một trang duy nhất,
          không cần reload toàn bộ trang khi người dùng tương tác. Thay vào đó, SPA dynamically cập nhật
          nội dung bằng JavaScript.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Đặc điểm chính của SPA:</h4>
          <ul className="space-y-1 text-blue-700">
            <li>• Chỉ có một trang HTML chính (thường là index.html)</li>
            <li>• Navigation được xử lý bởi JavaScript (client-side routing)</li>
            <li>• Content được cập nhật dynamically qua AJAX/Fetch API</li>
            <li>• Trải nghiệm người dùng mượt mà, giống như ứng dụng desktop</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Ưu điểm:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Tốc độ:</strong> Không cần reload trang, chỉ tải dữ liệu cần thiết</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>UX tốt:</strong> Chuyển đổi mượt mà giữa các views</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Caching:</strong> Resources được cache hiệu quả</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Offline:</strong> Có thể hoạt động offline với Service Workers</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-red-600">Nhược điểm:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div><strong>SEO:</strong> Khó khăn với SEO (cần SSR)</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div><strong>Initial load:</strong> Tải lần đầu có thể chậm</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div><strong>Browser history:</strong> Cần xử lý routing phức tạp</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <div><strong>JavaScript required:</strong> Không hoạt động nếu JS bị tắt</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="SPA vs MPA (Multi-Page Application)">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Tiêu chí</th>
                <th className="border border-gray-300 px-4 py-2 text-left">SPA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">MPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Page Load</td>
                <td className="border border-gray-300 px-4 py-2">Chỉ tải lần đầu</td>
                <td className="border border-gray-300 px-4 py-2">Tải mỗi khi chuyển trang</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Speed</td>
                <td className="border border-gray-300 px-4 py-2">Nhanh sau lần đầu</td>
                <td className="border border-gray-300 px-4 py-2">Chậm hơn do reload</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">SEO</td>
                <td className="border border-gray-300 px-4 py-2">Khó khăn (cần SSR)</td>
                <td className="border border-gray-300 px-4 py-2">Dễ dàng</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Development</td>
                <td className="border border-gray-300 px-4 py-2">Phức tạp hơn</td>
                <td className="border border-gray-300 px-4 py-2">Đơn giản hơn</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">User Experience</td>
                <td className="border border-gray-300 px-4 py-2">Mượt mà, app-like</td>
                <td className="border border-gray-300 px-4 py-2">Truyền thống</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="React Router - Client-side Routing">
        <p className="mb-4">
          React Router là thư viện phổ biến nhất để implement routing trong React SPA.
        </p>

        <h4 className="text-lg font-semibold mb-3">Cài đặt React Router:</h4>
        <CodeBlock language="bash">
{`npm install react-router-dom`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Basic Routing Setup:</h4>
        <CodeBlock>
{`import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/old-home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Dynamic Routes và Params:</h4>
        <CodeBlock>
{`import { useParams, useNavigate, useLocation } from 'react-router-dom';

// Route với params
<Route path="/users/:id" element={<UserProfile />} />
<Route path="/products/:category/:id" element={<Product />} />

// Component sử dụng params
function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetchUser(id).then(setUser);
  }, [id]);

  const handleEdit = () => {
    navigate(\`/users/\${id}/edit\`);
  };

  const goBack = () => {
    navigate(-1); // Go back in history
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Current path: {location.pathname}</p>
      <button onClick={handleEdit}>Edit User</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

// Nested Routes
function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="overview">Overview</Link>
        <Link to="analytics">Analytics</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> {/* Render child routes here */}
    </div>
  );
}

// App routing
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<Overview />} />
    <Route path="overview" element={<Overview />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>`}
        </CodeBlock>
      </Card>

      <Card title="Data Fetching trong SPA">
        <p className="mb-4">
          SPA thường sử dụng AJAX/Fetch API để tải dữ liệu từ server mà không cần reload trang.
        </p>

        <h4 className="text-lg font-semibold mb-3">Fetch Data với useEffect:</h4>
        <CodeBlock>
{`import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array = chỉ chạy khi mount

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="price">$ {product.price}</span>
        </div>
      ))}
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Custom Hook cho Data Fetching:</h4>
        <CodeBlock>
{`// Custom hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Sử dụng custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">React Query cho Advanced Data Fetching:</h4>
        <CodeBlock>
{`// Cài đặt: npm install @tanstack/react-query

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function ProductList() {
  // useQuery tự động handle loading, error, caching, refetching
  const {
    data: products,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const queryClient = useQueryClient();

  // Mutation để create/update/delete
  const createProductMutation = useMutation({
    mutationFn: (newProduct) => {
      return fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
    },
    onSuccess: () => {
      // Invalidate and refetch products after successful creation
      queryClient.invalidateQueries(['products']);
    },
  });

  const handleCreateProduct = (productData) => {
    createProductMutation.mutate(productData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh Products</button>
      {products?.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="State Management trong SPA">
        <p className="mb-4">
          Khi ứng dụng SPA phức tạp, việc quản lý state trở nên quan trọng. React cung cấp nhiều cách để share state giữa components.
        </p>

        <h4 className="text-lg font-semibold mb-3">Context API:</h4>
        <CodeBlock>
{`import React, { createContext, useContext, useReducer } from 'react';

// Create Context
const AppContext = createContext();

// State và Actions
const initialState = {
  user: null,
  theme: 'light',
  notifications: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    default:
      return state;
  }
}

// Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    addNotification: (notification) =>
      dispatch({ type: 'ADD_NOTIFICATION', payload: notification }),
    removeNotification: (id) =>
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: id })
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook để sử dụng context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

// Sử dụng trong component
function Header() {
  const { state, actions } = useApp();

  return (
    <header>
      <h1>My App</h1>
      {state.user ? (
        <span>Welcome, {state.user.name}!</span>
      ) : (
        <button onClick={() => actions.setUser({ name: 'John' })}>
          Login
        </button>
      )}
      <button onClick={() =>
        actions.setTheme(state.theme === 'light' ? 'dark' : 'light')
      }>
        Toggle Theme
      </button>
    </header>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Performance Optimization trong SPA">
        <p className="mb-4">
          SPA cần được tối ưu để đảm bảo hiệu suất tốt, đặc biệt khi ứng dụng phát triển lớn.
        </p>

        <h4 className="text-lg font-semibold mb-3">Code Splitting:</h4>
        <CodeBlock>
{`import React, { lazy, Suspense } from 'react';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

// Lazy load with error boundary
const LazyComponent = lazy(() =>
  import('./HeavyComponent').catch(() => ({
    default: () => <div>Failed to load component</div>
  }))
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">React.memo và useMemo:</h4>
        <CodeBlock>
{`import React, { memo, useMemo, useCallback } from 'react';

// Memoize component để tránh re-render không cần thiết
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
});

function ProductList({ products, filters }) {
  // Memoize expensive calculations
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return product[key]?.toLowerCase().includes(value.toLowerCase());
      });
    });
  }, [products, filters]);

  // Memoize callback functions
  const handleAddToCart = useCallback((productId) => {
    // Add to cart logic
    console.log('Adding product to cart:', productId);
  }, []);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="PWA - Progressive Web App">
        <p className="mb-4">
          SPA có thể được nâng cấp thành PWA để có trải nghiệm gần giống native app.
        </p>

        <h4 className="text-lg font-semibold mb-3">Service Worker Registration:</h4>
        <CodeBlock>
{`// public/sw.js - Service Worker
const CACHE_NAME = 'my-spa-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Register Service Worker in main app
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Web App Manifest:</h4>
        <CodeBlock language="json">
{`{
  "name": "My React SPA",
  "short_name": "React SPA",
  "description": "A React Single Page Application",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}`}
        </CodeBlock>
      </Card>



      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/react-basics"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← React cơ bản
        </Link>
        <Link
          href="/redux"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tiếp theo: Redux →
        </Link>
      </div>
    </div>
  );
}
