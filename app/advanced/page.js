// ...existing code...

// Tìm phần ShoppingApp component và thêm import useState, useMemo
import Link from 'next/link';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

export default function Advanced() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">React Nâng Cao</h1>
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
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
      return initialValue;
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
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue];
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
  };

  return { data, loading, error, refetch };
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
}`}
        </CodeBlock>
      </Card>

      <Card title="Performance Optimization">
        <h4 className="text-lg font-semibold mb-3">React.memo cho Function Components:</h4>
        <CodeBlock>
          {`import React, { memo, useMemo, useCallback, useState } from 'react';

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

function ShoppingApp() {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
    { id: 2, name: 'Mouse', price: 25, quantity: 2 }
  ]);
  const [filter, setFilter] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  // Memoize expensive calculations
  const filteredAndSortedItems = useMemo(() => {
    console.log('Filtering and sorting items...');

    return items
      .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]);

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

  // Memoize computed values - SỬA LỖI: Thêm totalPrice
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
      <div>Selected: {selectedItemsCount} items ($ {totalPrice})</div>
      <div>Filter: {filter}</div>
      {/* Rest of component */}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Advanced Hooks">
        <h4 className="text-lg font-semibold mb-3">useReducer cho Complex State:</h4>
        <CodeBlock>
          {`import { useReducer, useMemo } from 'react';

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
      {/* TodoInput, TodoFilters, TodoList components */}
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error}</div>}
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
    if (typeof window !== 'undefined') {
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
    }
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
              <pre>{this.state.errorInfo?.componentStack}</pre>
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
          href="/mysql"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          MySQL →
        </Link>
      </div>
    </div>
  );
}
