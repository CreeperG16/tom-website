import { NextApiRequest, NextApiResponse } from "next";
// import http from "http";
// import request from "request";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.headers.Origin);
    console.log("a", req.socket.remoteAddress);

    // const data = await new Promise((r) =>
    //     request(
    //         {
    //             url: "https://idp.e-kreta.hu/nonce",
    //             method: "GET",
    //             // proxy: "https://89.132.144.41:9090",
    //             // proxy: "http://178.248.201.153:4153",
    //             proxy: "http://178.48.68.61:4145",
    //         },
    //         (err, inRes, body) => {
    //             console.log(err, inRes, body);
    //             r(body);
    //         }
    //     )
    // );

    const data = await fetch("https://idp.e-kreta.hu/nonce", {
        headers: {
            "X-Forwarded-For": req.socket.remoteAddress ?? "127.0.0.1",
        },
    }).then((x) => x.text());

    console.log(data, 1);

    // res.status(200).send(
    //     await fetch("https://idp.e-kreta.hu/nonce", { headers: { origin: req.headers.origin ?? "" } }).then((x) =>
    //         x.text()
    //     )
    // );
    return res.json({ data, ip: req.socket.remoteAddress });
}
