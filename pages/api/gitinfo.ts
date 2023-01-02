import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // I don't even need this then lol

    return res.status(200).json(JSON.parse(process.env.NEXT_PUBLIC_GIT_COMMITS ?? "[]"));
}
