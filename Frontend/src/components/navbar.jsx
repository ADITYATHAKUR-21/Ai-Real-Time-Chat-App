
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#f9f5ec] border-b z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-green-500 cursor-pointer">
            AI Chat
          </h1>

          {/* Menu */}
          <div className="hidden lg:flex items-center gap-12 text-[18px] font-medium">
            <button className="hover:text-green-500">About</button>
            <button className="hover:text-green-500">Contact</button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="border border-gray-400 rounded-full px-8 py-3 hover:bg-gray-100 duration-300">
              Login
            </button>

            <button className="bg-green-500 text-white rounded-full px-8 py-3 hover:bg-green-600 duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
