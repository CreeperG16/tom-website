import type { NextApiRequest, NextApiResponse } from "next";
import { LinearClient } from "@linear/sdk";

type DiscordEmbed = {
    title?: string;
    type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
    description: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: {
        text: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    image?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    thumbnail?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    video?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    provider?: {
        name?: string;
        url?: string;
    };
    author?: {
        name: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    fields?: { name: string; value: string; inline?: boolean }[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);

    if (!process.env.WEBHOOK_URL) return res.status(500);

    if (req.method !== "POST") return res.status(400);

    // Api key authentication
    const client = new LinearClient({
        apiKey: process.env.LINEAR_API_KEY,
    });

    const author = await client.user(req.body.data.creatorId);

    const embed: DiscordEmbed = {
        title: `${req.body.type} ${req.body.data.team.key}-${req.body.data.number} ${req.body.action}d - ${req.body.data.title}`,
        description: req.body.data.description,
        timestamp: req.body.data.updatedAt,
        url: req.body.url,
        author: {
            name: author.displayName,
            icon_url: author.avatarUrl,
            url: author.url,
        },
        footer: {
            text: req.body.data.project?.name,
        },
    };

    switch (req.body.action) {
        case "create": {
            if (req.body.type === "Issue") {
                if (req.body.data.assignee) {
                    embed.description += `\nAssigned to **${req.body.data.assignee.name}**`;
                }
            }
            break;
        }
        case "update": {
            // embed.title = `${}`
            embed.description = "```json\n" + JSON.stringify(req.body, null, 4) + "```";
            embed.fields = Object.entries(req.body.updatedFrom).map(([k, v]) => ({
                name: k,
                value: `${v} -> ${req.body.data[k]}`,
            }));
            break;
        }
        case "remove": {
            embed.description = "```json\n" + JSON.stringify(req.body, null, 4) + "```";
            break;
        }
    }

    await fetch(process.env.WEBHOOK_URL, {
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
