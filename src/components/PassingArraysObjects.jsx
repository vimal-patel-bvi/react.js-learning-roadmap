// Tutorial 12: Passing Arrays & Objects To Components Using Props

// Component receiving an array
function ListItems({ items, title }) {
  return (
    <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Component receiving an object
function UserProfile({ user }) {
  return (
    <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Country:</strong> {user.address.country}</p>
      <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
    </div>
  );
}

// Component receiving array of objects
function ProductList({ products }) {
  return (
    <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Product List</h3>
      {products.map((product, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0', borderRadius: '3px' }}>
          <p><strong>{product.name}</strong> - ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}

function PassingArraysObjects() {
  // Array of strings
  const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];
  
  // Object
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    address: {
      city: 'New York',
      country: 'USA'
    },
    skills: ['JavaScript', 'React', 'Node.js']
  };
  
  // Array of objects
  const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Headphones', price: 99, category: 'Audio' },
    { name: 'Mouse', price: 25, category: 'Accessories' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 12: Passing Arrays & Objects To Components Using Props</h2>
      <p>
        You can pass complex data types like arrays and objects as props to components.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Passing Arrays</h3>
        <ListItems items={fruits} title="Fruits List" />
        <ListItems items={colors} title="Colors List" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Passing Objects</h3>
        <UserProfile user={user} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Passing Array of Objects</h3>
        <ProductList products={products} />
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>Arrays can be passed directly: <code>items={['item1', 'item2']}</code></li>
          <li>Objects can be passed directly: <code>user={{name: 'John'}}</code></li>
          <li>Nested objects and arrays work the same way</li>
          <li>Use destructuring to access nested properties easily</li>
        </ul>
      </div>
    </div>
  );
}

export default PassingArraysObjects;

