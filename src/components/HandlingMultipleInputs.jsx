// Tutorial 26: Handling Multiple Inputs In React

import { useState } from 'react';

function HandlingMultipleInputs() {
  // Method 1: Multiple separate states (not recommended for many inputs)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Method 2: Single object state (recommended for multiple inputs)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });

  // Method 3: Using computed property names
  const [userInfo, setUserInfo] = useState({
    age: '',
    city: '',
    country: ''
  });

  // Handler for separate states
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Handler for object state - using spread operator
  const handleFormDataChange = (e) => {
    console.log('handleFormDataChange', e.target.value);
    const { name, value } = e.target;
    console.log('formData', formData);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler using computed property names
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 26: Handling Multiple Inputs In React</h2>
      <p>
        When dealing with multiple input fields, you can use separate states for each input or combine them into a single object state.
        Using an object state is more efficient and cleaner for forms with many fields.
      </p>

      <div style={{ marginTop: '30px' }}>
        <h3>Method 1: Separate States (Simple Forms)</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
            Use separate states when you have only 2-3 inputs
          </p>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First name"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #2196F3',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Last Name:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last name"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #2196F3',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <p style={{ marginTop: '15px', fontSize: '16px', color: '#1976D2' }}>
            Full Name: <strong>{firstName} {lastName}</strong>
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Method 2: Object State with Spread Operator (Recommended)</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
            Use object state for forms with multiple fields - cleaner and more maintainable
          </p>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormDataChange}
              placeholder="Enter username"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #4CAF50',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormDataChange}
              placeholder="Enter email"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #4CAF50',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormDataChange}
              placeholder="Enter phone"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #4CAF50',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormDataChange}
              placeholder="Enter address"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #4CAF50',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '5px' }}>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Username:</strong> {formData.username || '(empty)'}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Email:</strong> {formData.email || '(empty)'}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Phone:</strong> {formData.phone || '(empty)'}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Address:</strong> {formData.address || '(empty)'}</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Method 3: Computed Property Names</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
            Using [name] syntax to dynamically update the correct property
          </p>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Age:
            </label>
            <input
              type="number"
              name="age"
              value={userInfo.age}
              onChange={handleUserInfoChange}
              placeholder="Enter age"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #FF9800',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              City:
            </label>
            <input
              type="text"
              name="city"
              value={userInfo.city}
              onChange={handleUserInfoChange}
              placeholder="Enter city"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #FF9800',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Country:
            </label>
            <input
              type="text"
              name="country"
              value={userInfo.country}
              onChange={handleUserInfoChange}
              placeholder="Enter country"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '5px',
                border: '1px solid #FF9800',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fff3e0', borderRadius: '5px' }}>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Age:</strong> {userInfo.age || '(empty)'}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>City:</strong> {userInfo.city || '(empty)'}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Country:</strong> {userInfo.country || '(empty)'}</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Object State Pattern (Recommended):</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {`// 1. Create object state
const [formData, setFormData] = useState({
  username: '',
  email: '',
  phone: ''
});

// 2. Single handler for all inputs
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,        // Keep existing properties
    [name]: value   // Update only the changed property
  }));
};

// 3. Use in JSX - name attribute must match state key
<input
  name="username"
  value={formData.username}
  onChange={handleChange}
/>`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Object State:</strong> Use for forms with multiple fields</li>
          <li><strong>name attribute:</strong> Must match the state property name</li>
          <li><strong>Spread operator (...):</strong> Preserves other properties when updating</li>
          <li><strong>Computed property [name]:</strong> Dynamically updates the correct property</li>
          <li><strong>Single handler:</strong> One function handles all inputs</li>
          <li><strong>Destructuring:</strong> Extract name and value from event target</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Benefits of Object State:</h4>
        <ul>
          <li>Less code - one handler instead of many</li>
          <li>Easier to manage - all form data in one place</li>
          <li>Easier to reset - just set entire object</li>
          <li>Better for validation - validate entire form at once</li>
          <li>Easier to submit - send entire object to API</li>
        </ul>
      </div>
    </div>
  );
}

export default HandlingMultipleInputs;
