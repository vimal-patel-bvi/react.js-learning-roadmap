// Tutorial 16: Conditionally Rendering JSX & Components

function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h3 style={{ color: '#4CAF50' }}>Welcome back! You are logged in.</h3>;
  }
  return <h3 style={{ color: '#f44336' }}>Please log in to continue.</h3>;
}

function UserGreeting({ user }) {
  return (
    <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Hello, {user}!</h3>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Please sign up.</h3>
    </div>
  );
}

function ConditionalRendering() {
  const isLoggedIn = true;
  const user = 'John Doe';
  const showDetails = true;
  const hasPermission = false;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 16: Conditionally Rendering JSX & Components</h2>
      <p>
        Conditional rendering allows you to display different content based on conditions.
        Use if/else statements, ternary operators, or logical operators.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Using if/else in Component</h3>
        <WelcomeMessage isLoggedIn={isLoggedIn} />
        <WelcomeMessage isLoggedIn={false} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Conditional Component Rendering</h3>
        {user ? <UserGreeting user={user} /> : <GuestGreeting />}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Conditional JSX Elements</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {showDetails && (
            <div>
              <h4>Details Section</h4>
              <p>This content is only shown when showDetails is true.</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Multiple Conditions</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {hasPermission ? (
            <p style={{ color: '#4CAF50' }}>✅ You have permission to access this content.</p>
          ) : (
            <p style={{ color: '#f44336' }}>❌ Access denied. You need permission.</p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Methods for Conditional Rendering:</h4>
        <ul>
          <li><strong>if/else statements:</strong> Use in component function body</li>
          <li><strong>Ternary operator:</strong> <code>condition ? trueJSX : falseJSX</code></li>
          <li><strong>Logical AND:</strong> <code>condition && JSX</code></li>
          <li><strong>Early return:</strong> Return different JSX based on condition</li>
        </ul>
      </div>
    </div>
  );
}

export default ConditionalRendering;

