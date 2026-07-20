import { Bot, ShieldCheck, Zap } from "lucide-react";

 const Features = () => {
  const features = [
    {
      icon: <Zap className="text-green-600" size={40} />,
      title: "Real-Time",
      desc: "Instant messaging powered by Socket.IO.",
    },
    {
      icon: <Bot className="text-green-600" size={40} />,
      title: "AI Assistant",
      desc: "Smart AI responses for every conversation.",
    },
    {
      icon: <ShieldCheck className="text-green-600" size={40} />,
      title: "Secure",
      desc: "JWT authentication and encrypted communication.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Features</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {features.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow p-8">
              {item.icon}

              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features
