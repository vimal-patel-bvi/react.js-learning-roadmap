// Tutorial 9: What are Props In React

// Component that receives props
function Welcome({ name, age, city }) {
  return (
    <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Welcome Component</h3>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
      <p>You live in {city}.</p>
    </div>
  );
}

// Component with default props
function Greeting({ message, userName }) {
  return (
    <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Greeting Component</h3>
      <p>{message}, {userName}!</p>
    </div>
  );
}

function PropsBasics() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 9: What are Props In React</h2>
      <p>
        <strong>Props (Properties)</strong> are read-only data passed from parent components to child components.
        They allow components to be dynamic and reusable.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Passing Props to Component</h3>
        <Welcome name="John" age={25} city="New York" />
        <Welcome name="Sarah" age={30} city="London" />
        <Welcome name="Mike" age={28} city="Tokyo" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Different Props Values</h3>
        <Greeting message="Good Morning" userName="Alice" />
        <Greeting message="Good Evening" userName="Bob" />
        <Greeting message="Good Night" userName="Charlie" />
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li>Props are passed from parent to child</li>
          <li>Props are read-only (immutable)</li>
          <li>Props make components reusable</li>
          <li>Props can be strings, numbers, objects, arrays, functions, etc.</li>
        </ul>
      </div>
    </div>
  );
}

export default PropsBasics;

