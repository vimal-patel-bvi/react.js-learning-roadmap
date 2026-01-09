// Tutorial 14: Rendering Array Of Objects In React

function RenderingArrayOfObjects() {
  // Array of student objects
  const students = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 21, grade: 'B' },
    { id: 3, name: 'Charlie', age: 19, grade: 'A' },
    { id: 4, name: 'Diana', age: 22, grade: 'C' }
  ];

  // Array of product objects
  const products = [
    { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 102, name: 'Headphones', price: 99, category: 'Audio' },
    { id: 103, name: 'Mouse', price: 25, category: 'Accessories' },
    { id: 104, name: 'Keyboard', price: 75, category: 'Accessories' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 14: Rendering Array Of Objects In React</h2>
      <p>
        When rendering arrays of objects, access object properties using dot notation or destructuring.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Student List</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#2196F3', color: 'white' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Age</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>{student.id}</td>
                  <td style={{ padding: '10px' }}>{student.name}</td>
                  <td style={{ padding: '10px' }}>{student.age}</td>
                  <td style={{ padding: '10px' }}>{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Product Cards</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {products.map((product) => (
            <div 
              key={product.id}
              style={{ 
                border: '2px solid #4CAF50', 
                padding: '15px', 
                borderRadius: '8px',
                minWidth: '200px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>{product.name}</h4>
              <p style={{ margin: '5px 0' }}><strong>Price:</strong> ${product.price}</p>
              <p style={{ margin: '5px 0' }}><strong>Category:</strong> {product.category}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Using Destructuring</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          {students.map(({ id, name, age, grade }) => (
            <div key={id} style={{ padding: '10px', margin: '5px 0', backgroundColor: '#fff3e0', borderRadius: '3px' }}>
              <strong>{name}</strong> (Age: {age}) - Grade: {grade}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Access properties:</strong> Use <code>object.property</code> or destructure</li>
          <li><strong>Use unique keys:</strong> Prefer object.id over index for keys</li>
          <li><strong>Destructuring:</strong> Makes code cleaner: <code>&#123;name, age&#125;</code></li>
          <li><strong>Nested objects:</strong> Access with <code>object.nested.property</code></li>
        </ul>
      </div>
    </div>
  );
}

export default RenderingArrayOfObjects;

