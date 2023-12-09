import { useForm } from "react-hook-form";
import { useContext, useEffect, useRef, useState } from "react";
import { MainContext, iMessage } from "../../provider/main-provider";
import { useNavigate } from "react-router-dom";
import { MainStyle } from "./main.style";
import { FiSend } from "react-icons/fi";
import audio from "../../assets/mixkit-long-pop-2358.wav";
import { VscUnmute, VscMute } from "react-icons/vsc";

export const MainPage = () => {
  const [mute, setMute] = useState<boolean>(false);
  const { messages, setMessages, sendMessage, socketInstance, token } =
    useContext(MainContext);

  const lastMessage = useRef<null | HTMLLIElement>(null);
  const sound = new Audio(audio);

  const { register, handleSubmit, reset } = useForm<iMessage>();
  const navigate = useNavigate();

  const submit = (message: iMessage) => {
    sendMessage(message.text);
  };

  const scrollToBottom = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    socketInstance.on("message", (mensagem: iMessage) => {
      setMessages([...messages, mensagem]);
    });
    reset({ text: "" });
    !mute && sound.play();

    scrollToBottom();
    return () => {
      socketInstance.off("message");
    };
  }, [messages]);

  return (
    <MainStyle>
      {mute ? (
        <div id="mute-unmute" onClick={() => setMute(false)}>
          Unmute
          <VscMute />
        </div>
      ) : (
        <div id="mute-unmute" onClick={() => setMute(true)}>
          Mute <VscUnmute />
        </div>
      )}
      <section>
        <ul>
          <li ref={lastMessage} id={crypto.randomUUID()} className="owner">
            <div>
              <h1>José Gabriel</h1>
              <p>
                Olá, seja bem vindo ao meu projeto "byte papo". Para que você
                tire o melhor proveito e veja o funcionamento,{" "}
                <a href="http://localhost:5173" target="_blank">
                  abra outra aba
                </a>{" "}
                e logue com outra conta, assim você verá as mensagens de cada
                usuário como se fossem usuários distintos trocando mensagens.
              </p>
            </div>
          </li>
          {messages &&
            messages.map((msg) => (
              <li
                ref={lastMessage}
                id={msg.id}
                className={msg.isOwner ? "owner" : "false"}
              >
                <div>
                  <h1>{msg.user}</h1>
                  <p>{msg.text}</p>
                </div>
              </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit(submit)}>
          <input id="input" type="text" {...register("text")} />
          <button type="submit">
            <FiSend size={32} />
          </button>
        </form>
      </section>
    </MainStyle>
  );
};
