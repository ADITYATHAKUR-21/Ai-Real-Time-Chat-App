import { Link } from "react-router-dom";

const Navbar = ({setAuthMode}) => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-amber-50 bg-transparent-50 border-b z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between ">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-green-500 cursor-pointer">
            AI Chat
          </h1>

          {/* Menu */}
          <div className="hidden lg:flex items-center gap-12 text-[18px] font-medium">
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>

            <Link to="/about" className="hover:text-green-500">
              About
            </Link>

            <Link to="/contact" className="hover:text-green-500">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-8 ">
            <button
              onClick={() => setAuthMode("login")}
              className="border rounded-full px-8 py-3"
            >
              Login
            </button>

            <button
              onClick={() => setAuthMode("signup")}
              className="bg-green-500 text-white rounded-full px-8 py-3"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
