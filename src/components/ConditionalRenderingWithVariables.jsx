// Tutorial 17: Conditional Rendering Using Element Variables

function ConditionalRenderingWithVariables() {
  const isLoggedIn = true;
  const userRole = 'admin';
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const hasItems = items.length > 0;

  // Element variable for login status
  let loginMessage;
  if (isLoggedIn) {
    loginMessage = <h3 style={{ color: '#4CAF50' }}>Welcome! You are logged in.</h3>;
  } else {
    loginMessage = <h3 style={{ color: '#f44336' }}>Please log in to continue.</h3>;
  }

  // Element variable for user role
  let roleBadge;
  if (userRole === 'admin') {
    roleBadge = <span style={{ backgroundColor: '#f44336', color: 'white', padding: '5px 10px', borderRadius: '3px' }}>Admin</span>;
  } else if (userRole === 'user') {
    roleBadge = <span style={{ backgroundColor: '#2196F3', color: 'white', padding: '5px 10px', borderRadius: '3px' }}>User</span>;
  } else {
    roleBadge = <span style={{ backgroundColor: '#9E9E9E', color: 'white', padding: '5px 10px', borderRadius: '3px' }}>Guest</span>;
  }

  // Element variable for content
  let content;
  if (hasItems) {
    content = (
      <div>
        <h4>Items List:</h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    content = <p>No items available.</p>;
  }

  // Element variable for button
  let actionButton;
  if (isLoggedIn) {
    actionButton = <button style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>;
  } else {
    actionButton = <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 17: Conditional Rendering Using Element Variables</h2>
      <p>
        Store JSX elements in variables and conditionally assign them. This keeps your JSX clean and readable.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Login Message Variable</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {loginMessage}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Role Badge Variable</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>Current Role: {roleBadge}</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Content Variable</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {content}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Button Variable</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {actionButton}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Benefits of Element Variables:</h4>
        <ul>
          <li><strong>Clean JSX:</strong> Keeps return statement simple</li>
          <li><strong>Readability:</strong> Easier to understand complex conditions</li>
          <li><strong>Reusability:</strong> Can use the variable multiple times</li>
          <li><strong>Maintainability:</strong> Easier to modify conditional logic</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Code Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Declare variable
let message;

// Assign conditionally
if (condition) {
  message = <div>True content</div>;
} else {
  message = <div>False content</div>;
}

// Use in JSX
return <div>{message}</div>;`}
        </pre>
      </div>
    </div>
  );
}

export default ConditionalRenderingWithVariables;

