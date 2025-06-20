import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function Redux() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Redux & Redux Toolkit
        </h1>
        <p className="text-xl text-gray-600">
          Quản lý state toàn cục với Redux và Redux Toolkit
        </p>
      </div>

      <Card title="Redux là gì?">
        <p className="mb-4">
          <strong>Redux</strong> là một thư viện JavaScript để quản lý state toàn cục của ứng dụng. 
          Redux theo dõi mô hình Flux architecture với một luồng dữ liệu một chiều (unidirectional data flow).
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Các khái niệm cốt lõi:</h4>
          <ul className="space-y-1 text-blue-700">
            <li>• <strong>Store:</strong> Nơi lưu trữ toàn bộ state của ứng dụng</li>
            <li>• <strong>Action:</strong> Object mô tả điều gì đã xảy ra</li>
            <li>• <strong>Reducer:</strong> Pure function quyết định cách state thay đổi</li>
            <li>• <strong>Dispatch:</strong> Phương thức gửi action đến store</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Luồng hoạt động của Redux:</h4>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <div className="bg-blue-500 text-white px-3 py-2 rounded">UI</div>
              <div className="mt-1">Component</div>
            </div>
            <div className="text-xl">→</div>
            <div className="text-center">
              <div className="bg-green-500 text-white px-3 py-2 rounded">Dispatch</div>
              <div className="mt-1">Action</div>
            </div>
            <div className="text-xl">→</div>
            <div className="text-center">
              <div className="bg-purple-500 text-white px-3 py-2 rounded">Reducer</div>
              <div className="mt-1">Update State</div>
            </div>
            <div className="text-xl">→</div>
            <div className="text-center">
              <div className="bg-orange-500 text-white px-3 py-2 rounded">Store</div>
              <div className="mt-1">New State</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Khi nào dùng Redux:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>Ứng dụng có nhiều component cần share state</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>State thay đổi thường xuyên</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>Logic cập nhật state phức tạp</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>Team lớn cần codebase dễ maintain</div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-orange-600">Khi không cần Redux:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <div>Ứng dụng nhỏ, ít state</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <div>State chỉ dùng trong một component</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <div>UI đơn giản, ít tương tác</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <div>React Context API đã đủ</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Redux Classic Setup">
        <p className="mb-4">
          Cách setup Redux truyền thống (trước khi có Redux Toolkit).
        </p>

        <h4 className="text-lg font-semibold mb-3">Cài đặt Redux:</h4>
        <CodeBlock language="bash">
{`npm install redux react-redux`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Actions:</h4>
        <CodeBlock>
{`// actions/todoActions.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_FILTER = 'SET_FILTER';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

// Async Action với Redux Thunk
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_TODOS_START' });
      const response = await fetch('/api/todos');
      const todos = await response.json();
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
    } catch (error) {
      dispatch({ type: 'FETCH_TODOS_ERROR', payload: error.message });
    }
  };
};`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Reducers:</h4>
        <CodeBlock>
{`// reducers/todoReducer.js
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoActions';

const initialState = {
  todos: [],
  loading: false,
  error: null
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
      
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      
    case 'FETCH_TODOS_START':
      return { ...state, loading: true, error: null };
      
    case 'FETCH_TODOS_SUCCESS':
      return { ...state, loading: false, todos: action.payload };
      
    case 'FETCH_TODOS_ERROR':
      return { ...state, loading: false, error: action.payload };
      
    default:
      return state;
  }
}

// reducers/index.js - Root Reducer
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  todos: todoReducer,
  filter: filterReducer
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Store Setup:</h4>
        <CodeBlock>
{`// store/index.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// index.js - App entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Sử dụng trong Components:</h4>
        <CodeBlock>
{`// components/TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions/todoActions';

function TodoApp() {
  const [inputText, setInputText] = useState('');
  
  // Lấy state từ store
  const { todos, loading, error } = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  
  // Dispatch actions
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addTodo(inputText.trim()));
      setInputText('');
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Redux Toolkit (RTK)">
        <p className="mb-4">
          <strong>Redux Toolkit</strong> là cách được khuyến nghị để viết Redux logic. 
          RTK giúp giảm boilerplate code và cung cấp các best practices mặc định.
        </p>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-800 mb-2">Lợi ích của Redux Toolkit:</h4>
          <ul className="space-y-1 text-green-700">
            <li>• Ít boilerplate code hơn</li>
            <li>• Immutable updates được xử lý tự động (Immer)</li>
            <li>• Tích hợp sẵn Redux DevTools</li>
            <li>• Built-in middleware cho async logic</li>
            <li>• TypeScript support tốt hơn</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Cài đặt Redux Toolkit:</h4>
        <CodeBlock language="bash">
{`npm install @reduxjs/toolkit react-redux`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">createSlice - Tạo Reducer và Actions:</h4>
        <CodeBlock>
{`// features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    // RTK tự động tạo action creators
    addTodo: (state, action) => {
      // Immer cho phép "mutate" state trực tiếp
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

// Export actions (tự động được tạo)
export const { addTodo, toggleTodo, deleteTodo, setLoading, setError } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">configureStore - Setup Store:</h4>
        <CodeBlock>
{`// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer
  },
  // Middleware và DevTools được setup tự động
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">createAsyncThunk - Async Actions:</h4>
        <CodeBlock>
{`// features/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk cho fetch todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/todos');
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk cho create todo
export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoText, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: todoText })
      });
      if (!response.ok) throw new Error('Failed to create todo');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    // Synchronous reducers
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create todo
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;`}
        </CodeBlock>
      </Card>

      <Card title="RTK Query - Data Fetching">
        <p className="mb-4">
          <strong>RTK Query</strong> là một add-on cho Redux Toolkit chuyên dành cho data fetching và caching.
        </p>

        <h4 className="text-lg font-semibold mb-3">Setup RTK Query:</h4>
        <CodeBlock>
{`// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  tagTypes: ['Todo', 'User'],
  endpoints: (builder) => ({
    // Queries (GET)
    getTodos: builder.query({
      query: () => 'todos',
      providesTags: ['Todo']
    }),
    
    getTodo: builder.query({
      query: (id) => \`todos/\${id}\`,
      providesTags: (result, error, id) => [{ type: 'Todo', id }]
    }),
    
    // Mutations (POST, PUT, DELETE)
    createTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo
      }),
      invalidatesTags: ['Todo']
    }),
    
    updateTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: \`todos/\${id}\`,
        method: 'PUT',
        body: patch
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todo', id }]
    }),
    
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: \`todos/\${id}\`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']
    })
  })
});

// Export hooks được tự động tạo
export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = api;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Sử dụng RTK Query trong Component:</h4>
        <CodeBlock>
{`// components/TodoList.js
import React from 'react';
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from '../services/api';

function TodoList() {
  // Query hook tự động fetch data
  const {
    data: todos = [],
    error,
    isLoading,
    refetch
  } = useGetTodosQuery();

  // Mutation hooks
  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleAddTodo = async (text) => {
    try {
      await createTodo({ text, completed: false }).unwrap();
      // Tự động refetch do invalidatesTags
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      await updateTodo({
        id: todo.id,
        completed: !todo.completed
      }).unwrap();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id).unwrap();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => handleAddTodo('New Todo')}>
        Add Todo
      </button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Advanced RTK Query Features:</h4>
        <CodeBlock>
{`// Optimistic Updates
const updateTodo = builder.mutation({
  query: ({ id, ...patch }) => ({
    url: \`todos/\${id}\`,
    method: 'PUT',
    body: patch
  }),
  async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
    // Optimistically update
    const patchResult = dispatch(
      api.util.updateQueryData('getTodos', undefined, (draft) => {
        const todo = draft.find(todo => todo.id === id);
        if (todo) Object.assign(todo, patch);
      })
    );
    
    try {
      await queryFulfilled;
    } catch {
      // Revert on failure
      patchResult.undo();
    }
  }
});

// Conditional Fetching
function UserProfile({ userId }) {
  const { data: user } = useGetUserQuery(userId, {
    skip: !userId, // Chỉ fetch khi có userId
    pollingInterval: 30000, // Poll every 30 seconds
    refetchOnMountOrArgChange: true
  });

  return user ? <div>{user.name}</div> : null;
}

// Manual cache manipulation
function TodoManager() {
  const dispatch = useDispatch();
  
  const addTodoToCache = (newTodo) => {
    dispatch(
      api.util.updateQueryData('getTodos', undefined, (draft) => {
        draft.push(newTodo);
      })
    );
  };

  const prefetchTodo = (id) => {
    dispatch(api.util.prefetch('getTodo', id, { force: true }));
  };

  return (
    <div>
      <button onClick={() => prefetchTodo(1)}>
        Prefetch Todo 1
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Best Practices cho Redux">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-600">Structure và Organization:</h4>
            <CodeBlock>
{`// Feature-based folder structure
src/
  features/
    todos/
      todoSlice.js
      TodoList.js
      TodoItem.js
      index.js
    users/
      userSlice.js
      UserProfile.js
      index.js
  services/
    api.js
  store/
    index.js
  hooks/
    redux.js  // Typed hooks

// hooks/redux.js - Typed hooks
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Normalized State Shape:</h4>
            <CodeBlock>
{`// Thay vì array of objects
const badState = {
  todos: [
    { id: 1, text: 'Learn Redux', userId: 1 },
    { id: 2, text: 'Build app', userId: 1 }
  ],
  users: [
    { id: 1, name: 'John' }
  ]
};

// Sử dụng normalized state
const goodState = {
  todos: {
    byId: {
      1: { id: 1, text: 'Learn Redux', userId: 1 },
      2: { id: 2, text: 'Build app', userId: 1 }
    },
    allIds: [1, 2]
  },
  users: {
    byId: {
      1: { id: 1, name: 'John' }
    },
    allIds: [1]
  }
};

// Sử dụng createEntityAdapter
import { createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
  loading: false,
  error: null
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todosAdapter.addOne,
    todosLoaded: todosAdapter.setAll,
    todoUpdated: todosAdapter.updateOne,
    todoRemoved: todosAdapter.removeOne
  }
});

// Selectors
export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds
} = todosAdapter.getSelectors(state => state.todos);`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-purple-600">Performance Optimization:</h4>
            <CodeBlock>
{`// Sử dụng memoized selectors
import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state) => state.todos.items;
const selectFilter = (state) => state.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);

// Component sử dụng memoized selector
function TodoList() {
  const filteredTodos = useAppSelector(selectFilteredTodos);
  
  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// Shallow equal comparison
import { shallowEqual } from 'react-redux';

const { todos, filter } = useAppSelector(
  state => ({ todos: state.todos, filter: state.filter }),
  shallowEqual
);`}
            </CodeBlock>
          </div>
        </div>
      </Card>

      <Card title="Redux DevTools">
        <p className="mb-4">
          Redux DevTools Extension giúp debug và monitor Redux state changes.
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Tính năng chính:</h4>
          <ul className="space-y-1 text-yellow-700">
            <li>• Xem lịch sử các actions và state changes</li>
            <li>• Time-travel debugging (quay lại trạng thái trước đó)</li>
            <li>• Dispatch actions trực tiếp từ devtools</li>
            <li>• Monitor performance và memory usage</li>
            <li>• Export/import state để test</li>
          </ul>
        </div>

        <CodeBlock>
{`// Setup DevTools với Redux Toolkit (automatic)
const store = configureStore({
  reducer: rootReducer,
  // DevTools được enable tự động trong development
});

// Custom DevTools config
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production' && {
    trace: true,
    traceLimit: 25,
    actionSanitizer: (action) => ({
      ...action,
      // Hide sensitive data
      payload: action.type.includes('password') ? '***' : action.payload
    }),
    stateSanitizer: (state) => ({
      ...state,
      // Hide sensitive state
      auth: { ...state.auth, token: '***' }
    })
  }
});

// Action debugging
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => {
        console.log('Preparing addTodo action:', text);
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
          }
        };
      }
    }
  }
});`}
        </CodeBlock>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/spa"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← SPA
        </Link>
        <Link
          href="/styling"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tiếp theo: Styling →
        </Link>
      </div>
    </div>
  );
}
