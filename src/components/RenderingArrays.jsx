// Tutorial 13: Rendering Arrays Or Lists In React

function RenderingArrays() {
  // Array of strings
  const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  
  // Array of numbers
  const numbers = [1, 2, 3, 4, 5];
  
  // Array of mixed types
  const mixed = ['Hello', 42, true, 'World'];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 13: Rendering Arrays Or Lists In React</h2>
      <p>
        React allows you to render arrays directly. Use <code>map()</code> to transform arrays into JSX elements.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Rendering Array of Strings</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Fruits List:</h4>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Rendering Array of Numbers</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Numbers:</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {numbers.map((num, index) => (
              <span key={index} style={{ 
                backgroundColor: '#4CAF50', 
                color: 'white', 
                padding: '8px 15px', 
                borderRadius: '5px',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Rendering Mixed Array</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Mixed Array:</h4>
          <ul>
            {mixed.map((item, index) => (
              <li key={index}>
                {item} ({typeof item})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Important Points:</h4>
        <ul>
          <li><strong>Use map() method:</strong> Transforms array items into JSX elements</li>
          <li><strong>Key prop is required:</strong> Each element needs a unique key</li>
          <li><strong>Key should be stable:</strong> Use unique IDs when possible, not index (if data can change)</li>
          <li><strong>Return JSX:</strong> map() callback must return JSX element</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Code Example:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Rendering array with map()
{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}`}
        </pre>
      </div>
    </div>
  );
}

export default RenderingArrays;

