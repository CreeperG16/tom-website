"use client";

import { useState, useEffect } from "react";

const APP_ID = "1130896939886587987";
const SCOPES = ["rpc", "activities.write"];

import RPC from "discord-rpc";

export default function DiscordRPC() {
  RPC.register(APP_ID);

  const [RPCClient, setRPCClient] = useState<RPC.Client | null>(null);

  if (RPCClient === null) {
    const client = new RPC.Client({ transport: "websocket" });
    // @ts-ignore
    client.login({ clientId: APP_ID, /*origin: "http://localhost",*/ scopes: SCOPES }).then(() => setRPCClient(client)).catch((err) => console.error(err));
  }

  useEffect(() => {
    if (RPCClient === null) return;
    console.log("Client connected");

    RPCClient.setActivity({
      details: "test details",
      state: "test state",
      startTimestamp: Date.now(),
      instance: false,
    });
  }, [RPCClient]);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

//import { useState, useEffect } from "react";
//import useWebSocket, { ReadyState } from "react-use-websocket";

//interface ComponentProps {
//}

//const PORTS = [6463, 6464, 6465, 6466, 6467, 6468, 6469, 6470, 6471, 6472];

//export default function DiscordRPC({}: ComponentProps) {
//  const [enabled, setEnabled] = useState(false);
//  const [rpcUrl, setRpcUrl] = useState("");
//  const [messages, setMessages] = useState<any[]>([]);

//  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://127.0.0.1:6463");

//  useEffect(() => {
//    if (readyState === ReadyState.CONNECTING || readyState === ReadyState.CLOSED) return;

//    (async () => {
//      for (const port of PORTS) {
//        const url = `ws://127.0.0.1:${port}`;
//        setRpcUrl(url);
//        console.log("Trying port", port);
//        await new Promise((r) => setTimeout(r, 10_000));
//        if (readyState !== ReadyState.OPEN) {
//          // timed out - check next port
//          console.log("Timed out", ReadyState[readyState]);
//          continue;
//        } else break;
//      }

//      if (readyState !== ReadyState.OPEN) {
//        console.log("Failed to connect");
//        return;
//      }

//      console.log("Connected to RPC");

//      sendMessage(JSON.stringify({nonce: crypto.randomUUID(), cmd: "AUTHORIZE", args: {client_id: APP_ID, scopes: SCOPES}}));
//    })();
//  }, []);

//  useEffect(() => {
//    if (lastMessage !== null) {
//      setMessages((prev) => prev.concat(JSON.stringify(lastMessage)));
//    }
//  }, [lastMessage])

//  return (
//    <>
//      <div className="discord-rpc">
//        <div className="discord-rpc-title">
//          <h1>Discord RPC</h1>
//        </div>
//        <div className="discord-rpc-content">
//          <p>Discord RPC is currently {enabled ? "enabled" : "disabled"}</p>
//          <button onClick={() => setEnabled(!enabled)}>Toggle</button>
//          {messages.map((message, i) => (
//            <span key={i}>{message}</span>
//          ))}
//        </div>
//      </div>
//    </>
//  );
//}
