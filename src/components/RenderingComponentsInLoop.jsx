// Tutorial 15: Rendering Components Inside A Loop

// Reusable component for a single item
function StudentCard({ student }) {
  return (
    <div style={{ 
      border: '2px solid #2196F3', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#1976D2' }}>{student.name}</h3>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
}

// Another reusable component
function ProductItem({ product }) {
  return (
    <div style={{ 
      border: '2px solid #4CAF50', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: '#f1f8f4'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>{product.name}</h4>
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1b5e20' }}>
        ${product.price}
      </p>
      <p style={{ fontSize: '12px', color: '#666' }}>{product.category}</p>
    </div>
  );
}

function RenderingComponentsInLoop() {
  const students = [
    { id: 1, name: 'Alice Johnson', age: 20, grade: 'A', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', age: 21, grade: 'B', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', age: 19, grade: 'A', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', age: 22, grade: 'C', email: 'diana@example.com' }
  ];

  const products = [
    { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 102, name: 'Headphones', price: 99, category: 'Audio' },
    { id: 103, name: 'Mouse', price: 25, category: 'Accessories' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 15: Rendering Components Inside A Loop</h2>
      <p>
        Instead of rendering JSX directly in a loop, create reusable components and render them inside the loop.
        This makes code more modular and maintainable.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Rendering StudentCard Components</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Rendering ProductItem Components</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Benefits of Rendering Components in Loops:</h4>
        <ul>
          <li><strong>Reusability:</strong> Component can be used multiple times</li>
          <li><strong>Maintainability:</strong> Easier to update component logic</li>
          <li><strong>Readability:</strong> Cleaner and more organized code</li>
          <li><strong>Separation of Concerns:</strong> Each component handles its own rendering</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Code Pattern:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Define component
function StudentCard({ student }) {
  return <div>...</div>;
}

// Render in loop
{students.map((student) => (
  <StudentCard key={student.id} student={student} />
))}`}
        </pre>
      </div>
    </div>
  );
}

export default RenderingComponentsInLoop;

