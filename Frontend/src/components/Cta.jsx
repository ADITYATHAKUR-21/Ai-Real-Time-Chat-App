import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Ready to Start?</h2>

        <p className="mt-5 text-gray-600">
          Join thousands of users chatting in real time.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-4 rounded-xl"
        >
          Create Free Account
        </Link>
      </div>
    </section>
  );
}
