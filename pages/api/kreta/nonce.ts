import { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";
// import http from "http";
// import request from "request";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.headers.Origin);
    const clientIp = getClientIp(req);

    console.log("a", req.socket.remoteAddress, req.headers, clientIp);

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

    const data = await Promise.race([
        fetch("https://idp.e-kreta.hu/nonce", {
            headers: {
                "X-Forwarded-For": clientIp ?? "127.0.0.1",
                "X-Real-IP": clientIp ?? "127.0.0.1",
                Forwarded: `for=${clientIp}`,
            },
        }).then((x) => x.text()),
        new Promise<null>((r) => setTimeout(() => r(null), 5000)),
    ]);

    console.log(data, 1);

    // res.status(200).send(
    //     await fetch("https://idp.e-kreta.hu/nonce", { headers: { origin: req.headers.origin ?? "" } }).then((x) =>
    //         x.text()
    //     )
    // );
    return res.json({ data, ip: clientIp, headers: req.headers });
}
