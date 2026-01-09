// Tutorial 24: Creating Multiple States In React

import { useState } from 'react';

function MultipleStates() {
  // Multiple independent states
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState([]);

  // Add item to list
  const addItem = () => {
    if (name.trim()) {
      setItems([...items, name]);
      setName('');
    }
  };

  // Remove item from list
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#263238' : '#fff', color: theme === 'dark' ? '#fff' : '#000', minHeight: '100vh' }}>
      <h2>Tutorial 24: Creating Multiple States In React</h2>
      <p>
        You can have multiple <code>useState</code> hooks in a single component, each managing different pieces of data.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Counter State</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Increment
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Decrement
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Form States (Name & Email)</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: '2px solid #4CAF50', marginRight: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: '2px solid #4CAF50' }}
            />
          </div>
          <p style={{ marginTop: '10px' }}>
            <strong>Name:</strong> {name || '(empty)'} | <strong>Email:</strong> {email || '(empty)'}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Boolean State (Login Status)</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Status: {isLoggedIn ? (
              <span style={{ color: '#4CAF50' }}>✅ Logged In</span>
            ) : (
              <span style={{ color: '#f44336' }}>❌ Not Logged In</span>
            )}
          </p>
          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            style={{ backgroundColor: isLoggedIn ? '#f44336' : '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Theme State</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Current Theme: {theme}</p>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ backgroundColor: '#9C27B0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 5: Array State (Items List)</h3>
        <div style={{ border: '2px solid #607D8B', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter item name"
              style={{ padding: '10px', fontSize: '16px', width: '250px', borderRadius: '5px', border: '2px solid #607D8B', marginRight: '10px' }}
            />
            <button 
              onClick={addItem}
              style={{ backgroundColor: '#607D8B', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Add Item
            </button>
          </div>
          <div>
            <h4>Items List ({items.length} items):</h4>
            {items.length === 0 ? (
              <p style={{ color: '#9E9E9E' }}>No items yet. Add some items!</p>
            ) : (
              <ul>
                {items.map((item, index) => (
                  <li key={index} style={{ margin: '5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{item}</span>
                    <button 
                      onClick={() => removeItem(index)}
                      style={{ backgroundColor: '#f44336', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '12px' }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: theme === 'dark' ? '#37474f' : '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Multiple States Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Multiple useState declarations
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [items, setItems] = useState([]);

// Each state is independent
// Update them separately
setCount(count + 1);
setName('New Name');
setIsLoggedIn(true);`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: theme === 'dark' ? '#37474f' : '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>You can have as many <code>useState</code> hooks as needed</li>
          <li>Each state is independent and manages its own data</li>
          <li>Update states separately using their respective setter functions</li>
          <li>For related data, consider using a single object state</li>
          <li>Multiple states make it clear what data is being tracked</li>
        </ul>
      </div>
    </div>
  );
}

export default MultipleStates;

