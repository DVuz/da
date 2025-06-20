import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function Advanced() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          React Nâng Cao
        </h1>
        <p className="text-xl text-gray-600">
          Hooks nâng cao, Performance Optimization, Custom Hooks và các Pattern phát triển
        </p>
      </div>

      <Card title="Custom Hooks">
        <p className="mb-4">
          Custom Hooks cho phép tái sử dụng logic stateful giữa các components.
        </p>

        <h4 className="text-lg font-semibold mb-3">useLocalStorage Hook:</h4>
        <CodeBlock>
{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Lấy giá trị từ localStorage hoặc sử dụng initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  // Wrapper function để update state và localStorage
  const setValue = (value) => {
    try {
      // Cho phép value là function như useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue];
}

// Sử dụng useLocalStorage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'en');

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
          </select>
        </label>
      </div>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">useFetch Hook:</h4>
        <CodeBlock>
{`import { useState, useEffect, useRef } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Ref để track nếu component đã unmount
  const cancelRequest = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        cancelRequest.current = false;
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
          },
        });

        if (!cancelRequest.current) {
          if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
          }

          const result = await response.json();
          setData(result);
        }
      } catch (err) {
        if (!cancelRequest.current) {
          setError(err.message);
        }
      } finally {
        if (!cancelRequest.current) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      cancelRequest.current = true;
    };
  }, [url, JSON.stringify(options)]);

  // Manual refetch function
  const refetch = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };

  return { data, loading, error, refetch };
}

// Hook với caching
function useFetchWithCache(url, options = {}) {
  const cache = useRef(new Map());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = url + JSON.stringify(options);
    
    // Check cache first
    if (cache.current.has(cacheKey)) {
      setData(cache.current.get(cacheKey));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Fetch failed');

        const result = await response.json();
        
        // Cache the result
        cache.current.set(cacheKey, result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
}

// Sử dụng
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">useDebounce Hook:</h4>
        <CodeBlock>
{`import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Search component với debouncing
function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      searchUsers(debouncedSearchTerm).then(users => {
        setResults(users);
        setLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {loading && <div>Searching...</div>}
      
      <ul>
        {results.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

async function searchUsers(term) {
  const response = await fetch(\`/api/search?q=\${encodeURIComponent(term)}\`);
  return response.json();
}`}
        </CodeBlock>
      </Card>

      <Card title="Performance Optimization">
        <h4 className="text-lg font-semibold mb-3">React.memo cho Function Components:</h4>
        <CodeBlock>
{`import React, { memo } from 'react';

// Basic memo
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('ExpensiveComponent rendered');
  
  // Expensive calculations
  const processedData = data.map(item => ({
    ...item,
    processed: true
  }));

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

// Memo với custom comparison
const UserCard = memo(function UserCard({ user, onClick }) {
  return (
    <div onClick={() => onClick(user.id)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  // Return true nếu props không thay đổi (skip re-render)
  return (
    prevProps.user.id === nextProps.user.id &&
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.email === nextProps.user.email
  );
});

// Parent component
function UserList({ users }) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Callback được memoized để tránh re-render UserCard
  const handleUserClick = useCallback((userId) => {
    setSelectedUserId(userId);
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={handleUserClick}
        />
      ))}
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">useMemo và useCallback:</h4>
        <CodeBlock>
{`import { useMemo, useCallback, useState } from 'react';

function ExpensiveList({ items, filter, onItemClick }) {
  // Memoize expensive calculations
  const filteredAndSortedItems = useMemo(() => {
    console.log('Filtering and sorting items...');
    
    return items
      .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]);

  // Memoize expensive transformations
  const itemsWithMetadata = useMemo(() => {
    return filteredAndSortedItems.map(item => ({
      ...item,
      displayName: \`\${item.name} (\${item.category})\`,
      isNew: Date.now() - new Date(item.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000
    }));
  }, [filteredAndSortedItems]);

  return (
    <div>
      {itemsWithMetadata.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

function ShoppingApp() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  // Memoize callback functions
  const handleItemClick = useCallback((itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  // Memoize computed values
  const selectedItemsCount = useMemo(() => {
    return selectedItems.length;
  }, [selectedItems]);

  const totalPrice = useMemo(() => {
    return selectedItems.reduce((total, itemId) => {
      const item = items.find(item => item.id === itemId);
      return total + (item?.price || 0);
    }, 0);
  }, [selectedItems, items]);

  return (
    <div>
      <SearchFilter value={filter} onChange={handleFilterChange} />
      <div>Selected: {selectedItemsCount} items (${totalPrice})</div>
      <ExpensiveList 
        items={items}
        filter={filter}
        onItemClick={handleItemClick}
      />
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Code Splitting với React.lazy:</h4>
        <CodeBlock>
{`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => 
  import('./pages/Profile').then(module => ({
    default: module.ProfilePage
  }))
);

// Component với retry logic
const LazyComponentWithRetry = lazy(() => 
  import('./HeavyComponent').catch(() => ({
    default: () => <div>Failed to load component. Please refresh.</div>
  }))
);

// Loading component
function PageLoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2">Loading page...</span>
    </div>
  );
}

// Error Boundary cho lazy components
class LazyLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy load error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2>Something went wrong loading this page.</h2>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <LazyLoadErrorBoundary>
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<PageLoadingSpinner />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <Suspense fallback={<PageLoadingSpinner />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <Suspense fallback={<PageLoadingSpinner />}>
              <Profile />
            </Suspense>
          } 
        />
      </Routes>
    </LazyLoadErrorBoundary>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Advanced Hooks">
        <h4 className="text-lg font-semibold mb-3">useReducer cho Complex State:</h4>
        <CodeBlock>
{`import { useReducer } from 'react';

// Action types
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_FILTER: 'SET_FILTER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
};

// Initial state
const initialState = {
  todos: [],
  filter: 'ALL', // ALL, ACTIVE, COMPLETED
  loading: false,
  error: null
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
            createdAt: new Date()
          }
        ]
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Action creators
  const actions = {
    addTodo: (text) => dispatch({ type: ACTIONS.ADD_TODO, payload: text }),
    toggleTodo: (id) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id }),
    deleteTodo: (id) => dispatch({ type: ACTIONS.DELETE_TODO, payload: id }),
    setFilter: (filter) => dispatch({ type: ACTIONS.SET_FILTER, payload: filter }),
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTIONS.SET_ERROR, payload: error })
  };

  // Derived state
  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'ACTIVE':
        return state.todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <div>
      <TodoInput onAdd={actions.addTodo} />
      <TodoFilters currentFilter={state.filter} onFilterChange={actions.setFilter} />
      <TodoList 
        todos={filteredTodos}
        onToggle={actions.toggleTodo}
        onDelete={actions.deleteTodo}
      />
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error}</div>}
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">useRef cho DOM và Values:</h4>
        <CodeBlock>
{`import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

// Auto-focus input
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused input" />;
}

// Scroll to element
function ScrollToTop() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={topRef}>Top of page</div>
      {/* Long content */}
      <div style={{ height: '2000px' }}>Long content...</div>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}

// Store mutable values
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const renderCountRef = useRef(0);

  // Track renders without causing re-renders
  renderCountRef.current += 1;

  const startTimer = () => {
    if (intervalRef.current) return; // Already running
    
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  useEffect(() => {
    return () => stopTimer(); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Renders: {renderCountRef.current}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

// Forward ref với useImperativeHandle
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    },
    getValue: () => inputRef.current?.value || ''
  }));

  return <input ref={inputRef} {...props} />;
});

function Parent() {
  const fancyInputRef = useRef();

  const handleFocus = () => fancyInputRef.current?.focus();
  const handleClear = () => fancyInputRef.current?.clear();
  const handleGetValue = () => {
    const value = fancyInputRef.current?.getValue();
    alert(\`Current value: \${value}\`);
  };

  return (
    <div>
      <FancyInput ref={fancyInputRef} placeholder="Fancy input" />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleGetValue}>Get Value</button>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Error Boundaries">
        <h4 className="text-lg font-semibold mb-3">Class-based Error Boundary:</h4>
        <CodeBlock>
{`import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state để hiển thị fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Report to error reporting service
    this.reportError(error, errorInfo);
  }

  reportError = (error, errorInfo) => {
    // Send to logging service
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: error.toString(),
        errorInfo: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      })
    }).catch(console.error);
  };

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>⚠️ Something went wrong</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>Error details (click to expand)</summary>
              <p><strong>Error:</strong> {this.state.error && this.state.error.toString()}</p>
              <p><strong>Stack trace:</strong></p>
              <pre>{this.state.errorInfo.componentStack}</pre>
            </details>
            <div className="error-actions">
              <button onClick={this.handleRetry} className="retry-button">
                Try Again
              </button>
              <button onClick={() => window.location.reload()} className="reload-button">
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook-based error boundary (custom hook)
function useErrorHandler() {
  const [error, setError] = useState(null);

  const throwError = useCallback((error) => {
    setError(() => {
      throw error;
    });
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { throwError, resetError };
}

// Async error boundary với React Query
function AsyncErrorBoundary({ children, fallback, onError }) {
  return (
    <ErrorBoundary
      FallbackComponent={fallback}
      onError={(error, errorInfo) => {
        console.error('Async error:', error);
        onError?.(error, errorInfo);
      }}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}

// Sử dụng Error Boundary
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <main>
        <ErrorBoundary>
          <UserProfile />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <ProductList />
        </ErrorBoundary>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Render Props Pattern">
        <CodeBlock>
{`// Mouse tracker với render props
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div 
        style={{ height: '100vh' }} 
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Sử dụng render props
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          <h1>Mouse position</h1>
          <p>X: {x}, Y: {y}</p>
          <div 
            style={{
              position: 'absolute',
              left: x - 10,
              top: y - 10,
              width: 20,
              height: 20,
              background: 'red',
              borderRadius: '50%'
            }}
          />
        </div>
      )}
    />
  );
}

// Data fetcher với render props
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

// Sử dụng DataFetcher
function UserList() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        
        return (
          <ul>
            {data?.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

// Hook version của render props pattern
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

// Sử dụng hook thay vì render props
function MouseDisplay() {
  const { x, y } = useMousePosition();
  
  return (
    <div>
      <p>Mouse position: {x}, {y}</p>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Higher-Order Components (HOCs)">
        <CodeBlock>
{`// withLoading HOC
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.loading) {
      return (
        <div className="loading-container">
          <div className="spinner">Loading...</div>
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// withAuth HOC
function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const { user, isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
      return <LoginForm />;
    }
    
    return <WrappedComponent {...props} user={user} />;
  };
}

// withErrorHandling HOC
function withErrorHandling(WrappedComponent) {
  return function WithErrorHandlingComponent(props) {
    const [error, setError] = useState(null);
    
    const handleError = (error) => {
      setError(error);
      console.error('Component error:', error);
    };
    
    if (error) {
      return (
        <div className="error-container">
          <h3>Something went wrong</h3>
          <p>{error.message}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      );
    }
    
    return (
      <WrappedComponent 
        {...props} 
        onError={handleError}
      />
    );
  };
}

// Compose multiple HOCs
function compose(...hocs) {
  return function(WrappedComponent) {
    return hocs.reduceRight((acc, hoc) => hoc(acc), WrappedComponent);
  };
}

// Component sử dụng HOCs
const UserProfile = ({ user, loading, onError }) => {
  const [userDetails, setUserDetails] = useState(null);
  
  useEffect(() => {
    fetchUserDetails(user.id)
      .then(setUserDetails)
      .catch(onError);
  }, [user.id, onError]);
  
  return (
    <div>
      <h2>{user.name}</h2>
      {userDetails && (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>
      )}
    </div>
  );
};

// Enhanced component với multiple HOCs
const EnhancedUserProfile = compose(
  withAuth,
  withLoading,
  withErrorHandling
)(UserProfile);

// Sử dụng
function App() {
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      <EnhancedUserProfile loading={loading} />
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Compound Components Pattern">
        <CodeBlock>
{`import { createContext, useContext, Children, cloneElement } from 'react';

// Modal compound component
const ModalContext = createContext();

function Modal({ children, isOpen, onClose }) {
  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

Modal.Header = function ModalHeader({ children }) {
  const { onClose } = useContext(ModalContext);
  
  return (
    <div className="modal-header">
      {children}
      <button onClick={onClose} className="close-button">×</button>
    </div>
  );
};

Modal.Body = function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
};

// Accordion compound component
const AccordionContext = createContext();

function Accordion({ children, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(new Set());
  
  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      
      return newSet;
    });
  };
  
  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="accordion">
        {Children.map(children, (child, index) =>
          cloneElement(child, { index })
        )}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = function AccordionItem({ children, index }) {
  const { openItems } = useContext(AccordionContext);
  const isOpen = openItems.has(index);
  
  return (
    <div className={|accordion-item \${isOpen ? 'open' : ''}|}>
      {Children.map(children, child =>
        cloneElement(child, { index, isOpen })
      )}
    </div>
  );
};

Accordion.Header = function AccordionHeader({ children, index }) {
  const { toggleItem } = useContext(AccordionContext);
  
  return (
    <div 
      className="accordion-header"
      onClick={() => toggleItem(index)}
    >
      {children}
    </div>
  );
};

Accordion.Panel = function AccordionPanel({ children, isOpen }) {
  return (
    <div className={|accordion-panel \${isOpen ? 'open' : 'closed'}|}>
      {isOpen && children}
    </div>
  );
};

// Sử dụng compound components
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>
          <h2>Modal Title</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </Modal.Footer>
      </Modal>
      
      <Accordion allowMultiple>
        <Accordion.Item>
          <Accordion.Header>
            <h3>Section 1</h3>
          </Accordion.Header>
          <Accordion.Panel>
            <p>Content for section 1</p>
          </Accordion.Panel>
        </Accordion.Item>
        
        <Accordion.Item>
          <Accordion.Header>
            <h3>Section 2</h3>
          </Accordion.Header>
          <Accordion.Panel>
            <p>Content for section 2</p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Accessibility (a11y) Best Practices">
        <CodeBlock>
{`// Accessible Modal component
import { useEffect, useRef } from 'react';

function AccessibleModal({ isOpen, onClose, children, title }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Store currently focused element
      previousFocusRef.current = document.activeElement;
      
      // Focus modal
      modalRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus
      previousFocusRef.current?.focus();
      
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
    
    // Trap focus within modal
    if (event.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements?.length) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <h2 id="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// Accessible Form components
function FormField({ 
  label, 
  error, 
  required, 
  children, 
  helpText,
  ...props 
}) {
  const id = useId();
  const errorId = \`\${id}-error\`;
  const helpId = \`\${id}-help\`;

  return (
    <div className="form-field">
      <label htmlFor={id} className={required ? 'required' : ''}>
        {label}
        {required && <span aria-label="required">*</span>}
      </label>
      
      {cloneElement(children, {
        id,
        'aria-describedby': [
          error ? errorId : null,
          helpText ? helpId : null
        ].filter(Boolean).join(' '),
        'aria-invalid': error ? 'true' : 'false',
        required,
        ...props
      })}
      
      {helpText && (
        <div id={helpId} className="help-text">
          {helpText}
        </div>
      )}
      
      {error && (
        <div id={errorId} className="error-text" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

// Accessible Button với loading state
function AccessibleButton({ 
  loading, 
  children, 
  disabled, 
  onClick,
  ...props 
}) {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      aria-describedby={loading ? 'loading-message' : undefined}
      {...props}
    >
      {loading ? (
        <>
          <span aria-hidden="true" className="spinner" />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

// Screen reader only text
function ScreenReaderOnly({ children }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// Live region for announcements
function LiveRegion({ message, level = 'polite' }) {
  return (
    <div
      aria-live={level}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

// Accessible dropdown
function AccessibleDropdown({ options, value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          );
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          );
        }
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          onChange(options[focusedIndex]);
          setIsOpen(false);
          buttonRef.current?.focus();
        } else {
          setIsOpen(!isOpen);
        }
        break;
        
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
    }
  };

  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
      >
        {value || 'Select an option'}
      </button>
      
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby="dropdown-label"
        >
          {options.map((option, index) => (
            <li
              key={option}
              role="option"
              aria-selected={option === value}
              className={index === focusedIndex ? 'focused' : ''}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/styling"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← Styling
        </Link>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Về trang chủ →
        </Link>
      </div>
    </div>
  );
}
