// Tutorial: Style with SASS (SCSS)

import './SassStylingDemo.scss';

function SassStylingDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Style with SASS (SCSS) - Practical Example</h2>
      <p>
        SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds powerful features like variables,
        nesting, mixins, and more. This example uses real SASS compiled to CSS!
      </p>

      <div className="sass-card">
        <h3 className="sass-card__title">SASS Card Example</h3>
        <p className="sass-card__content">
          This card is styled using SASS variables, nesting, and mixins. Notice how clean and organized the SASS code is!
        </p>
      </div>

      <div className="sass-card sass-card--highlighted">
        <h3 className="sass-card__title">Highlighted Card</h3>
        <p className="sass-card__content">
          This card uses a modifier class (BEM methodology) to change its appearance. All defined in SASS!
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>Button Examples (Using SASS Mixins & Nesting):</h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
          <button className="button button--primary">Primary Button</button>
          <button className="button button--secondary">Secondary Button</button>
          <button className="button button--danger">Danger Button</button>
          <button className="button button--success">Success Button</button>
        </div>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Hover over the buttons to see the SASS-generated hover effects!
        </p>
      </div>

      <div className="sass-info">
        <h4>Setup Steps (Already Done!):</h4>
        <ul>
          <li>✅ Install SASS: <code>npm install -D sass</code></li>
          <li>✅ Create a file: <code>SassStylingDemo.scss</code></li>
          <li>✅ Import it in your component: <code>import './SassStylingDemo.scss'</code></li>
          <li>✅ Use classes in JSX with className</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>SASS Features Demonstrated:</h4>
        <ul>
          <li><strong>Variables:</strong> $primary-color, $spacing-unit, etc.</li>
          <li><strong>Nesting:</strong> .button with &--primary, &--secondary inside</li>
          <li><strong>Mixins:</strong> @mixin button-base for reusable button styles</li>
          <li><strong>Functions:</strong> darken() to create hover colors</li>
          <li><strong>BEM Methodology:</strong> .sass-card__title, .sass-card--highlighted</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Benefits:</h4>
        <ul>
          <li>Variables for colors, spacing, fonts - change once, update everywhere</li>
          <li>Nesting for cleaner, structured CSS that matches HTML structure</li>
          <li>Mixins and functions for reusable styles and calculations</li>
          <li>Better organization for large projects with partials</li>
          <li>Compiles to standard CSS that browsers understand</li>
        </ul>
      </div>
    </div>
  );
}

export default SassStylingDemo;

