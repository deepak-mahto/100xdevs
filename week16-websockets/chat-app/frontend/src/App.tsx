import { useEffect, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState(["hi there", "hello there"]);
  const [message, setMessage] = useState("");
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="h-[80vh] p-4">
        {messages.map((message) => (
          <div className="m-10">
            <span className="bg-white text-black rounded p-4">{message}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full bg-white">
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="Type message"
          className="flex-1 p-4"
        />
        <button
          onClick={() => {
            wsRef.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: message,
                },
              })
            );
          }}
          className="bg-purple-600 text-white p-4"
        >
          Send message
        </button>
      </div>
    </div>
  );
};

export default App;
