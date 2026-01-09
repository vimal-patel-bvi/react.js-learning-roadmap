// Tutorial 10: Destructuring Props

// Without destructuring (accessing props object)
function UserInfoOld(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Without Destructuring</h3>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

// With destructuring (cleaner approach)
function UserInfoNew({ name, email, role }) {
  return (
    <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>With Destructuring</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

// Destructuring with default values
function ProductCard({ name, price, discount = 0, inStock = true }) {
  const finalPrice = price - discount;
  
  return (
    <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>Original Price: ${price}</p>
      {discount > 0 && <p>Discount: ${discount}</p>}
      <p><strong>Final Price: ${finalPrice}</strong></p>
      <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}

function DestructuringProps() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 10: Destructuring Props</h2>
      <p>
        <strong>Destructuring</strong> allows you to extract specific properties from props object,
        making code cleaner and more readable.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Without vs With Destructuring</h3>
        <UserInfoOld name="John Doe" email="john@example.com" role="Developer" />
        <UserInfoNew name="Jane Smith" email="jane@example.com" role="Designer" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Destructuring with Default Values</h3>
        <ProductCard name="Laptop" price={999} discount={100} />
        <ProductCard name="Mouse" price={25} inStock={false} />
        <ProductCard name="Keyboard" price={75} discount={10} inStock={true} />
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Benefits of Destructuring:</h4>
        <ul>
          <li>Cleaner and more readable code</li>
          <li>No need to write props.propertyName repeatedly</li>
          <li>Can set default values easily</li>
          <li>Makes it clear what props a component expects</li>
        </ul>
      </div>
    </div>
  );
}

export default DestructuringProps;

