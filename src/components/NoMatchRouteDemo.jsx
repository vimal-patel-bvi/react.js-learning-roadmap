// No Match Route - 404 Page

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function Home404() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2196F3' }}>🏠 Home</h2>
      <p>Try navigating to a route that does not exist to see the 404 page.</p>
    </div>
  );
}

function About404() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#4CAF50' }}>ℹ️ About</h2>
      <p>This is a normal route. Only unknown routes should show the 404 page.</p>
    </div>
  );
}

function NotFoundPage() {
  const location = useLocation();

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#f44336', fontSize: '2rem' }}>404 - Page Not Found</h2>
      <p style={{ marginTop: '10px' }}>
        No route matches <code>{location.pathname}</code>.
      </p>
      <p style={{ marginTop: '10px', color: '#666' }}>
        This component is rendered by a <code>Route</code> with <code>path=&quot;*&quot;</code>.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

function NoMatchRoutingApp() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <nav
          style={{
            backgroundColor: '#2196F3',
            padding: '10px 15px',
            borderRadius: '6px',
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
            Home
          </Link>
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">
            About
          </Link>
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/some/random/path">
            Broken Link (404)
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home404 />} />
          <Route path="/about" element={<About404 />} />
          {/* No match / 404 route MUST be last */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NoMatchRouteDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>No Match Route / 404 Page</h2>
      <p>
        In React Router, you can handle unknown routes (404 pages) using a <code>Route</code> with{' '}
        <code>path=&quot;*&quot;</code>. This catch-all route will render when no other route matches.
      </p>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
        }}
      >
        <h3>Interactive Example:</h3>
        <NoMatchRoutingApp />
      </div>
    </div>
  );
}

export default NoMatchRouteDemo;

