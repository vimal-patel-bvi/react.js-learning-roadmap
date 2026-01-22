// Tutorial: React.js Basic Routing

import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Home Page Component
function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2196F3' }}>🏠 Home Page</h2>
      <p>Welcome to the Home page! This is the default route.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '5px' }}>
        <p>This demonstrates basic routing in React using React Router.</p>
      </div>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#4CAF50' }}>ℹ️ About Page</h2>
      <p>This is the About page. Learn more about our application here.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '5px' }}>
        <p>React Router allows you to create single-page applications with navigation.</p>
      </div>
    </div>
  );
}

// Services Page Component
function Services() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#FF9800' }}>🛠️ Services Page</h2>
      <p>Check out our services and offerings.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '5px' }}>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
        </ul>
      </div>
    </div>
  );
}

// Dynamic Route Component - User Profile
function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#9C27B0' }}>👤 User Profile</h2>
      <p>Viewing profile for User ID: <strong>{id}</strong></p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3e5f5', borderRadius: '5px' }}>
        <p>This is a dynamic route that accepts a parameter (user ID).</p>
        <p>The URL parameter is extracted using <code>useParams()</code> hook.</p>
      </div>
      <button
        onClick={() => navigate('/user/123')}
        style={{
          marginTop: '15px',
          backgroundColor: '#9C27B0',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#f44336' }}>📧 Contact Page</h2>
      <p>Get in touch with us!</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#ffebee', borderRadius: '5px' }}>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 234 567 8900</p>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav style={{
      backgroundColor: '#2196F3',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '5px'
    }}>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          Contact
        </Link>
        <Link
          to="/user/123"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          User Profile (123)
        </Link>
      </div>
    </nav>
  );
}

// Main Router Component
function BasicRoutingApp() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Tutorial Component Wrapper
function BasicRouting() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React.js Basic Routing</h2>
      <p>
        React Router is a library for routing in React applications. It allows you to create single-page applications
        with navigation without page refreshes. This tutorial demonstrates basic routing concepts.
      </p>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>BrowserRouter:</strong> Wraps the app to enable routing</li>
          <li><strong>Routes:</strong> Container for all route definitions</li>
          <li><strong>Route:</strong> Defines a path and component to render</li>
          <li><strong>Link:</strong> Navigation component (replaces &lt;a&gt; tags)</li>
          <li><strong>useParams:</strong> Hook to access URL parameters</li>
          <li><strong>useNavigate:</strong> Hook for programmatic navigation</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', border: '2px solid #2196F3', borderRadius: '5px', padding: '20px' }}>
        <h3>Interactive Example:</h3>
        <BasicRoutingApp />
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Basic Routing Setup:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// 1. Install react-router-dom
npm install react-router-dom

// 2. Import necessary components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 3. Wrap app with BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

// 4. Use Link for navigation
<Link to="/about">About</Link>

// 5. Access URL parameters
function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>Routes are matched from top to bottom</li>
          <li>Use <code>exact</code> prop (or <code>path="*"</code>) for 404 pages</li>
          <li><code>Link</code> prevents page refresh, <code>&lt;a&gt;</code> does not</li>
          <li>Dynamic routes use <code>:paramName</code> syntax</li>
          <li>URL parameters are accessed via <code>useParams()</code> hook</li>
          <li>Programmatic navigation uses <code>useNavigate()</code> hook</li>
        </ul>
      </div>
    </div>
  );
}

export default BasicRouting;
