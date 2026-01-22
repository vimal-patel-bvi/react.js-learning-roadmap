// Tutorial 25: Handling Input Fields In React

import { useState } from 'react';

function HandlingInputFields() {
  // Single input field state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handler for name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handler for message textarea
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 25: Handling Input Fields In React</h2>
      <p>
        In React, input fields are <strong>controlled components</strong>. This means React controls their value through state.
        We use the <code>value</code> prop to set the input value and <code>onChange</code> to handle changes.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Text Input Field</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            style={{ 
              padding: '10px', 
              fontSize: '16px', 
              width: '100%', 
              maxWidth: '400px',
              borderRadius: '5px', 
              border: '2px solid #2196F3',
              boxSizing: 'border-box'
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#1976D2' }}>
            Current value: <strong>{name || '(empty)'}</strong>
          </p>
          <p style={{ marginTop: '5px', fontSize: '14px', color: '#666' }}>
            Character count: {name.length}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Email Input Field</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={{ 
              padding: '10px', 
              fontSize: '16px', 
              width: '100%', 
              maxWidth: '400px',
              borderRadius: '5px', 
              border: '2px solid #4CAF50',
              boxSizing: 'border-box'
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#388E3C' }}>
            Email entered: <strong>{email || '(empty)'}</strong>
          </p>
          {email && (
            <p style={{ marginTop: '5px', fontSize: '14px', color: email.includes('@') ? '#4CAF50' : '#f44336' }}>
              {email.includes('@') ? '✓ Valid email format' : '⚠ Missing @ symbol'}
            </p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Textarea Input</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            rows="4"
            style={{ 
              padding: '10px', 
              fontSize: '16px', 
              width: '100%', 
              maxWidth: '400px',
              borderRadius: '5px', 
              border: '2px solid #FF9800',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#F57C00' }}>
            Message: <strong>{message || '(empty)'}</strong>
          </p>
          <p style={{ marginTop: '5px', fontSize: '14px', color: '#666' }}>
            Word count: {message.trim() ? message.trim().split(/\s+/).length : 0} | 
            Character count: {message.length}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Controlled Component Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// 1. Create state for input value
const [inputValue, setInputValue] = useState('');

// 2. Create handler function
const handleChange = (e) => {
  setInputValue(e.target.value);
};

// 3. Use in JSX
<input
  type="text"
  value={inputValue}        // Controlled by state
  onChange={handleChange}   // Update state on change
/>`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Controlled Components:</strong> React controls the input value through state</li>
          <li><strong>value prop:</strong> Always set to state value to make it controlled</li>
          <li><strong>onChange handler:</strong> Updates state when user types</li>
          <li><strong>e.target.value:</strong> Access the input value from event object</li>
          <li><strong>Single source of truth:</strong> State is the single source of truth for input value</li>
          <li><strong>Real-time updates:</strong> UI updates immediately as user types</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Why Controlled Components?</h4>
        <ul>
          <li>React has full control over the input value</li>
          <li>Easy to validate and transform input</li>
          <li>Can reset or set input value programmatically</li>
          <li>Better integration with React's state management</li>
        </ul>
      </div>
    </div>
  );
}

export default HandlingInputFields;
