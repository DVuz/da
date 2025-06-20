import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function Express() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Express.js - Web Framework cho Node.js
        </h1>
        <p className="text-xl text-gray-600">
          Tìm hiểu về Express.js từ cơ bản đến nâng cao, middleware, routing và integration với database
        </p>
      </div>

      <Card title="Express.js là gì?">
        <p className="mb-4">
          <strong>Express.js</strong> là một web framework minimal và linh hoạt cho Node.js, 
          cung cấp một bộ tính năng mạnh mẽ để phát triển web và mobile applications.
        </p>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-800 mb-2">Tại sao Express.js quan trọng?</h4>
          <ul className="space-y-1 text-green-700">
            <li>• Là cầu nối giữa React frontend và MySQL/database backend</li>
            <li>• Tạo RESTful APIs để thao tác với dữ liệu</li>
            <li>• Xử lý authentication, authorization</li>
            <li>• Middleware system linh hoạt và mạnh mẽ</li>
            <li>• Hỗ trợ routing, request handling hiệu quả</li>
            <li>• Cộng đồng lớn và ecosystem phong phú</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Đặc điểm chính của Express.js:</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold mb-2 text-blue-600">Ưu điểm:</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Minimal:</strong> Lightweight, không bloated</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Flexible:</strong> Không ràng buộc cấu trúc</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Fast:</strong> Hiệu suất cao, low overhead</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Unopinionated:</strong> Tự do thiết kế architecture</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div><strong>Middleware:</strong> Hệ thống plugin mạnh mẽ</div>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2 text-purple-600">Use Cases:</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <div>RESTful APIs và GraphQL</div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <div>Web Applications (SSR)</div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <div>Microservices Architecture</div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <div>Real-time Applications (WebSocket)</div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <div>Database Integration Layer</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Cài đặt và Setup">
        <p className="mb-4">
          Hướng dẫn cài đặt Express.js và setup project cơ bản.
        </p>

        <h4 className="text-lg font-semibold mb-3">Khởi tạo project mới:</h4>
        <CodeBlock language="bash">
{`# Tạo thư mục project
mkdir my-express-app
cd my-express-app

# Khởi tạo Node.js project
npm init -y

# Cài đặt Express
npm install express

# Cài đặt các packages thường dùng
npm install cors dotenv bcrypt jsonwebtoken
npm install helmet morgan compression rate-limiter-flexible

# Development dependencies
npm install -D nodemon jest supertest eslint prettier`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Cấu trúc project được recommend:</h4>
        <CodeBlock language="text">
{`my-express-app/
├── src/
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── app.js          # Express app setup
├── tests/               # Test files
├── config/              # Configuration files
├── public/              # Static files
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── server.js           # Entry point`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Express Server cơ bản:</h4>
        <CodeBlock>
{`// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(cors());                    // Enable Cross-Origin Requests
app.use(express.json());            // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Express server is running!',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
  console.log(\`📍 http://localhost:\${PORT}\`);
});

module.exports = app;`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Package.json scripts:</h4>
        <CodeBlock language="json">
{`{
  "name": "my-express-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"
  }
}`}
        </CodeBlock>
      </Card>

      <Card title="Middleware System">
        <p className="mb-4">
          Middleware là heart của Express.js, cho phép bạn thực thi code trong request-response cycle.
        </p>

        <h4 className="text-lg font-semibold mb-3">Middleware hoạt động như thế nào?</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-blue-700">
            Middleware functions có quyền truy cập vào request object (req), response object (res), 
            và next middleware function trong request-response cycle. Chúng có thể:
          </p>
          <ul className="mt-2 space-y-1 text-blue-700">
            <li>• Thực thi code</li>
            <li>• Thay đổi req và res objects</li>
            <li>• Kết thúc request-response cycle</li>
            <li>• Gọi next middleware trong stack</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Các loại Middleware:</h4>
        <CodeBlock>
{`// 1. Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Quan trọng: phải call next() để tiếp tục
});

// 2. Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// 3. Error-handling middleware (4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 4. Built-in middleware
app.use(express.json());        // Parse JSON
app.use(express.static('public')); // Serve static files

// 5. Third-party middleware
const cors = require('cors');
app.use(cors());

const helmet = require('helmet');
app.use(helmet()); // Security headers`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Custom Middleware Examples:</h4>
        <CodeBlock>
{`// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user; // Attach user to request
    next();
  });
};

// Logging middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get('User-Agent') || 'Unknown';

  console.log(\`[\${timestamp}] \${method} \${url} - \${userAgent}\`);
  next();
};

// Rate limiting middleware
const createRateLimit = (windowMs, max) => {
  const requests = new Map();

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean old requests
    if (requests.has(ip)) {
      requests.set(ip, requests.get(ip).filter(time => time > windowStart));
    } else {
      requests.set(ip, []);
    }

    const requestsInWindow = requests.get(ip);

    if (requestsInWindow.length >= max) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: Math.ceil((requestsInWindow[0] + windowMs - now) / 1000)
      });
    }

    requestsInWindow.push(now);
    next();
  };
};

// Usage
app.use(requestLogger);
app.use('/api', createRateLimit(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/api/protected', authenticateToken);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Middleware Execution Order:</h4>
        <CodeBlock>
{`const express = require('express');
const app = express();

// 1. Global middleware - chạy cho tất cả requests
app.use((req, res, next) => {
  console.log('1. Global middleware');
  next();
});

// 2. Route-specific middleware
app.get('/api/users', 
  (req, res, next) => {
    console.log('2. Route middleware 1');
    next();
  },
  (req, res, next) => {
    console.log('3. Route middleware 2');
    next();
  },
  (req, res) => {
    console.log('4. Route handler');
    res.json({ users: [] });
  }
);

// 3. Error middleware - luôn ở cuối
app.use((err, req, res, next) => {
  console.log('5. Error middleware');
  res.status(500).json({ error: err.message });
});

// 4. 404 middleware - sau tất cả routes
app.use((req, res) => {
  console.log('6. 404 middleware');
  res.status(404).json({ error: 'Not found' });
});`}
        </CodeBlock>

        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Middleware Best Practices:</h5>
          <ul className="space-y-1 text-yellow-700 text-sm">
            <li>• Luôn call next() trừ khi bạn muốn kết thúc response</li>
            <li>• Error middleware phải có 4 parameters (err, req, res, next)</li>
            <li>• Đặt middleware theo thứ tự execution mong muốn</li>
            <li>• Sử dụng early returns để tránh call next() nhiều lần</li>
            <li>• Handle async errors properly với try-catch</li>
            <li>• Log errors nhưng không expose sensitive information</li>
          </ul>
        </div>
      </Card>

      <Card title="Routing và Route Handlers">
        <p className="mb-4">
          Routing xác định cách application respond với client requests đến specific endpoints.
        </p>

        <h4 className="text-lg font-semibold mb-3">Basic Routing:</h4>
        <CodeBlock>
{`const express = require('express');
const app = express();

// HTTP Methods
app.get('/', (req, res) => {
  res.json({ message: 'GET request to the homepage' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'POST request to create user' });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: \`PUT request to update user \${req.params.id}\` });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: \`DELETE request to remove user \${req.params.id}\` });
});

// Handle multiple HTTP methods
app.route('/users/:id')
  .get((req, res) => {
    res.json({ message: 'Get user' });
  })
  .put((req, res) => {
    res.json({ message: 'Update user' });
  })
  .delete((req, res) => {
    res.json({ message: 'Delete user' });
  });`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Route Parameters:</h4>
        <CodeBlock>
{`// Route parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});

// Optional parameters
app.get('/posts/:id?', (req, res) => {
  if (req.params.id) {
    res.json({ post: { id: req.params.id } });
  } else {
    res.json({ posts: [] });
  }
});

// Wildcard routes
app.get('/files/*', (req, res) => {
  const filePath = req.params[0]; // Captures everything after /files/
  res.json({ filePath });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;
  res.json({ 
    query: q, 
    page: parseInt(page), 
    limit: parseInt(limit) 
  });
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Express Router:</h4>
        <CodeBlock>
{`// routes/users.js
const express = require('express');
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Users router middleware');
  next();
});

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    
    // Simulate database query
    const users = await getUsersFromDB({ page, limit, search });
    
    res.json({
      users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: users.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ 
        error: 'Username, email and password are required' 
      });
    }
    
    const newUser = await createUser({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Username or email already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Advanced Routing Patterns:</h4>
        <CodeBlock>
{`// Route with regex pattern
app.get(/.*fly$/, (req, res) => {
  res.json({ message: 'Ends with "fly"' });
});

// Named route parameters with regex
app.get('/users/:id(\\d+)', (req, res) => {
  // Only matches numeric IDs
  res.json({ userId: req.params.id });
});

// Route handlers array
const authenticate = (req, res, next) => {
  // Authentication logic
  next();
};

const authorize = (req, res, next) => {
  // Authorization logic
  next();
};

app.get('/admin/*', [authenticate, authorize], (req, res) => {
  res.json({ message: 'Admin area' });
});

// Conditional routing
app.get('/api/data', (req, res, next) => {
  if (req.query.legacy === 'true') {
    // Handle legacy API
    res.json({ version: 'legacy', data: [] });
  } else {
    next(); // Continue to next handler
  }
}, (req, res) => {
  // Handle modern API
  res.json({ version: 'v2', data: [] });
});

// Error handling in routes
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    // Pass error to error middleware
    next(error);
  }
});`}
        </CodeBlock>
      </Card>

      <Card title="Request và Response Objects">
        <p className="mb-4">
          Hiểu rõ về req và res objects để xử lý HTTP requests và responses hiệu quả.
        </p>

        <h4 className="text-lg font-semibold mb-3">Request Object (req):</h4>
        <CodeBlock>
{`app.post('/api/example', (req, res) => {
  // Request properties
  console.log('Method:', req.method);           // POST
  console.log('URL:', req.url);                 // /api/example?page=1
  console.log('Original URL:', req.originalUrl); // /api/example?page=1
  console.log('Path:', req.path);               // /api/example
  console.log('Protocol:', req.protocol);       // http or https
  console.log('Hostname:', req.hostname);       // localhost
  console.log('IP:', req.ip);                   // Client IP
  console.log('Fresh:', req.fresh);             // Cache validation
  console.log('Stale:', req.stale);             // Opposite of fresh
  console.log('XHR:', req.xhr);                 // AJAX request?

  // Headers
  console.log('Headers:', req.headers);
  console.log('User-Agent:', req.get('User-Agent'));
  console.log('Content-Type:', req.get('Content-Type'));
  console.log('Authorization:', req.get('Authorization'));

  // Parameters
  console.log('Params:', req.params);           // Route parameters
  console.log('Query:', req.query);             // Query string
  console.log('Body:', req.body);               // Request body (with middleware)

  // Cookies (with cookie-parser middleware)
  console.log('Cookies:', req.cookies);
  console.log('Signed Cookies:', req.signedCookies);

  res.json({ received: 'ok' });
});

// File uploads (with multer middleware)
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File:', req.file);
  console.log('Body:', req.body);
  res.json({ uploaded: true });
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Response Object (res):</h4>
        <CodeBlock>
{`app.get('/api/example', (req, res) => {
  // Status codes
  res.status(200);                    // Set status code
  res.sendStatus(404);                // Send status with default message

  // Headers
  res.set('X-Custom-Header', 'value');
  res.set({
    'Content-Type': 'application/json',
    'X-API-Version': '1.0'
  });

  // Sending responses
  res.send('Hello World');            // Send string/buffer/object
  res.json({ message: 'Hello' });     // Send JSON
  res.jsonp({ message: 'Hello' });    // Send JSONP
  res.sendFile('/path/to/file.pdf');  // Send file
  res.download('/path/to/file.pdf');  // Download file
  res.redirect('/login');             // Redirect
  res.redirect(301, '/new-url');      // Redirect with status

  // Cookies
  res.cookie('token', 'abc123', {
    httpOnly: true,
    secure: true,
    maxAge: 3600000 // 1 hour
  });
  res.clearCookie('token');

  // Response methods chaining
  res.status(201)
     .set('Location', '/users/123')
     .json({ id: 123, created: true });
});

// Streaming responses
app.get('/stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Transfer-Encoding': 'chunked'
  });

  let counter = 0;
  const interval = setInterval(() => {
    res.write(\`Chunk \${counter++}\\n\`);
    
    if (counter > 10) {
      res.end('Stream finished');
      clearInterval(interval);
    }
  }, 1000);
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Content Type Handling:</h4>
        <CodeBlock>
{`// JSON responses
app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  });
});

// HTML responses
app.get('/home', (req, res) => {
  res.send(\`
    <html>
      <body>
        <h1>Welcome</h1>
        <p>Current time: \${new Date()}</p>
      </body>
    </html>
  \`);
});

// File downloads
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'uploads', filename);
  
  res.download(filepath, (err) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
    }
  });
});

// Content negotiation
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello', timestamp: Date.now() };
  
  res.format({
    'text/plain': () => {
      res.send(\`\${data.message} at \${data.timestamp}\`);
    },
    'text/html': () => {
      res.send(\`<h1>\${data.message}</h1><p>\${data.timestamp}</p>\`);
    },
    'application/json': () => {
      res.json(data);
    },
    'default': () => {
      res.status(406).send('Not Acceptable');
    }
  });
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Response Helper Functions:</h4>
        <CodeBlock>
{`// Custom response helpers
const responseHelpers = (req, res, next) => {
  // Success responses
  res.success = (data, message = 'Success') => {
    res.json({
      success: true,
      message,
      data,
      timestamp: new Date().toISOString()
    });
  };

  // Error responses
  res.error = (message, statusCode = 500, errors = null) => {
    res.status(statusCode).json({
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString()
    });
  };

  // Paginated responses
  res.paginated = (data, pagination) => {
    res.json({
      success: true,
      data,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: pagination.total,
        pages: Math.ceil(pagination.total / pagination.limit)
      }
    });
  };

  next();
};

app.use(responseHelpers);

// Usage
app.get('/api/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.success(users, 'Users retrieved successfully');
  } catch (error) {
    res.error('Failed to get users', 500);
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const { posts, total } = await getPosts(req.query);
    res.paginated(posts, {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      total
    });
  } catch (error) {
    res.error('Failed to get posts');
  }
});`}
        </CodeBlock>
      </Card>

      <Card title="Error Handling">
        <p className="mb-4">
          Proper error handling là crucial cho production-ready Express applications.
        </p>

        <h4 className="text-lg font-semibold mb-3">Error Middleware:</h4>
        <CodeBlock>
{`// Error handling middleware (must have 4 parameters)
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error('Error Stack:', err.stack);
  console.error('Request URL:', req.url);
  console.error('Request Method:', req.method);
  console.error('Request Headers:', req.headers);

  // Default error response
  let error = {
    success: false,
    message: 'Internal Server Error',
    timestamp: new Date().toISOString()
  };

  // Handle specific error types
  if (err.name === 'ValidationError') {
    error.message = 'Validation Error';
    error.details = err.details;
    return res.status(400).json(error);
  }

  if (err.name === 'UnauthorizedError') {
    error.message = 'Unauthorized';
    return res.status(401).json(error);
  }

  if (err.code === 'ER_DUP_ENTRY') {
    error.message = 'Duplicate entry';
    return res.status(400).json(error);
  }

  if (err.code === 'ENOENT') {
    error.message = 'File not found';
    return res.status(404).json(error);
  }

  // Development vs Production
  if (process.env.NODE_ENV === 'development') {
    error.stack = err.stack;
    error.details = err;
  }

  res.status(err.statusCode || 500).json(error);
};

// Must be the last middleware
app.use(errorHandler);`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Custom Error Classes:</h4>
        <CodeBlock>
{`// Custom error classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message, errors = []) {
    super(message, 400);
    this.errors = errors;
  }
}

class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(\`\${resource} not found\`, 404);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

// Usage in routes
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    
    if (!user) {
      throw new NotFoundError('User');
    }
    
    res.json(user);
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Async error wrapper
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Usage with wrapper
app.get('/posts', asyncHandler(async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
}));`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Global Error Handlers:</h4>
        <CodeBlock>
{`// Uncaught exception handler
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  console.error(err.stack);
  process.exit(1);
});

// Unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  
  server.close(() => {
    process.exit(1);
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});

// 404 handler (for undefined routes)
app.all('*', (req, res, next) => {
  const err = new AppError(\`Can't find \${req.originalUrl} on this server!\`, 404);
  next(err);
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Error Logging:</h4>
        <CodeBlock>
{`const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'express-app' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Enhanced error middleware with logging
const errorHandler = (err, req, res, next) => {
  // Log error details
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString()
  });

  // Send error response
  const error = {
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : err.message,
    timestamp: new Date().toISOString()
  };

  if (process.env.NODE_ENV === 'development') {
    error.stack = err.stack;
  }

  res.status(err.statusCode || 500).json(error);
};`}
        </CodeBlock>
      </Card>

      <Card title="Security và Best Practices">
        <p className="mb-4">
          Các biện pháp bảo mật và best practices cho Express applications.
        </p>

        <h4 className="text-lg font-semibold mb-3">Essential Security Middleware:</h4>
        <CodeBlock>
{`const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');

// Helmet - Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);

// Body parser with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp({
  whitelist: ['sort', 'fields', 'page', 'limit']
}));

