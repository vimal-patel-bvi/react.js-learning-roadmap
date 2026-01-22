// Tutorial: React.js Routing with Layout (Header & Footer)

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Layout Component with Header and Footer
function Layout({ children }) {
  const location = useLocation();
  console.log(location,'location');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h1 style={{ margin: 0, fontSize: '24px' }}>🚀 My App</h1>
          <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link
              to="/dashboard"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 15px',
                backgroundColor: location.pathname === '/dashboard' ? 'rgba(236, 9, 9, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '5px',
                transition: 'background-color 0.3s'
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 15px',
                backgroundColor: location.pathname === '/contact' ? 'rgba(236, 9, 9, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '5px',
                transition: 'background-color 0.3s'
              }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: '5px 0' }}>© 2024 My App. All rights reserved.</p>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#ccc' }}>
            Built with React and React Router
          </p>
        </div>
      </footer>
    </div>
  );
}

// Dashboard Page Component
function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#2196F3', marginTop: 0 }}>📊 Dashboard</h2>
      <p>Welcome to the Dashboard! This is a protected page with layout.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #2196F3'
        }}>
          <h3 style={{ marginTop: 0, color: '#1976D2' }}>Total Users</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0', color: '#2196F3' }}>1,234</p>
          <p style={{ color: '#666', fontSize: '14px' }}>Active users this month</p>
        </div>

        <div style={{
          backgroundColor: '#e8f5e9',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #4CAF50'
        }}>
          <h3 style={{ marginTop: 0, color: '#388E3C' }}>Revenue</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0', color: '#4CAF50' }}>$45,678</p>
          <p style={{ color: '#666', fontSize: '14px' }}>Total revenue this quarter</p>
        </div>

        <div style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #FF9800'
        }}>
          <h3 style={{ marginTop: 0, color: '#F57C00' }}>Orders</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0', color: '#FF9800' }}>567</p>
          <p style={{ color: '#666', fontSize: '14px' }}>Pending orders</p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>✅ New user registered - 2 hours ago</li>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>💰 Payment received - 5 hours ago</li>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>📦 Order shipped - 1 day ago</li>
          <li style={{ padding: '10px' }}>🎉 New feature launched - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
}

// Contact Us Page Component
function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#4CAF50', marginTop: 0 }}>📧 Contact Us</h2>
      <p>Get in touch with us! Fill out the form below and we'll get back to you.</p>

      <div style={{ maxWidth: '600px', marginTop: '30px' }}>
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#f9f9f9',
          padding: '25px',
          borderRadius: '8px',
          border: '2px solid #4CAF50'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box'
              }}
            />
          </div>

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
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Other Ways to Reach Us</h3>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
        </div>
      </div>
    </div>
  );
}

// Main Router Component with Layout
function RoutingWithLayoutApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Tutorial Component Wrapper
function RoutingWithLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React.js Routing with Layout (Header & Footer)</h2>
      <p>
        This tutorial demonstrates how to create a layout component with header and footer that wraps all routes.
        The layout remains consistent across different pages while only the main content changes.
      </p>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Layout Component:</strong> Wraps all routes to provide consistent header and footer</li>
          <li><strong>Children Prop:</strong> Renders the current route component inside the layout</li>
          <li><strong>useLocation Hook:</strong> Access current route to highlight active navigation</li>
          <li><strong>Shared Navigation:</strong> Header navigation available on all pages</li>
          <li><strong>Persistent Footer:</strong> Footer remains visible across all routes</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', border: '2px solid #2196F3', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', fontWeight: 'bold' }}>
          Interactive Example - Try navigating between Dashboard and Contact Us
        </div>
        <div style={{ minHeight: '600px' }}>
          <RoutingWithLayoutApp />
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Layout Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// 1. Create Layout Component
function Layout({ children }) {
  return (
    <div>
      <header>Header Content</header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

// 2. Wrap Routes with Layout
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// 3. Use useLocation for active navigation
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isActive = location.pathname === '/dashboard';
  return <Link className={isActive ? 'active' : ''}>Dashboard</Link>;
}`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>Layout component receives <code>children</code> prop to render route content</li>
          <li>Header and footer are rendered once and persist across route changes</li>
          <li>Use <code>useLocation()</code> to highlight active navigation links</li>
          <li>Layout can include shared state, context, or global components</li>
          <li>This pattern reduces code duplication and ensures consistency</li>
        </ul>
      </div>
    </div>
  );
}

export default RoutingWithLayout;
