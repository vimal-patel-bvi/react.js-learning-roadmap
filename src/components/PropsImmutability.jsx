// Tutorial 11: Immutability of Props

function ChildComponent({ user, count }) {
  // ❌ WRONG: Trying to mutate props directly
  // user.name = "Changed Name"; // This will cause an error!
  // count = 10; // This won't work!
  
  // ✅ CORRECT: Props are read-only, we can only use them
  return (
    <div style={{ border: '2px solid #f44336', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#ffebee' }}>
      <h3>Child Component (Receives Props)</h3>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <p>Count: {count}</p>
      <p style={{ color: '#d32f2f', fontWeight: 'bold' }}>
        ⚠️ Props are immutable - cannot be changed in child component!
      </p>
    </div>
  );
}

function PropsImmutability() {
  const user = { name: "John Doe", age: 25 };
  const count = 5;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 11: Immutability of Props</h2>
      <p>
        <strong>Props are immutable</strong> - they cannot be modified by the child component.
        They flow down from parent to child in a one-way direction.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Parent Component</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#e8f5e9' }}>
          <p>User Name: {user.name}</p>
          <p>User Age: {user.age}</p>
          <p>Count: {count}</p>
          <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>
            ✅ Parent component owns and controls this data
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Child Component (Cannot Modify Props)</h3>
        <ChildComponent user={user} count={count} />
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px', border: '2px solid #FF9800' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Props are read-only:</strong> Child components cannot modify props</li>
          <li><strong>One-way data flow:</strong> Data flows from parent → child</li>
          <li><strong>To change data:</strong> Parent must update state and pass new props</li>
          <li><strong>Why immutable?</strong> Ensures predictable behavior and easier debugging</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Example of What NOT to Do:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// ❌ WRONG - This will cause an error
function Child({ user }) {
  user.name = "Changed"; // Error: Cannot assign to read-only property
  return <div>{user.name}</div>;
}

// ✅ CORRECT - Just use the prop
function Child({ user }) {
  return <div>{user.name}</div>;
}`}
        </pre>
      </div>
    </div>
  );
}

export default PropsImmutability;

