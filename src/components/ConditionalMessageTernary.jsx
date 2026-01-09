// Tutorial 20: Conditionally Rendering A Message Using Ternary

function ConditionalMessageTernary() {
  const isLoggedIn = true;
  const hasNotifications = true;
  const notificationCount = 5;
  const userLevel = 'premium';
  const cartItems = 3;
  const isOnline = true;
  const accountBalance = 1500;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 20: Conditionally Rendering A Message Using Ternary</h2>
      <p>
        Use ternary operators to conditionally render messages based on different states and conditions.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Login Status Message</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {isLoggedIn ? (
              <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                ✅ Welcome back! You are successfully logged in.
              </span>
            ) : (
              <span style={{ color: '#f44336', fontWeight: 'bold' }}>
                ❌ Please log in to access your account.
              </span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Notification Message</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {hasNotifications ? (
              <span style={{ color: '#FF9800', fontWeight: 'bold' }}>
                🔔 You have {notificationCount} new notification{notificationCount > 1 ? 's' : ''}!
              </span>
            ) : (
              <span style={{ color: '#9E9E9E' }}>
                No new notifications
              </span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: User Level Message</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {userLevel === 'premium' ? (
              <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
                ⭐ Premium Member - Enjoy exclusive features!
              </span>
            ) : (
              <span style={{ color: '#757575' }}>
                Upgrade to Premium for more features
              </span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Shopping Cart Message</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {cartItems > 0 ? (
              <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                🛒 You have {cartItems} item{cartItems > 1 ? 's' : ''} in your cart
              </span>
            ) : (
              <span style={{ color: '#9E9E9E' }}>
                Your cart is empty. Start shopping!
              </span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 5: Online Status Message</h3>
        <div style={{ border: '2px solid #607D8B', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            Status: {
              isOnline ? (
                <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                  🟢 Online
                </span>
              ) : (
                <span style={{ color: '#f44336', fontWeight: 'bold' }}>
                  🔴 Offline
                </span>
              )
            }
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 6: Account Balance Message</h3>
        <div style={{ border: '2px solid #E91E63', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p>
            {accountBalance > 0 ? (
              <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                💰 Your balance: ${accountBalance}
              </span>
            ) : (
              <span style={{ color: '#f44336', fontWeight: 'bold' }}>
                ⚠️ Your account balance is $0. Please add funds.
              </span>
            )}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Ternary Message Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Basic pattern
{condition ? (
  <span>True message</span>
) : (
  <span>False message</span>
)}

// With variables
{isLoggedIn ? (
  <span>Welcome back!</span>
) : (
  <span>Please log in</span>
)}`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Best Practices:</h4>
        <ul>
          <li>Keep ternary conditions simple and readable</li>
          <li>Use meaningful variable names for conditions</li>
          <li>Add appropriate styling to distinguish messages</li>
          <li>Consider using element variables for complex messages</li>
        </ul>
      </div>
    </div>
  );
}

export default ConditionalMessageTernary;

