// Tutorial: Combine Multiple Reducers, Store, Redux Slices

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../store';
import { increment, decrement, reset } from '../store/counterSlice';
import { setUser, logout } from '../store/userSlice';

function CounterPanel() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '2px solid #2196F3', padding: '15px', borderRadius: '8px', marginBottom: '15px', backgroundColor: '#e3f2fd' }}>
      <h3 style={{ marginTop: 0 }}>Counter Slice</h3>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button onClick={() => dispatch(increment())} style={{ backgroundColor: '#2196F3', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>+1</button>
        <button onClick={() => dispatch(decrement())} style={{ backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>-1</button>
        <button onClick={() => dispatch(reset())} style={{ backgroundColor: '#FF9800', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset</button>
      </div>
    </div>
  );
}

function UserPanel() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: 'John Doe', email: 'john@example.com' }));
  };

  return (
    <div style={{ border: '2px solid #4CAF50', padding: '15px', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
      <h3 style={{ marginTop: 0 }}>User Slice</h3>
      {user.isLoggedIn ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => dispatch(logout())} style={{ backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login (set user)</button>
      )}
    </div>
  );
}

function ReduxDemoContent() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Combine Multiple Reducers, Store &amp; Redux Slices</h2>
      <p>
        Redux Toolkit provides <strong>createSlice</strong> (reducer + actions in one file) and{' '}
        <strong>configureStore</strong> to combine multiple reducers into a single store. Each slice owns a piece of state.
      </p>

      <div style={{ marginTop: '20px', border: '2px solid #9C27B0', padding: '15px', borderRadius: '8px', backgroundColor: '#f3e5f5' }}>
        <h3>Example: Two Slices in One Store</h3>
        <p>Below, <code>counter</code> and <code>user</code> are separate slices. The store combines them.</p>
        <CounterPanel />
        <UserPanel />
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Concepts</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>createSlice</strong>: name, initialState, reducers → auto-generated actions and reducer.</li>
          <li><strong>configureStore</strong>: pass <code>&#123; reducer: &#123; counter: counterReducer, user: userReducer &#125; &#125;</code>.</li>
          <li><strong>useSelector</strong>: read state (e.g. <code>state.counter.value</code>).</li>
          <li><strong>useDispatch</strong>: dispatch actions (e.g. <code>dispatch(increment())</code>).</li>
          <li><strong>Provider</strong>: wrap app (or demo) with <code>&lt;Provider store=&#123;store&#125;&gt;</code>.</li>
        </ul>
      </div>

      <div style={{ marginTop: '15px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>File Structure</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '12px', borderRadius: '5px', overflow: 'auto', fontSize: '12px' }}>
{`store/
  counterSlice.js   → createSlice('counter', ...)
  userSlice.js      → createSlice('user', ...)
  index.js          → configureStore({ reducer: { counter, user } })`}
        </pre>
      </div>
    </div>
  );
}

function ReduxStoreDemo() {
  return (
    <Provider store={store}>
      <ReduxDemoContent />
    </Provider>
  );
}

export default ReduxStoreDemo;
