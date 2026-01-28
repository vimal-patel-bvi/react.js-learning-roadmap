// Tutorial: CSS Modules For Styling

import styles from './CssModulesDemo.module.css';

function CssModulesDemo() {
  return (
    <div className={styles.container}>
      <h2>CSS Modules For Styling</h2>
      <p>
        CSS Modules locally scope your CSS by default. Class names are imported as properties from a CSS file
        ending with <code>.module.css</code>.
      </p>

      <div className={styles.card}>
        <h3 className={styles.title}>Scoped Card</h3>
        <p className={styles.text}>
          These styles are scoped to this component only. You can use the same class names in other components
          without conflicts.
        </p>
        <button className={styles.button}>CSS Modules Button</button>
      </div>

      <div className={styles.infoBox}>
        <h4>How it Works:</h4>
        <ul>
          <li>Create <code>ComponentName.module.css</code></li>
          <li>Import: <code>import styles from './ComponentName.module.css'</code></li>
          <li>Use: <code>className=&#123;styles.className&#125;</code></li>
          <li>Build tool generates unique class names behind the scenes</li>
        </ul>
      </div>
    </div>
  );
}

export default CssModulesDemo;