// Compression middleware
app.use(compression());`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Authentication & Authorization:</h4>
        <CodeBlock>
{`const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// JWT Authentication
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserById(decoded.id);

    if (!user || !user.is_active) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Role-based authorization
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Access denied. Insufficient permissions.' 
      });
    }

    next();
  };
};

// Password hashing
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Usage
app.get('/api/admin/*', authenticateToken, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin area' });
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Input Validation:</h4>
        <CodeBlock>
{`const Joi = require('joi');

// Validation schemas
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])')).required(),
  full_name: Joi.string().min(2).max(100),
  age: Joi.number().integer().min(13).max(120)
});

const postSchema = Joi.object({
  title: Joi.string().min(5).max(255).required(),
  content: Joi.string().min(10).required(),
  status: Joi.string().valid('draft', 'published', 'archived').default('draft'),
  tags: Joi.array().items(Joi.string().max(50)).max(10)
});

// Validation middleware
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // Get all errors
      stripUnknown: true // Remove unknown properties
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }

    req.body = value; // Use validated and sanitized data
    next();
  };
};

// Usage
app.post('/api/users', validate(userSchema), async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Environment Configuration:</h4>
        <CodeBlock>
{`// config/config.js
require('dotenv').config();

const config = {
  development: {
    port: process.env.PORT || 3000,
    database: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'myapp_dev'
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'dev-secret',
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    },
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
    }
  },
  production: {
    port: process.env.PORT,
    database: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: true
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    },
    cors: {
      origin: process.env.CORS_ORIGIN
    }
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];

