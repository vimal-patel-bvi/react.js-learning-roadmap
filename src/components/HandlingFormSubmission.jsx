// Tutorial 27: Handling Form Submission In React

import { useState } from 'react';

function HandlingFormSubmission() {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    console.log('newErrors', newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    if (validate()) {
      // Form is valid - process submission
      console.log('Form submitted:', formData);
      
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 500);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 27: Handling Form Submission In React</h2>
      <p>
        Form submission in React is handled using the <code>onSubmit</code> event handler.
        Always use <code>e.preventDefault()</code> to prevent the default browser form submission behavior.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example: Complete Form with Validation</h3>
        <div style={{ border: '2px solid #2196F3', padding: '20px', margin: '10px', borderRadius: '5px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
              <h3 style={{ color: '#4CAF50' }}>Form Submitted Successfully!</h3>
              <p style={{ color: '#666' }}>Thank you for your submission.</p>
              <button
                onClick={handleReset}
                style={{
                  marginTop: '15px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Submit Another Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Name: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '5px',
                    border: errors.name ? '2px solid #f44336' : '2px solid #2196F3',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.name && (
                  <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Email: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '5px',
                    border: errors.email ? '2px solid #f44336' : '2px solid #2196F3',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.email && (
                  <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Message: <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message (min 10 characters)"
                  rows="5"
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '5px',
                    border: errors.message ? '2px solid #f44336' : '2px solid #2196F3',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
                    {errors.message}
                  </p>
                )}
                <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                  {formData.message.length}/10 characters (minimum)
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  Submit Form
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    backgroundColor: '#FF9800',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Form Submission Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// 1. Create form handler
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  
  // 2. Validate form
  if (validate()) {
    // 3. Process form data
    console.log('Form data:', formData);
    
    // 4. Send to API or process
    // submitToAPI(formData);
    
    // 5. Reset form or show success
    setFormData({ name: '', email: '' });
  }
};

// 6. Use in JSX
<form onSubmit={handleSubmit}>
  <input name="name" value={formData.name} onChange={handleChange} />
  <button type="submit">Submit</button>
</form>`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>e.preventDefault():</strong> Always prevent default form submission to avoid page reload</li>
          <li><strong>onSubmit:</strong> Attach to &lt;form&gt; element, not button</li>
          <li><strong>type="submit":</strong> Button type should be "submit" to trigger form submission</li>
          <li><strong>Validation:</strong> Validate before processing form data</li>
          <li><strong>Error handling:</strong> Display errors to guide user</li>
          <li><strong>Reset form:</strong> Clear form after successful submission</li>
          <li><strong>Controlled inputs:</strong> All inputs must be controlled components</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Form Submission Flow:</h4>
        <ol>
          <li>User fills form and clicks submit</li>
          <li>onSubmit event fires</li>
          <li>e.preventDefault() stops default behavior</li>
          <li>Validate form data</li>
          <li>If valid: process data (API call, etc.)</li>
          <li>Show success message or redirect</li>
          <li>Reset form if needed</li>
        </ol>
      </div>
    </div>
  );
}

export default HandlingFormSubmission;
