// Tutorial: CSS Stylesheets To Style Components

import './CssStylesheetDemo.css';

function CssStylesheetDemo() {
  return (
    <div className="css-demo-container">
      <h2>CSS Stylesheets To Style Components</h2>
      <p>
        The most common way to style React components is to use regular <code>.css</code> files and apply classes
        using the <code>className</code> prop.
      </p>

      <div className="css-demo-card">
        <h3>Example: Card Component</h3>
        <p>This card is styled using classes from CssStylesheetDemo.css.</p>
        <button className="css-demo-button">Styled Button</button>
      </div>

      <div className="css-demo-info">
        <h4>Steps:</h4>
        <ol>
          <li>
            Create a CSS file, for example <code>CssStylesheetDemo.css</code>
          </li>
          <li>Write your CSS classes inside it</li>
          <li>
            Import the CSS file in your component: <code>import './CssStylesheetDemo.css'</code>
          </li>
          <li>
            Use <code>className</code> to apply classes: <code>className="my-class"</code>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default CssStylesheetDemo;

