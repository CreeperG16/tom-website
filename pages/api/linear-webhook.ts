import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    res.status(200);
}
