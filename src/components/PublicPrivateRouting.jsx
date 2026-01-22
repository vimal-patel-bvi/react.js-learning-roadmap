// Tutorial: React.js Public & Private Routing

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';

// Layout Component
function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '24px' }}>🔐 Secure App</h1>
          <nav>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '5px' }}>Dashboard</Link>
            <span style={{ margin: '0 10px' }}>|</span>
            {localStorage.getItem('token') ? (
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/login';
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '5px'
                }}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>
      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <p style={{ margin: 0 }}>© 2024 Secure App. Protected Routes Demo.</p>
      </footer>
    </div>
  );
}

// Private Route Component - Protects routes that require authentication
function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login if no token found
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if token exists
  return children;
}

// Public Route Component - Redirects to dashboard if already logged in
function PublicRoute({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    // Redirect to dashboard if already logged in
    return <Navigate to="/dashboard" replace />;
  }

  // Render the public component if not logged in
  return children;
}

// Login Page Component (Public Route)
function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (formData.email === 'user@example.com' && formData.password === 'password123') {
      // Store token in localStorage
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('token', token);

      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Try: user@example.com / password123');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#2196F3', marginTop: 0 }}>🔑 Login</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        This is a public route. Anyone can access it.
      </p>

      {error && (
        <div style={{
          backgroundColor: '#ffebee',
          color: '#c62828',
          padding: '12px',
          borderRadius: '5px',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="user@example.com"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="password123"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '15px'
          }}
        >
          Login
        </button>
      </form>

      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '15px',
        borderRadius: '5px',
        fontSize: '14px',
        color: '#1976D2'
      }}>
        <strong>Demo Credentials:</strong><br />
        Email: user@example.com<br />
        Password: password123
      </div>
    </div>
  );
}

// Dashboard Page Component (Private Route)
function Dashboard() {
  const token = localStorage.getItem('token');

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#4CAF50', marginTop: 0 }}>📊 Dashboard</h2>
      <div style={{
        backgroundColor: '#e8f5e9',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '20px',
        border: '2px solid #4CAF50'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#2E7D32' }}>
          ✅ This is a private route. You can only access it if you have a token in localStorage.
        </p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#666' }}>
          Current Token: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '3px' }}>{token}</code>
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #2196F3'
        }}>
          <h3 style={{ marginTop: 0, color: '#1976D2' }}>Protected Content</h3>
          <p>This content is only visible to authenticated users.</p>
        </div>

        <div style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #FF9800'
        }}>
          <h3 style={{ marginTop: 0, color: '#F57C00' }}>User Data</h3>
          <p>Your secure user information goes here.</p>
        </div>

        <div style={{
          backgroundColor: '#f3e5f5',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #9C27B0'
        }}>
          <h3 style={{ marginTop: 0, color: '#7B1FA2' }}>Settings</h3>
          <p>Manage your account settings.</p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>How Private Routing Works:</h3>
        <ol>
          <li>When you try to access /dashboard, the PrivateRoute component checks for a token</li>
          <li>If no token exists, you're redirected to /login</li>
          <li>After successful login, a token is stored in localStorage</li>
          <li>Now you can access protected routes like /dashboard</li>
          <li>If you clear the token (logout), you'll be redirected back to login</li>
        </ol>
      </div>
    </div>
  );
}

// Main Router Component with Public/Private Routes
function PublicPrivateRoutingApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public Route - Login */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Private Route - Dashboard */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Tutorial Component Wrapper
function PublicPrivateRouting() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React.js Public & Private Routing</h2>
      <p>
        This tutorial demonstrates how to implement public and private routes in React.
        Private routes require authentication (token in localStorage), while public routes are accessible to everyone.
        If a user tries to access a private route without authentication, they are redirected to the login page.
      </p>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>PrivateRoute Component:</strong> Wraps protected routes and checks for authentication</li>
          <li><strong>PublicRoute Component:</strong> Redirects logged-in users away from public pages</li>
          <li><strong>localStorage:</strong> Stores authentication token in browser storage</li>
          <li><strong>Navigate Component:</strong> Programmatically redirects users</li>
          <li><strong>Token Validation:</strong> Checks for token before allowing access to private routes</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', border: '2px solid #2196F3', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', fontWeight: 'bold' }}>
          Interactive Example - Try accessing dashboard without logging in, then login and try again
        </div>
        <div style={{ minHeight: '600px' }}>
          <PublicPrivateRoutingApp />
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Private Route Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {`// 1. Create PrivateRoute Component
function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// 2. Create PublicRoute Component
function PublicRoute({ children }) {
  const token = localStorage.getItem('token');
  
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
}

// 3. Use in Routes
<Routes>
  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>

// 4. Store token on login
const handleLogin = () => {
  const token = 'your-jwt-token';
  localStorage.setItem('token', token);
  navigate('/dashboard');
};

// 5. Remove token on logout
const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
};`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>PrivateRoute checks for token before rendering protected content</li>
          <li>If no token, user is redirected to login using <code>&lt;Navigate&gt;</code></li>
          <li>PublicRoute prevents logged-in users from accessing login page</li>
          <li>Token is stored in localStorage for persistence across page refreshes</li>
          <li>Always validate tokens on the server side in production</li>
          <li>Consider using context or state management for token management</li>
          <li>Use <code>replace</code> prop in Navigate to replace history entry</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#ffebee', padding: '15px', borderRadius: '5px' }}>
        <h4>Security Notes:</h4>
        <ul>
          <li>This is a client-side demo - always validate tokens on the server</li>
          <li>localStorage can be accessed by JavaScript - use httpOnly cookies for sensitive tokens</li>
          <li>Implement token expiration and refresh mechanisms</li>
          <li>Use HTTPS in production to protect tokens in transit</li>
          <li>Consider using React Context or Redux for global authentication state</li>
        </ul>
      </div>
    </div>
  );
}

export default PublicPrivateRouting;
