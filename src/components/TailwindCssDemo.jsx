// Tutorial: Tailwind CSS Setup and Usage in React

function TailwindCssDemo() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Setup and Usage in React</h2>
      <p className="mb-4">
        Tailwind CSS is a utility-first CSS framework. You style elements by adding utility classes directly in
        <code> className</code>. Below is how you typically set it up in a React (Vite) project.
      </p>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-2 text-green-800">✅ Setup Complete!</h3>
        <p className="text-sm text-green-700 mb-2">
          Tailwind CSS is now configured and working in this project! All the examples below use real Tailwind classes.
        </p>
        <div className="bg-white p-3 rounded text-xs">
          <p className="font-semibold mb-1">Setup Steps (Already Done):</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>✅ Installed: <code>npm install -D tailwindcss postcss autoprefixer</code></li>
            <li>✅ Created <code>tailwind.config.js</code> with content paths</li>
            <li>✅ Created <code>postcss.config.js</code></li>
            <li>✅ Added Tailwind directives to <code>index.css</code></li>
          </ol>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-2">2. Example Tailwind UI</h3>
        <p className="text-sm text-gray-600 mb-3">
          This card is styled only with Tailwind classes. There is no custom CSS file.
        </p>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-lg font-bold text-blue-600 mb-2">Tailwind Card</h4>
          <p className="text-gray-700 mb-4 text-sm">
            Utility classes like <code>bg-blue-500</code>, <code>text-white</code>, <code>p-4</code>,{' '}
            <code>rounded</code> let you build UIs quickly.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded mr-2 text-sm">
            Primary Button
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded text-sm">
            Secondary Button
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4 text-sm">
        <h3 className="font-semibold mb-2">3. Example JSX with Tailwind</h3>
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-auto">
{`function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
      Click Me
    </button>
  );
}`}
        </pre>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-3 text-purple-800">3. Responsive Design Example</h3>
        <p className="text-sm text-gray-700 mb-3">
          This grid changes layout based on screen size using Tailwind's responsive prefixes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            <p className="font-bold">Card 1</p>
            <p className="text-xs mt-1">1 col on mobile, 2 on tablet, 3 on desktop</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center">
            <p className="font-bold">Card 2</p>
            <p className="text-xs mt-1">Responsive grid!</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
            <p className="font-bold">Card 3</p>
            <p className="text-xs mt-1">Try resizing the window</p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-3 text-indigo-800">4. Interactive State Examples</h3>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200">
            Hover & Focus Me
          </button>
          <button className="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-white font-medium px-6 py-2 rounded-lg transition-transform duration-200">
            Scale on Hover
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 hover:shadow-lg text-white font-medium px-6 py-2 rounded-lg transition-shadow duration-200">
            Shadow on Hover
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Hover over buttons to see: color changes, scale transforms, and shadow effects
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Key Points:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>You write almost no custom CSS; you compose utility classes</li>
          <li>
            Responsive classes: <code>md:bg-red-500</code>, <code>lg:text-xl</code>, <code>sm:hidden</code>
          </li>
          <li>
            State classes: <code>hover:</code>, <code>focus:</code>, <code>active:</code>, <code>disabled:</code>
          </li>
          <li>Works great with React components and props for conditional classes</li>
          <li>Utility-first approach: build complex designs from simple utilities</li>
          <li>PurgeCSS automatically removes unused styles in production</li>
        </ul>
      </div>
    </div>
  );
}

export default TailwindCssDemo;

