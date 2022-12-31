import type { NextApiRequest, NextApiResponse } from "next";

const webhookUrl =
    "https://discord.com/api/webhooks/1058783560540098651/aiobWWPgzahkCPmkM36E-VTl7d3-kL8vQA4vcXt3NFNj7PNVsOHUVw8lzfaOFKwygjnq";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);

    fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
            content: JSON.stringify(req.body),
        }),
    }).then(() => res.status(200));

    return;
}