// .env file
NODE_ENV=development
PORT=3001
DB_HOST=localhost
DB_USER=myapp_user
DB_PASSWORD=secure_password
DB_NAME=myapp
JWT_SECRET=your-super-secret-jwt-key-that-should-be-very-long
JWT_EXPIRES_IN=24h
CORS_ORIGIN=http://localhost:3000`}
        </CodeBlock>

        <div className="bg-red-50 p-4 rounded-lg mt-6">
          <h5 className="font-semibold text-red-800 mb-2">🔒 Security Checklist:</h5>
          <ul className="space-y-1 text-red-700 text-sm">
            <li>• Luôn sử dụng HTTPS trong production</li>
            <li>• Validate và sanitize tất cả input data</li>
            <li>• Implement proper authentication và authorization</li>
            <li>• Sử dụng environment variables cho sensitive data</li>
            <li>• Enable rate limiting để prevent abuse</li>
            <li>• Set security headers với Helmet</li>
            <li>• Keep dependencies updated (npm audit)</li>
            <li>• Implement proper error handling (don't leak info)</li>
            <li>• Use secure session management</li>
            <li>• Log security events và monitor for attacks</li>
          </ul>
        </div>
      </Card>

      <Card title="Câu hỏi phỏng vấn về Express.js">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Câu hỏi cơ bản:</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">1. Express.js là gì và tại sao nó phổ biến?</p>
                <p className="text-gray-600 mt-1">Express.js là minimal web framework cho Node.js, phổ biến vì lightweight, flexible, có middleware system mạnh mẽ và cộng đồng lớn.</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">2. Middleware trong Express hoạt động như thế nào?</p>
                <p className="text-gray-600 mt-1">Middleware là functions thực thi trong request-response cycle, có thể modify req/res objects hoặc kết thúc cycle. Chúng chạy tuần tự theo thứ tự định nghĩa.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">3. Phân biệt app.use() và app.get()?</p>
                <p className="text-gray-600 mt-1">app.use() định nghĩa middleware cho tất cả HTTP methods, app.get() chỉ cho GET requests. app.use() thường dùng cho middleware global.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">4. Router trong Express là gì?</p>
                <p className="text-gray-600 mt-1">Router là mini-application có thể định nghĩa routes và middleware riêng, giúp tổ chức code và tách biệt logic routing.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">5. Các HTTP methods chính trong REST API?</p>
                <p className="text-gray-600 mt-1">GET (read), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove), HEAD (headers only), OPTIONS (CORS preflight).</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-purple-600">Câu hỏi nâng cao:</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">6. Xử lý errors trong Express như thế nào?</p>
                <p className="text-gray-600 mt-1">Sử dụng error-handling middleware với 4 parameters (err, req, res, next). Express tự động catch synchronous errors, async errors cần try-catch và next(error).</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">7. Cách optimize performance của Express app?</p>
                <p className="text-gray-600 mt-1">Sử dụng compression, caching, connection pooling, clustering, load balancing, minify static files, implement rate limiting.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">8. Security best practices cho Express?</p>
                <p className="text-gray-600 mt-1">Sử dụng helmet.js, validate input, implement CORS properly, use HTTPS, rate limiting, secure session management, update dependencies.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">9. Cách handle file uploads trong Express?</p>
                <p className="text-gray-600 mt-1">Sử dụng multer middleware để parse multipart/form-data, cấu hình storage (memory/disk), validate file types và size limits.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">10. Template engines trong Express?</p>
                <p className="text-gray-600 mt-1">EJS, Pug, Handlebars. Set với app.set('view engine', 'ejs'), render với res.render('template', data).</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-green-600">Câu hỏi thực tế:</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">11. Cách implement authentication với JWT?</p>
                <p className="text-gray-600 mt-1">Tạo JWT token khi login, verify token qua middleware, sử dụng refresh tokens, implement proper logout mechanism.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">12. Làm thế nào để scale Express application?</p>
                <p className="text-gray-600 mt-1">Sử dụng cluster module, load balancing với nginx, microservices architecture, database optimization, caching strategies.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">13. Testing Express applications như thế nào?</p>
                <p className="text-gray-600 mt-1">Sử dụng Jest/Mocha + Supertest để test APIs, mock database connections, test middleware functionality, integration testing.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">14. Debugging Express apps trong production?</p>
                <p className="text-gray-600 mt-1">Sử dụng logging libraries (Winston), monitoring tools (New Relic, DataDog), error tracking (Sentry), performance monitoring.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">15. CORS là gì và cách handle trong Express?</p>
                <p className="text-gray-600 mt-1">Cross-Origin Resource Sharing. Sử dụng cors middleware, configure origins, methods, headers. Handle preflight requests.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-orange-600">Câu hỏi chuyên sâu:</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">16. Event loop trong Node.js ảnh hưởng Express như thế nào?</p>
                <p className="text-gray-600 mt-1">Express chạy trên single-threaded event loop. Blocking operations sẽ block toàn bộ app. Cần sử dụng async operations và worker threads cho CPU-intensive tasks.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">17. Memory leaks trong Express và cách tránh?</p>
                <p className="text-gray-600 mt-1">Unclosed database connections, event listeners không cleanup, circular references, large objects trong closure. Monitor với heap snapshots.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">18. Streaming trong Express applications?</p>
                <p className="text-gray-600 mt-1">Sử dụng res.write() và res.end() cho custom streams, pipe từ readable streams, handle backpressure, streaming file uploads/downloads.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">19. Microservices architecture với Express?</p>
                <p className="text-gray-600 mt-1">Service discovery, load balancing, circuit breakers, distributed tracing, API gateway patterns, inter-service communication.</p>
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">20. Production deployment best practices?</p>
                <p className="text-gray-600 mt-1">Process managers (PM2), reverse proxy (nginx), SSL termination, monitoring, logging, graceful shutdowns, health checks, blue-green deployment.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">💼 Tips phỏng vấn Express:</h5>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>• Hiểu rõ request-response cycle và middleware flow</li>
              <li>• Biết cách structure Express projects (MVC pattern)</li>
              <li>• Familiar với popular middleware (cors, helmet, morgan)</li>
              <li>• Understand async/await với Express và error handling</li>
              <li>• Có kinh nghiệm với database integration (MySQL, MongoDB)</li>
              <li>• Biết implement RESTful APIs và HTTP status codes</li>
              <li>• Understand caching strategies và performance optimization</li>
              <li>• Experience với testing frameworks và deployment</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/mysql"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← MySQL Database
        </Link>
        <Link
          href="/sequelize"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tiếp theo: Sequelize →
        </Link>
      </div>
    </div>
  );
}
