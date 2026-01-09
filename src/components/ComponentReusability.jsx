// Tutorial 8: Reusability of Components In React

// Reusable Button Component
function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {text}
    </button>
  );
}

// Reusable Card Component
function Card({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ComponentReusability() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 8: Reusability of Components In React</h2>
      <p>Components can be reused multiple times with different props, making code DRY (Don't Repeat Yourself).</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Reusable Button Component</h3>
        <Button text="Click Me" color="blue" />
        <Button text="Submit" color="green" />
        <Button text="Cancel" color="red" />
        <Button text="Save" color="orange" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Reusable Card Component</h3>
        <Card 
          title="Card 1" 
          description="This is the first card using the reusable Card component." 
        />
        <Card 
          title="Card 2" 
          description="This is the second card with different content." 
        />
        <Card 
          title="Card 3" 
          description="Same component, different data - that's reusability!" 
        />
      </div>
    </div>
  );
}

export default ComponentReusability;

