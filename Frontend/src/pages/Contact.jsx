import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>

          <p className="mt-5 text-lg text-gray-600">
            Have a question, suggestion, or need support? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

              <p className="text-gray-600 leading-8">
                Whether you have questions about our AI chat platform, need
                technical support, or want to share feedback, we're here to
                help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-green-600" size={28} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@airealtimechat.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={28} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" size={28} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">Bihar, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-green-600" size={28} />
                <div>
                  <h3 className="font-semibold">Support Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday | 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
