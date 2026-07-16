import { useEffect, useState } from "react";
import { connectWs } from "./Ws.js";

function App() {
  const [status, setStatus] = useState("Connecting...");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = connectWs();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      setStatus("Connected");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
      setStatus("Disconnected");
      setConnected(false);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#111b21] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="bg-[#202c33] px-5 py-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-lg">
            A
          </div>

          <div>
            <h1 className="text-white text-lg font-semibold">Ai-Real-Time-Chat-app</h1>
            <p className="text-gray-400 text-sm">Socket.IO Connection Status</p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-[#0b141a] px-6 py-12 flex flex-col items-center">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl ${
              connected ? "bg-green-500/20" : "bg-red-500/20"
            }`}
          >
            {connected}
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">{status}</h2>

          <p className="mt-2 text-center text-gray-400">
            {connected
              ? "Successfully connected to the Socket.IO server."
              : "Waiting to establish connection with the server."}
          </p>

          <div className="mt-8 w-full">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-700 ${
                  connected
                    ? "w-full bg-green-500"
                    : "w-1/3 bg-red-500 animate-pulse"
                }`}
              />
            </div>
          </div>

          <button
            className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
              connected
                ? "bg-[#25D366] hover:bg-[#1faa52] text-white"
                : "bg-gray-700 text-gray-300 cursor-not-allowed"
            }`}
          >
            {connected ? "Ready to Chat" : "Connecting..."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
