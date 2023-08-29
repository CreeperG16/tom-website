import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const WebSocketTest = () => {
  //Public API that will echo messages sent to it back to the client
  //const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const [socketUrl, setSocketUrl] = useState("ws://127.0.0.1:8080");
  const [messageHistory, setMessageHistory] = useState<any[]>([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const [text, setText] = useState("");

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={() => sendMessage(text)} disabled={readyState !== ReadyState.OPEN}>
        Send message
      </button>
      <span>ws status: {connectionStatus}</span>
      {lastMessage ? <span>last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, i) => (
          <span key={i}>{message ? message.data : null}</span>
        ))}
      </ul>
    </>
  );
};
