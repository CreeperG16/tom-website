import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);

    if (!process.env.WEBHOOK_URL) return res.status(500);

    if (req.method !== "POST") return res.status(400);

    const embed = {
        title: `${req.body.type} ${req.body.action}d`,
        description: "HALLO",
        timestamp: req.body.data.updatedAt,
        url: req.body.url,
    };

    switch (req.body.action) {
        case "create": {
            if (req.body.type === "Issue") {
                embed.description = `Issue **${req.body.data.team.key}-${req.body.data.number}**: ${req.body.data.title}`;
                if (req.body.data.assignee) {
                    embed.description += `\nAssigned to **${req.body.data.assignee.name}**`;
                }
                // embed.description += `\n`;
            }
            break;
        }
        case "update": {
            // embed.title = `${}`
            embed.description = "```json\n" + JSON.stringify(req.body, null, 4) + "```";
            break;
        }
        case "remove": {
            embed.description = "```json\n" + JSON.stringify(req.body, null, 4) + "```";
            break;
        }
    }

    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            embeds: [embed],
        }),
    });

    return res.status(200);
}
