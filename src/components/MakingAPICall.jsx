// Tutorial 49: Making API Call In React

import { useState, useEffect } from 'react';
import axios from 'axios';

function MakingAPICall() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [postData, setPostData] = useState({ title: '', body: '' });
  const [postResult, setPostResult] = useState(null);

  // Example 1: Fetch data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Example 2: Fetch data when userId changes
  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId]);
  
  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log(response.data)
      setUsers(response.data);
    }).catch(err => {
      setError(err.message);
      console.error('Error fetching users:', err);
    }).finally(() => {
      setLoading(false);
    });
  }

  const __fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
      console.log(data)
      setUsers(data);
    }).catch(err => {
      setError(err.message);
      console.error('Error fetching users:', err);
    }).finally(() => {
      setLoading(false);
    });
  }

  // Fetch multiple users
  const _fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log('response', response);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      console.log(data)
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single user by ID
  const fetchUserById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching user:', err);
    } finally {
      setLoading(false);
    }
  };

  // POST request - Create new post
  const createPost = async () => {
    if (!postData.title || !postData.body) {
      alert('Please fill in both title and body');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: postData.title,
          body: postData.body,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const data = await response.json();
      setPostResult(data);
      setPostData({ title: '', body: '' });
    } catch (err) {
      setError(err.message);
      console.error('Error creating post:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 49: Making API Call In React</h2>
      <p>
        Making API calls in React is typically done using <code>fetch</code> or libraries like <code>axios</code>.
        The <code>useEffect</code> hook is commonly used to fetch data when a component mounts or when dependencies change.
      </p>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: GET Request - Fetch Multiple Users</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <button
            onClick={fetchUsers}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#ccc' : '#2196F3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: '15px'
            }}
          >
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>

          {error && (
            <div style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px'
            }}>
              Error: {error}
            </div>
          )}

          {loading && <p>Loading users...</p>}

          {!loading && users.length > 0 && (
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <h4>Users ({users.length}):</h4>
              {users.map(user => (
                <div
                  key={user.id}
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                    margin: '5px 0',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{user.name}</p>
                  <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
                    {user.email} | {user.phone}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: GET Request - Fetch Single User by ID</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              User ID (1-10):
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={userId}
              onChange={(e) => setUserId(parseInt(e.target.value) || 1)}
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '150px',
                borderRadius: '5px',
                border: '2px solid #4CAF50',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {loading && <p>Loading user...</p>}
          {error && (
            <div style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px'
            }}>
              Error: {error}
            </div>
          )}

          {!loading && user && (
            <div style={{
              border: '1px solid #4CAF50',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: '#e8f5e9'
            }}>
              <h4 style={{ marginTop: 0 }}>{user.name}</h4>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: POST Request - Create New Post</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Title:
            </label>
            <input
              type="text"
              value={postData.title}
              onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter post title"
              style={{
                padding: '8px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '5px',
                border: '2px solid #FF9800',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Body:
            </label>
            <textarea
              value={postData.body}
              onChange={(e) => setPostData(prev => ({ ...prev, body: e.target.value }))}
              placeholder="Enter post body"
              rows="4"
              style={{
                padding: '8px',
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
          </div>

          <button
            onClick={createPost}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#ccc' : '#FF9800',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>

          {error && (
            <div style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '10px',
              borderRadius: '5px',
              marginTop: '15px'
            }}>
              Error: {error}
            </div>
          )}

          {postResult && (
            <div style={{
              marginTop: '15px',
              border: '1px solid #4CAF50',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: '#e8f5e9'
            }}>
              <h4 style={{ marginTop: 0, color: '#4CAF50' }}>✅ Post Created Successfully!</h4>
              <p><strong>ID:</strong> {postResult.id}</p>
              <p><strong>Title:</strong> {postResult.title}</p>
              <p><strong>Body:</strong> {postResult.body}</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>API Call Pattern with fetch:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {`// GET Request
const fetchData = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    setData(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// POST Request
const createData = async (newData) => {
  setLoading(true);
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// Use in useEffect
useEffect(() => {
  fetchData();
}, []);`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>useEffect:</strong> Use to fetch data when component mounts</li>
          <li><strong>async/await:</strong> Modern way to handle promises</li>
          <li><strong>Loading State:</strong> Track when request is in progress</li>
          <li><strong>Error Handling:</strong> Always handle errors with try/catch</li>
          <li><strong>Response.ok:</strong> Check if response is successful</li>
          <li><strong>JSON:</strong> Parse JSON response with .json()</li>
          <li><strong>Headers:</strong> Set Content-Type for POST requests</li>
          <li><strong>Cleanup:</strong> Cancel requests if component unmounts (optional)</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Best Practices:</h4>
        <ul>
          <li>Always handle loading and error states</li>
          <li>Use try/catch for error handling</li>
          <li>Check response.ok before processing data</li>
          <li>Clean up requests if component unmounts (AbortController)</li>
          <li>Use dependency array in useEffect to control when API calls happen</li>
          <li>Consider using libraries like axios for more features</li>
        </ul>
      </div>
    </div>
  );
}

export default MakingAPICall;
