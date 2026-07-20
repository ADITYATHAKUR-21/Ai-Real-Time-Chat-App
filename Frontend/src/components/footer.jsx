import { Link } from "react-router-dom";

const   Footer =  () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-green-500">AI Chat</h2>

          <p className="mt-4 text-gray-400">
            Real-time AI messaging platform built with React, Node.js, MongoDB
            and Socket.IO.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Links</h3>

          <div className="space-y-2">
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p>support@aichat.com</p>
          <p>© 2026 AI Chat</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer