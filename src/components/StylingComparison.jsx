// Practical Example: Comparing SASS vs Tailwind CSS

import './SassStylingDemo.scss';

function StylingComparison() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">SASS vs Tailwind CSS - Side by Side Comparison</h1>
        <p className="text-gray-600 mb-8">
          This component demonstrates both SASS and Tailwind CSS working together in the same project.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* SASS Side */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">SASS Styling</h2>
            <p className="text-gray-700 mb-4">
              This section uses SASS (SCSS) with variables, mixins, and nesting.
            </p>

            <div className="sass-card">
              <h3 className="sass-card__title">SASS Card Component</h3>
              <p className="sass-card__content">
                This card is styled entirely with SASS. It uses variables for colors, mixins for reusable styles,
                and nesting for organization.
              </p>
            </div>

            <div className="sass-card sass-card--highlighted" style={{ marginTop: '1rem' }}>
              <h3 className="sass-card__title">Highlighted Variant</h3>
              <p className="sass-card__content">
                Using BEM methodology with modifier classes. All styles defined in SASS!
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h4 className="font-semibold mb-2">SASS Buttons:</h4>
              <div className="flex flex-wrap gap-2">
                <button className="button button--primary">Primary</button>
                <button className="button button--secondary">Secondary</button>
                <button className="button button--danger">Danger</button>
                <button className="button button--success">Success</button>
              </div>
            </div>

            <div className="sass-info" style={{ marginTop: '1.5rem' }}>
              <h4>SASS Features:</h4>
              <ul>
                <li>Variables ($primary-color)</li>
                <li>Mixins (@mixin button-base)</li>
                <li>Nesting (.button &--primary)</li>
                <li>Functions (darken())</li>
              </ul>
            </div>
          </div>

          {/* Tailwind Side */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Tailwind CSS Styling</h2>
            <p className="text-gray-700 mb-4">
              This section uses Tailwind utility classes for rapid UI development.
            </p>

            <div className="border-2 border-purple-500 rounded-lg p-5 mb-4 bg-purple-50">
              <h3 className="text-xl font-bold mb-2 text-purple-700">Tailwind Card Component</h3>
              <p className="text-gray-700">
                This card is styled entirely with Tailwind utility classes. No custom CSS needed!
              </p>
            </div>

            <div className="border-2 border-orange-500 rounded-lg p-5 mb-4 bg-orange-50">
              <h3 className="text-xl font-bold mb-2 text-orange-700">Highlighted Variant</h3>
              <p className="text-gray-700">
                Same structure, different utilities. Just change the class names!
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Tailwind Buttons:</h4>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-colors">
                  Primary
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded transition-colors">
                  Secondary
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-colors">
                  Danger
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded transition-colors">
                  Success
                </button>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-semibold mb-2">Tailwind Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Utility classes (bg-blue-500, p-4)</li>
                <li>Responsive (md:grid-cols-2)</li>
                <li>State variants (hover:bg-blue-600)</li>
                <li>No custom CSS needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Combined Example */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Combined Approach</h2>
          <p className="text-gray-700 mb-4">
            You can use both SASS and Tailwind together! Use SASS for complex components and Tailwind for quick utilities.
          </p>

          <div className="sass-card" style={{ marginBottom: '1rem' }}>
            <h3 className="sass-card__title">SASS Card with Tailwind Utilities</h3>
            <p className="sass-card__content mb-4">
              This card uses SASS for structure, but we can add Tailwind classes for quick adjustments.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="button button--primary">SASS Button</button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded transition-colors">
                Tailwind Button
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">When to Use What?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 p-3 text-left">SASS</th>
                  <th className="border border-gray-300 p-3 text-left">Tailwind</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Best For</td>
                  <td className="border border-gray-300 p-3">Complex components, large projects</td>
                  <td className="border border-gray-300 p-3">Rapid prototyping, utility-first design</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Learning Curve</td>
                  <td className="border border-gray-300 p-3">Medium - need to learn SASS syntax</td>
                  <td className="border border-gray-300 p-3">Low - just utility classes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Customization</td>
                  <td className="border border-gray-300 p-3">Full control with variables & mixins</td>
                  <td className="border border-gray-300 p-3">Configurable via tailwind.config.js</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">File Size</td>
                  <td className="border border-gray-300 p-3">Only what you write</td>
                  <td className="border border-gray-300 p-3">Purged unused classes automatically</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Maintenance</td>
                  <td className="border border-gray-300 p-3">Organize in partials, easy to maintain</td>
                  <td className="border border-gray-300 p-3">Classes in JSX, can get verbose</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylingComparison;
