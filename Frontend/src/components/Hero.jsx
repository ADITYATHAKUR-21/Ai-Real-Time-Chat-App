import { Link } from "react-router-dom";

const  Hero = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center border-be-orange-100">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Real-Time AI Chat
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Fast, secure, and intelligent conversations powered by Socket.IO and
            AI.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Get Started
            </Link>

            <Link to="/about" className="border px-6 py-3 rounded-xl">
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl h-125 flex items-center justify-center text-2xl">
          Chat Preview
        </div>
      </div>
    </section>
  );
}
export default Hero
