// Tutorial: Basic Styling in React Components

function BasicStyling() {
  const cardStyle = {
    border: '2px solid #2196F3',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#e3f2fd',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>How to Style in React.js Components (Basics)</h2>
      <p>
        In React, you can style components in different ways: inline styles, CSS stylesheets, CSS Modules,
        SASS/SCSS, and utility-first frameworks like Tailwind CSS. This tutorial gives an overview of the basic
        options you will use in real projects.
      </p>

      <div style={cardStyle}>
        <h3>1. Inline Styles</h3>
        <p>
          Inline styles are written directly in JSX using the <code>style</code> prop. Styles are specified as a
          JavaScript object with <strong>camelCased</strong> property names.
        </p>
        <div
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '5px',
            display: 'inline-block',
          }}
        >
          This box is styled with inline styles
        </div>
      </div>

      <div style={{ ...cardStyle, backgroundColor: '#e8f5e9', borderColor: '#4CAF50' }}>
        <h3>2. CSS Stylesheets</h3>
        <p>
          Create regular <code>.css</code> files and import them into your components. Then use the
          <code>className</code> prop to apply CSS classes.
        </p>
        <p>
          Example: <code>import './Button.css'</code> and then <code>className="primary-button"</code>.
        </p>
      </div>

      <div style={{ ...cardStyle, backgroundColor: '#fff3e0', borderColor: '#FF9800' }}>
        <h3>3. CSS Modules</h3>
        <p>
          CSS Modules let you write CSS that is scoped to a specific component. Class names are imported as a
          JavaScript object, which prevents global name conflicts.
        </p>
        <p>
          Example: <code>import styles from './Button.module.css'</code> then{' '}
          <code>className=&#123;styles.primary&#125;</code>.
        </p>
      </div>

      <div style={{ ...cardStyle, backgroundColor: '#f3e5f5', borderColor: '#9C27B0' }}>
        <h3>4. SASS / SCSS</h3>
        <p>
          SASS is a CSS preprocessor that adds variables, nesting, mixins, and more. You write styles in
          <code>.scss</code> files and they are compiled to CSS.
        </p>
      </div>

      <div style={{ ...cardStyle, backgroundColor: '#e0f7fa', borderColor: '#00BCD4' }}>
        <h3>5. Tailwind CSS</h3>
        <p>
          Tailwind is a utility-first CSS framework. You style elements by applying utility classes directly in
          <code>className</code> (for example{' '}
          <code>&quot;bg-blue-500 text-white px-4 py-2 rounded&quot;</code>).
        </p>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Summary:</h4>
        <ul>
          <li>
            <strong>Inline styles</strong> for quick, component-scoped styles
          </li>
          <li>
            <strong>CSS stylesheets</strong> for global styling and reuse
          </li>
          <li>
            <strong>CSS Modules</strong> for locally scoped, conflict-free styles
          </li>
          <li>
            <strong>SASS</strong> for powerful, maintainable CSS
          </li>
          <li>
            <strong>Tailwind</strong> for utility-first, rapid UI development
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BasicStyling;

