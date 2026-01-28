// Tutorial: Inline Styling in React Components

function InlineStylingDemo() {
  const buttonStyle = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
  };

  const cardStyle = {
    border: '2px solid #2196F3',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#e3f2fd',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Inline Styling In React Components</h2>
      <p>
        With inline styling, you pass a JavaScript object to the <code>style</code> prop. Property names use
        <strong> camelCase</strong> instead of kebab-case.
      </p>

      <div style={cardStyle}>
        <h3>Example: Styled Buttons</h3>
        <button style={buttonStyle}>Primary Button</button>
        <button style={dangerButtonStyle}>Danger Button</button>
      </div>

      <div
        style={{
          ...cardStyle,
          marginTop: '20px',
          backgroundColor: '#fff3e0',
          borderColor: '#FF9800',
        }}
      >
        <h3>Dynamic Inline Styles</h3>
        <p>You can compute styles based on component state or props.</p>
        <p style={{ color: '#FF9800', fontWeight: 'bold' }}>
          Example: <code>style=&#123;&#123; backgroundColor: isActive ? 'green' : 'red' &#125;&#125;</code>
        </p>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>
            Use camelCase: <code>backgroundColor</code>, <code>fontSize</code>, not <code>background-color</code>
          </li>
          <li>
            Values are usually strings: <code>'10px'</code>, <code>'1rem'</code>, <code>'#2196F3'</code>
          </li>
          <li>Good for quick styles or dynamic styles based on state</li>
          <li>Not ideal for large, reusable style systems (prefer CSS/CSS Modules/Tailwind)</li>
        </ul>
      </div>
    </div>
  );
}

export default InlineStylingDemo;

