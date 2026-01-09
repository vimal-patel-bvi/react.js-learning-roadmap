// Tutorial 21: Event Handling In React

import { useState } from 'react';

function EventHandling() {
  const [message, setMessage] = useState('Click a button!');
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [hovered, setHovered] = useState(false);

  // Click event handler
  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  // Double click handler
  const handleDoubleClick = () => {
    setMessage('Button was double-clicked!');
  };

  // Increment handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement handler
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Input change handler
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
  };

  // Mouse enter handler
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 21: Event Handling In React</h2>
      <p>
        React events are handled using camelCase event handlers (onClick, onChange, etc.)
        and are passed as functions, not strings.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Click Events</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1976D2' }}>{message}</p>
          <button 
            onClick={handleClick}
            style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Click Me
          </button>
          <button 
            onDoubleClick={handleDoubleClick}
            style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Double Click Me
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Counter with Events</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
          <button 
            onClick={handleIncrement}
            style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Increment (+)
          </button>
          <button 
            onClick={handleDecrement}
            style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Decrement (-)
          </button>
          <button 
            onClick={() => setCount(0)}
            style={{ backgroundColor: '#FF9800', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Input Change Event</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
            style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: '2px solid #FF9800' }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px' }}>
            You typed: <strong>{inputValue || '(nothing yet)'}</strong>
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Form Submit Event</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter your name"
              style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: '2px solid #9C27B0', marginRight: '10px' }}
            />
            <button 
              type="submit"
              style={{ backgroundColor: '#9C27B0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 5: Mouse Events</h3>
        <div style={{ border: '2px solid #607D8B', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              padding: '20px',
              backgroundColor: hovered ? '#c8e6c9' : '#e0e0e0',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            {hovered ? '🖱️ Mouse is over me!' : 'Hover over me'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Common React Events:</h4>
        <ul>
          <li><code>onClick</code> - Click events</li>
          <li><code>onChange</code> - Input change events</li>
          <li><code>onSubmit</code> - Form submit events</li>
          <li><code>onMouseEnter</code> / <code>onMouseLeave</code> - Mouse hover events</li>
          <li><code>onFocus</code> / <code>onBlur</code> - Focus events</li>
          <li><code>onKeyDown</code> / <code>onKeyUp</code> - Keyboard events</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>Event handlers are camelCase (onClick, not onclick)</li>
          <li>Pass function reference, not function call: <code>onClick={handleClick}</code> not <code>onClick={handleClick()}</code></li>
          <li>Event object is automatically passed as first parameter</li>
          <li>Use <code>e.preventDefault()</code> to prevent default behavior</li>
        </ul>
      </div>
    </div>
  );
}

export default EventHandling;

