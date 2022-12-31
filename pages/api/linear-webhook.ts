import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);

    if (!process.env.WEBHOOK_URL) return res.status(500);

    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify({
            content: JSON.stringify(req.body),
        }),
    }).then(() => res.status(200));

    return;
}
