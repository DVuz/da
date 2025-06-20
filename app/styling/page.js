import Link from 'next/link';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

export default function Styling() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Styling trong React</h1>
        <p className="text-xl text-gray-600">
          Các phương pháp styling trong React từ cơ bản đến nâng cao
        </p>
      </div>

      <Card title="Tổng quan các phương pháp Styling">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Phương pháp</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ưu điểm</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Nhược điểm</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Phù hợp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Inline Styles</td>
                <td className="border border-gray-300 px-4 py-2">Đơn giản, Dynamic</td>
                <td className="border border-gray-300 px-4 py-2">
                  Không reusable, No pseudo-classes
                </td>
                <td className="border border-gray-300 px-4 py-2">Quick prototyping</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">CSS Files</td>
                <td className="border border-gray-300 px-4 py-2">Familiar, Full CSS features</td>
                <td className="border border-gray-300 px-4 py-2">Global scope, Name conflicts</td>
                <td className="border border-gray-300 px-4 py-2">Small projects</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">CSS Modules</td>
                <td className="border border-gray-300 px-4 py-2">Scoped styles, No conflicts</td>
                <td className="border border-gray-300 px-4 py-2">Build setup, Learning curve</td>
                <td className="border border-gray-300 px-4 py-2">Medium projects</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Styled Components</td>
                <td className="border border-gray-300 px-4 py-2">CSS-in-JS, Dynamic styling</td>
                <td className="border border-gray-300 px-4 py-2">Runtime overhead, Bundle size</td>
                <td className="border border-gray-300 px-4 py-2">Complex UIs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Tailwind CSS</td>
                <td className="border border-gray-300 px-4 py-2">
                  Utility-first, Fast development
                </td>
                <td className="border border-gray-300 px-4 py-2">HTML becomes verbose</td>
                <td className="border border-gray-300 px-4 py-2">Rapid prototyping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="1. Inline Styles">
        <p className="mb-4">
          Inline styles cho phép định nghĩa CSS trực tiếp trong JSX bằng JavaScript objects.
        </p>

        <h4 className="text-lg font-semibold mb-3">Basic Inline Styles:</h4>
        <CodeBlock>
          {`function Button({ type = 'primary', size = 'medium', children }) {
  const baseStyles = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  };

  const typeStyles = {
    primary: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: 'white'
    },
    danger: {
      backgroundColor: '#ef4444',
      color: 'white'
    }
  };

  const sizeStyles = {
    small: {
      padding: '6px 12px',
      fontSize: '12px'
    },
    medium: {
      padding: '10px 20px',
      fontSize: '14px'
    },
    large: {
      padding: '14px 28px',
      fontSize: '16px'
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...typeStyles[type],
    ...sizeStyles[size]
  };

  return (
    <button style={combinedStyles}>
      {children}
    </button>
  );
}

// Sử dụng
function App() {
  return (
    <div>
      <Button type="primary" size="large">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="danger" size="small">Delete</Button>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Dynamic Styles:</h4>
        <CodeBlock>
          {`function ProgressBar({ progress, color = '#3b82f6' }) {
  const containerStyle = {
    width: '100%',
    height: '20px',
    backgroundColor: '#e5e7eb',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const fillStyle = {
    height: '100%',
    width: \`\${Math.min(Math.max(progress, 0), 100)}%\`,
    backgroundColor: color,
    transition: 'width 0.3s ease',
    borderRadius: 'inherit'
  };

  return (
    <div style={containerStyle}>
      <div style={fillStyle} />
    </div>
  );
}

// Conditional styling
function StatusCard({ status, message }) {
  const getStatusStyles = (status) => {
    const baseStyles = {
      padding: '16px',
      borderRadius: '8px',
      margin: '8px 0'
    };

    switch (status) {
      case 'success':
        return { ...baseStyles, backgroundColor: '#d1fae5', color: '#065f46' };
      case 'error':
        return { ...baseStyles, backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'warning':
        return { ...baseStyles, backgroundColor: '#fef3c7', color: '#92400e' };
      default:
        return { ...baseStyles, backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  return (
    <div style={getStatusStyles(status)}>
      {message}
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="2. CSS Files và CSS Modules">
        <h4 className="text-lg font-semibold mb-3">Traditional CSS:</h4>
        <CodeBlock language="css">
          {`/* styles/Button.css */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: #6b7280;
  color: white;
}

.btn-large {
  padding: 14px 28px;
  font-size: 16px;
}

/* Component states */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`}
        </CodeBlock>

        <CodeBlock>
          {`// Button.js
import './Button.css';

function Button({ type = 'primary', size = 'medium', disabled, children, ...props }) {
  const classes = [
    'btn',
    \`btn-\${type}\`,
    size !== 'medium' && \`btn-\${size}\`
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">CSS Modules:</h4>
        <CodeBlock language="css">
          {`/* Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.primary {
  background-color: #3b82f6;
  color: white;
}

.primary:hover {
  background-color: #2563eb;
}

.secondary {
  background-color: #6b7280;
  color: white;
}

.large {
  padding: 14px 28px;
  font-size: 16px;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}
        </CodeBlock>

        <CodeBlock>
          {`// Button.js
import styles from './Button.module.css';
import classNames from 'classnames'; // npm install classnames

function Button({ type = 'primary', size, disabled, children, className, ...props }) {
  const buttonClasses = classNames(
    styles.button,
    styles[type],
    size && styles[size],
    disabled && styles.disabled,
    className // Allow external classes
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// Advanced CSS Modules với composition
/* Card.module.css */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.cardHeader {
  composes: card;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.cardTitle {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}`}
        </CodeBlock>
      </Card>

      <Card title="3. Styled Components">
        <p className="mb-4">
          Styled Components cho phép viết CSS trong JavaScript với template literals.
        </p>

        <h4 className="text-lg font-semibold mb-3">Cài đặt:</h4>
        <CodeBlock language="bash">{`npm install styled-components`}</CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Basic Styled Components:</h4>
        <CodeBlock>
          {`import styled from 'styled-components';

// Basic styled component
const Button = styled.button\`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  background-color: \${props => {
    switch (props.variant) {
      case 'primary': return '#3b82f6';
      case 'secondary': return '#6b7280';
      case 'danger': return '#ef4444';
      default: return '#3b82f6';
    }
  }};

  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  \${props => props.size === 'large' && \`
    padding: 14px 28px;
    font-size: 16px;
  \`}

  \${props => props.size === 'small' && \`
    padding: 6px 12px;
    font-size: 12px;
  \`}
\`;

// Sử dụng
function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Primary Button
      </Button>
      <Button variant="secondary">
        Secondary Button
      </Button>
      <Button variant="danger" size="small" disabled>
        Disabled Button
      </Button>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Advanced Styled Components:</h4>
        <CodeBlock>
          {`import styled, { css, keyframes, ThemeProvider } from 'styled-components';

// Keyframes cho animations
const fadeIn = keyframes\`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
\`;

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
\`;

// Shared styles với css helper
const flexCenter = css\`
  display: flex;
  align-items: center;
  justify-content: center;
\`;

// Styled component với complex logic
const Card = styled.div\`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  animation: \${fadeIn} 0.3s ease-in-out;

  \${flexCenter}
  flex-direction: column;

  \${props => props.theme.breakpoints.mobile} {
    padding: 16px;
    margin: 8px;
  }

  \${props => props.elevated && css\`
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  \`}
\`;

// Extending styled components
const PrimaryCard = styled(Card)\`
  border-left: 4px solid \${props => props.theme.colors.primary};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
\`;

// Styled component với as prop
const Text = styled.p\`
  font-size: 16px;
  line-height: 1.5;
  color: \${props => props.theme.colors.text};
  margin: 0 0 16px 0;
\`;

// Loading spinner
const Spinner = styled.div\`
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid \${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: \${spin} 1s linear infinite;
\`;

// Button với loading state
const LoadingButton = styled.button\`
  \${flexCenter}
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: \${props => props.theme.colors.primary};
  color: white;
  cursor: \${props => props.loading ? 'not-allowed' : 'pointer'};
  opacity: \${props => props.loading ? 0.7 : 1};

  &:hover:not(:disabled) {
    background: \${props => props.theme.colors.primaryDark};
  }
\`;

// Theme object
const theme = {
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: '#6b7280',
    text: '#374151',
    background: '#f9fafb'
  },
  breakpoints: {
    mobile: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1024px)'
  }
};

// App với ThemeProvider
function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Card elevated>
        <Text as="h2">Welcome to our app</Text>
        <Text>This is a description text.</Text>
        <LoadingButton
          loading={loading}
          onClick={() => setLoading(!loading)}
        >
          {loading && <Spinner />}
          {loading ? 'Loading...' : 'Click me'}
        </LoadingButton>
      </Card>

      <PrimaryCard>
        <Text>This is a primary card</Text>
      </PrimaryCard>
    </ThemeProvider>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="4. Tailwind CSS">
        <p className="mb-4">
          Tailwind CSS là utility-first CSS framework cho phép xây dựng UI nhanh chóng.
        </p>

        <h4 className="text-lg font-semibold mb-3">Cài đặt Tailwind CSS:</h4>
        <CodeBlock language="bash">
          {`# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Hoặc với Create React App
npm install -D tailwindcss
npx tailwindcss init`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Config file:</h4>
        <CodeBlock language="javascript">
          {`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Basic Tailwind Components:</h4>
        <CodeBlock>
          {`// Button component với Tailwind
function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const classes = \`\${baseClasses} \${variants[variant]} \${sizes[size]} \${className}\`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Card component
function Card({ children, className = '' }) {
  return (
    <div className={|bg-white rounded-lg shadow-md p-6 \${className}|}>
      {children}
    </div>
  );
}

// Complex layout với Tailwind
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              Dashboard
            </h1>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Settings
              </Button>
              <Button variant="primary" size="sm">
                New Project
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Statistics
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Users</span>
                <span className="text-2xl font-bold text-gray-900">12,345</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                📊 View Reports
              </Button>
              <Button variant="outline" className="w-full justify-start">
                👥 Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                ⚙️ Settings
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Responsive Design với Tailwind:</h4>
        <CodeBlock>
          {`function ResponsiveLayout() {
  return (
    <div className="container mx-auto px-4">
      {/* Mobile first approach */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4
        sm:gap-6
        lg:gap-8
      ">
        {/* Card responsive */}
        <div className="
          bg-white
          rounded-lg
          shadow-md
          p-4
          sm:p-6
          lg:p-8
          transform
          hover:scale-105
          transition-transform
          duration-200
        ">
          <h3 className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            mb-2
            sm:mb-4
          ">
            Responsive Card
          </h3>
          <p className="
            text-sm
            sm:text-base
            text-gray-600
            mb-4
          ">
            This card adapts to different screen sizes
          </p>
          <Button className="
            w-full
            sm:w-auto
            text-sm
            sm:text-base
          ">
            Learn More
          </Button>
        </div>
      </div>

      {/* Hide/show elements based on screen size */}
      <div className="mt-8">
        <div className="block sm:hidden">
          {/* Show only on mobile */}
          <p>Mobile only content</p>
        </div>

        <div className="hidden sm:block lg:hidden">
          {/* Show only on tablet */}
          <p>Tablet only content</p>
        </div>

        <div className="hidden lg:block">
          {/* Show only on desktop */}
          <p>Desktop only content</p>
        </div>
      </div>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Custom Components với Tailwind:</h4>
        <CodeBlock>
          {`// Using @apply directive trong CSS
/* styles/components.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 font-medium rounded-md transition-colors;
  }

  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }

  .form-input {
    @apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500;
  }
}

// Component library với Tailwind + clsx
import clsx from 'clsx';

function Badge({ variant = 'default', size = 'md', children, className }) {
  return (
    <span className={clsx(
      // Base styles
      'inline-flex items-center font-medium rounded-full',

      // Sizes
      {
        'px-2 py-1 text-xs': size === 'sm',
        'px-3 py-1 text-sm': size === 'md',
        'px-4 py-2 text-base': size === 'lg'
      },

      // Variants
      {
        'bg-gray-100 text-gray-800': variant === 'default',
        'bg-blue-100 text-blue-800': variant === 'primary',
        'bg-green-100 text-green-800': variant === 'success',
        'bg-red-100 text-red-800': variant === 'danger',
        'bg-yellow-100 text-yellow-800': variant === 'warning'
      },

      className
    )}>
      {children}
    </span>
  );
}

// Form component với Tailwind
function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="form-input resize-none"
          placeholder="Your message..."
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="5. Emotion CSS">
        <p className="mb-4">
          Emotion là thư viện CSS-in-JS khác với hiệu suất cao và API linh hoạt.
        </p>

        <h4 className="text-lg font-semibold mb-3">Cài đặt Emotion:</h4>
        <CodeBlock language="bash">{`npm install @emotion/react @emotion/styled`}</CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">CSS prop với Emotion:</h4>
        <CodeBlock>
          {`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css\`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background-color: #3b82f6;
  color: white;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
\`;

function App() {
  return (
    <div>
      <button css={buttonStyle}>
        Emotion Button
      </button>

      {/* Inline css prop */}
      <div css={css\`
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 8px;
        margin: 10px 0;
      \`}>
        Beautiful gradient box
      </div>
    </div>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="6. Sass/SCSS trong React">
        <h4 className="text-lg font-semibold mb-3">Cài đặt Sass:</h4>
        <CodeBlock language="bash">{`npm install sass`}</CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">SCSS với variables và mixins:</h4>
        <CodeBlock language="scss">
          {`// styles/_variables.scss
$primary-color: #3b82f6;
$secondary-color: #6b7280;
$success-color: #10b981;
$danger-color: #ef4444;

$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;

$border-radius: 0.375rem;
$transition: all 0.2s ease;

// styles/_mixins.scss
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: $border-radius;
  font-weight: 500;
  cursor: pointer;
  transition: $transition;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px $primary-color;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@mixin button-variant($bg-color, $text-color: white, $hover-color: darken($bg-color, 10%)) {
  background-color: $bg-color;
  color: $text-color;

  &:hover:not(:disabled) {
    background-color: $hover-color;
  }
}

// components/Button.scss
@import '../styles/variables';
@import '../styles/mixins';

.button {
  @include button-base;

  &--primary {
    @include button-variant($primary-color);
  }

  &--secondary {
    @include button-variant($secondary-color);
  }

  &--danger {
    @include button-variant($danger-color);
  }

  &--small {
    padding: 0.25rem 0.75rem;
    font-size: $font-size-sm;
  }

  &--large {
    padding: 0.75rem 1.5rem;
    font-size: $font-size-lg;
  }
}`}
        </CodeBlock>
      </Card>

      <Card title="7. Ant Design & Material-UI">
        <h4 className="text-lg font-semibold mb-3">Ant Design:</h4>
        <CodeBlock language="bash">{`npm install antd`}</CodeBlock>

        <CodeBlock>
          {`import { Button, Card, Form, Input, Space, Table } from 'antd';
import 'antd/dist/reset.css';

function AntDesignExample() {
  const [form] = Form.useForm();

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Email', dataIndex: 'email', key: 'email' }
  ];

  const data = [
    { key: '1', name: 'John', age: 32, email: 'john@example.com' },
    { key: '2', name: 'Jane', age: 28, email: 'jane@example.com' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Card title="User Form" style={{ marginBottom: '20px' }}>
        <Form form={form} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">Submit</Button>
              <Button onClick={() => form.resetFields()}>Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Users Table">
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="text-lg font-semibold mb-3 mt-6">Material-UI:</h4>
        <CodeBlock language="bash">
          {`npm install @mui/material @emotion/react @emotion/styled`}
        </CodeBlock>

        <CodeBlock>
          {`import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#6b7280',
    },
  },
});

function MaterialUIExample() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3 }}>
        <Card sx={{ maxWidth: 400, margin: 'auto' }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Contact Form
            </Typography>

            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />

              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}`}
        </CodeBlock>
      </Card>

      <Card title="Performance Tips cho Styling">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-600">1. CSS-in-JS Optimization:</h4>
            <CodeBlock>
              {`// ❌ Tránh tạo styles trong render
function BadComponent() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0'
    }}>
      Content
    </div>
  );
}

// ✅ Tạo styles ngoài component
const containerStyle = {
  padding: '20px',
  backgroundColor: '#f0f0f0'
};

function GoodComponent() {
  return <div style={containerStyle}>Content</div>;
}

// ✅ Với styled-components, sử dụng static styles
const Container = styled.div\`
  padding: 20px;
  background-color: #f0f0f0;
\`;`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">
              2. CSS Loading Optimization:
            </h4>
            <CodeBlock>
              {`// Code splitting CSS
const LazyComponent = lazy(() =>
  import('./LazyComponent' /* webpackChunkName: "lazy-component" */)
);

// Critical CSS extraction với Next.js
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
};

// Preload critical styles
<link
  rel="preload"
  href="/styles/critical.css"
  as="style"
  onLoad="this.onload=null;this.rel='stylesheet'"
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-purple-600">
              3. Bundle Size Optimization:
            </h4>
            <CodeBlock>
              {`// Tree shaking với Ant Design
import Button from 'antd/es/button';
import 'antd/es/button/style/css';

// Thay vì
import { Button } from 'antd';

// Webpack bundle analyzer
npm install --save-dev webpack-bundle-analyzer

// package.json
{
  "scripts": {
    "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
  }
}`}
            </CodeBlock>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        <Link
          href="/redux"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          ← Redux
        </Link>
        <Link
          href="/advanced"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Tiếp theo: React nâng cao →
        </Link>
      </div>
    </div>
  );
}
