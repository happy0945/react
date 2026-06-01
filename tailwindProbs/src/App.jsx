import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-green-100 ">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MyWebsite</h1>

            <ul className="flex gap-6">
              <li className="cursor-pointer hover:text-gray-200 ">Home</li>
              <li className="cursor-pointer hover:text-gray-200">About</li>
              <li className="cursor-pointer hover:text-gray-200">Services</li>
              <li className="cursor-pointer hover:text-gray-200">Contact</li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold text-gray-800">
            Welcome to My Website
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Learn React and Tailwind CSS by building amazing projects.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </section>

        {/* Cards Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Build modern and responsive websites using React.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">UI Design</h3>
              <p className="text-gray-600">
                Create beautiful interfaces with Tailwind CSS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                Improve website ranking and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
          <p>© 2026 MyWebsite. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
