import { MessageSquare, Bot, ShieldCheck, Zap } from "lucide-react";


const About = () => {
  
  const features = [
    {
      icon: <Zap className="text-green-600" size={32} />,
      title: "Real-Time Messaging",
      description:
        "Experience lightning-fast communication powered by Socket.IO with instant message delivery.",
    },
    {
      icon: <Bot className="text-green-600" size={32} />,
      title: "AI Assistant",
      description:
        "Get smart AI-powered responses to improve conversations and productivity.",
    },
    {
      icon: <ShieldCheck className="text-green-600" size={32} />,
      title: "Secure",
      description:
        "Authentication with JWT and secure communication keeps your data protected.",
    },
    {
      icon: <MessageSquare className="text-green-600" size={32} />,
      title: "Modern UI",
      description:
        "Clean, responsive, and user-friendly interface designed for desktop and mobile devices.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About AI Real-Time Chat
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            AI Real-Time Chat is a modern messaging platform built with React,
            Node.js, MongoDB, and Socket.IO. It combines real-time communication
            with AI-powered assistance to create a fast, secure, and engaging
            chat experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

            <p className="text-gray-600 leading-8">
              We aim to make online communication smarter and faster. By
              combining real-time messaging with AI capabilities, we help users
              collaborate, learn, and communicate more efficiently from anywhere
              in the world.
            </p>
          </div>

          <div className="bg-green-100 rounded-3xl h-80 flex items-center justify-center">
            <span className="text-2xl font-semibold text-green-700">
              AI Chat Illustration
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                {feature.icon}

                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Built With Modern Technologies</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Socket.IO",
              "JWT",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
