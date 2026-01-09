// Tutorial 18: Using Ternary Operators In React

function TernaryOperators() {
  const isLoggedIn = true;
  const age = 20;
  const score = 85;
  const hasItems = true;
  const userRole = 'admin';

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 18: Using Ternary Operators In React</h2>
      <p>
        Ternary operators provide a concise way to conditionally render JSX: <code>condition ? trueJSX : falseJSX</code>
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Simple Ternary</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {isLoggedIn ? (
            <p style={{ color: '#4CAF50' }}>✅ Welcome! You are logged in.</p>
          ) : (
            <p style={{ color: '#f44336' }}>❌ Please log in.</p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Age Verification</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {age >= 18 ? (
              <span style={{ color: '#4CAF50' }}>✅ You are an adult (Age: {age})</span>
            ) : (
              <span style={{ color: '#f44336' }}>❌ You are a minor (Age: {age})</span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Score Grade</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            Score: {score} - 
            {score >= 90 ? ' Grade A' : score >= 80 ? ' Grade B' : score >= 70 ? ' Grade C' : ' Grade D'}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Nested Ternary</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            Status: {
              userRole === 'admin' ? (
                <span style={{ color: '#f44336', fontWeight: 'bold' }}>Administrator</span>
              ) : userRole === 'moderator' ? (
                <span style={{ color: '#FF9800', fontWeight: 'bold' }}>Moderator</span>
              ) : (
                <span style={{ color: '#2196F3', fontWeight: 'bold' }}>User</span>
              )
            }
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 5: Inline Styling with Ternary</h3>
        <div style={{ border: '2px solid #607D8B', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{
            padding: '10px',
            backgroundColor: hasItems ? '#c8e6c9' : '#ffcdd2',
            color: hasItems ? '#2e7d32' : '#c62828',
            borderRadius: '5px'
          }}>
            {hasItems ? '✅ Items available' : '❌ No items available'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Ternary Operator Syntax:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Basic syntax
{condition ? trueJSX : falseJSX}

// Example
{isLoggedIn ? <Welcome /> : <Login />}

// Nested ternary
{condition1 ? value1 : condition2 ? value2 : value3}`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>When to Use Ternary:</h4>
        <ul>
          <li>✅ Simple true/false conditions</li>
          <li>✅ Inline conditional rendering</li>
          <li>✅ Short, readable conditions</li>
          <li>❌ Avoid for complex nested conditions (use if/else instead)</li>
        </ul>
      </div>
    </div>
  );
}

export default TernaryOperators;

