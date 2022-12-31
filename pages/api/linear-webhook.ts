import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);

    if (!process.env.WEBHOOK_URL) return res.status(500);

    if (req.method !== "POST") return res.status(400);

    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: "```json\n" + JSON.stringify(req.body, null, 4) + "```",
        }),
    });

    return res.status(200);
}
