// Tutorial 19: Conditionally Rendering List Items

function ConditionalListItems() {
  const todos = [
    { id: 1, task: 'Learn React', completed: true },
    { id: 2, task: 'Build a project', completed: false },
    { id: 3, task: 'Write documentation', completed: true },
    { id: 4, task: 'Deploy application', completed: false }
  ];

  const products = [
    { id: 101, name: 'Laptop', price: 999, inStock: true },
    { id: 102, name: 'Tablet', price: 399, inStock: false },
    { id: 103, name: 'Phone', price: 699, inStock: true },
    { id: 104, name: 'Watch', price: 199, inStock: false }
  ];

  const students = [
    { id: 1, name: 'Alice', score: 95, passed: true },
    { id: 2, name: 'Bob', score: 45, passed: false },
    { id: 3, name: 'Charlie', score: 88, passed: true },
    { id: 4, name: 'Diana', score: 35, passed: false }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 19: Conditionally Rendering List Items</h2>
      <p>
        Conditionally render items in a list based on certain criteria using filter() and map().
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Show Only Completed Tasks</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Completed Tasks:</h4>
          <ul>
            {todos
              .filter(todo => todo.completed)
              .map(todo => (
                <li key={todo.id} style={{ color: '#4CAF50' }}>
                  ✅ {todo.task}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Show Items Based on Condition</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Available Products:</h4>
          <ul>
            {products
              .filter(product => product.inStock)
              .map(product => (
                <li key={product.id}>
                  <strong>{product.name}</strong> - ${product.price} 
                  <span style={{ color: '#4CAF50', marginLeft: '10px' }}>✅ In Stock</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Conditional Styling in List</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>Student Results:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {students.map(student => (
              <li 
                key={student.id}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: student.passed ? '#c8e6c9' : '#ffcdd2',
                  borderRadius: '5px',
                  border: `2px solid ${student.passed ? '#4CAF50' : '#f44336'}`
                }}
              >
                <strong>{student.name}</strong> - Score: {student.score} 
                {student.passed ? ' ✅ Passed' : ' ❌ Failed'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Show All with Conditional Rendering</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <h4>All Tasks:</h4>
          <ul>
            {todos.map(todo => (
              <li 
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#9E9E9E' : '#000',
                  padding: '5px 0'
                }}
              >
                {todo.completed ? '✅' : '⏳'} {todo.task}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Common Patterns:</h4>
        <ul>
          <li><strong>Filter then map:</strong> <code>items.filter(condition).map(...)</code></li>
          <li><strong>Conditional in map:</strong> <code>items.map(item => condition ? JSX1 : JSX2)</code></li>
          <li><strong>Conditional styling:</strong> Apply different styles based on item properties</li>
          <li><strong>Show/hide items:</strong> Filter array before rendering</li>
        </ul>
      </div>
    </div>
  );
}

export default ConditionalListItems;

