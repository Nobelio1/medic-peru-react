import { useState, useEffect, FormEvent } from "react";
import io from "socket.io-client";
import { LogoIa } from "../../../../assets";

const socket = io("/");

interface MensajesRes {
  body: string;
  from: string;
}

export const ChatBody = () => {
  const fechaActual = new Date();

  const [messages, setMessages] = useState<MensajesRes[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const receiveMessage = (message: any) =>
    setMessages((state) => [...state, message]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages((state) => [...state, newMessage]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
    <div className="flex flex-col items-end bg-white w-full h-full border-2 rounded-2xl border-blue-300 px-9 py-10 overflow-hidden space-y-8">
      <main className="w-full h-full overflow-y-auto">
        <div>
          <h1 className="block text-center uppercase">
            {fechaActual.toLocaleString("es-ES", {
              year: "numeric",
              month: "short",
            })}
          </h1>
        </div>

        {/* list */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.from === "Me" ? "chat-end" : "chat-start"
            } `}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={LogoIa} />
              </div>
            </div>
            <div className="chat-header">
              {message.from == "Me" ? "Yo " : "IA"}
            </div>
            <div
              className={`chat-bubble ${
                message.from === "Me"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-300 text-blue text-black"
              } bg-blue-300 text-blue text-black`}
            >
              {message.body}
            </div>
          </div>
        ))}

        {/* TODO: DAR FORMATO */}
      </main>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          name="message"
          type="text"
          placeholder="Escribe tu consulta"
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black mt-6"
          value={message}
          autoFocus
          autoComplete="off"
        />
      </form>
    </div>
  );
};
