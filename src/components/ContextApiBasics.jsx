// Tutorial 75: Context API In React

import { createContext, useContext, useState } from 'react';

// Context created in the same file for the basic example
export const UserContext = createContext({ user: { name: 'John Doe', role: 'Admin' }, setUser: () => {} });

function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div
      style={{
        border: '2px solid #2196F3',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '10px',
        backgroundColor: '#e3f2fd',
      }}
    >
      <h3 style={{ marginTop: 0 }}>UserProfile Component</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}

function UserGreeting() {
  const {user, setUser} = useContext(UserContext);
  return (
    <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
      Hello, <strong>{user.name}</strong>! You are logged in as <strong>{user.role}</strong>.
      <button onClick={() => setUser({ name: 'Jane Doe 1', role: 'Editor 2' })}>Change User</button>
    </p>
  );
}

function ContextApiBasics() {
  const [user, setUser] = useState({ name: 'John Doe', role: 'Admin' });

  return (
    <div style={{ padding: '20px' }}>
      <h2>ReactJS Tutorial 75: Context API In React</h2>
      <p>
        The <strong>Context API</strong> lets you share data with many nested components without passing props down
        manually at every level (<em>\"prop drilling\"</em>).
      </p>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
        }}
      >
        <h3>Basic Example</h3>
        <p>
          We create a <code>UserContext</code>, wrap children in <code>UserContext.Provider</code>, and consume the
          value with <code>useContext(UserContext)</code>.
        </p>

        <UserContext.Provider value={{ user, setUser }}>
          <UserProfile />
          <UserGreeting />
        </UserContext.Provider>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#e3f2fd',
        }}
      >
        <h4>Context API Steps:</h4>
        <ol>
          <li>
            <strong>Create context:</strong>{' '}
            <code>const MyContext = createContext(defaultValue)</code>
          </li>
          <li>
            <strong>Provide value:</strong>{' '}
            <code>&lt;MyContext.Provider value=&#123;value&#125;&gt;...&lt;/MyContext.Provider&gt;</code>
          </li>
          <li>
            <strong>Consume value:</strong> <code>const value = useContext(MyContext)</code>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ContextApiBasics;

