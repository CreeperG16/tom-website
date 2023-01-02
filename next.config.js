const { execSync } = require("child_process");

const commits = execSync("git log")
    .toString()
    .split("Author:")
    .map((x) =>
        x
            .split("\n")
            .map((y) => y.trim())
            .filter((y) => y)
    )
    .map((x, i, arr) => [arr[i - 1]?.at?.(-1), ...(x.length === 4 ? x.slice(0, -1) : x)])
    .slice(1)
    .map((x) => ({
        id: x[0]?.split(" ")[1].trim(),
        message: x[3],
        date: x[2]?.split(":").slice(1).join(":").trim?.(),
        author: { name: x[1]?.split(" ")[0], email: x[1]?.split(" ")[1]?.replace?.(/<|>/g, "") },
    }));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_GIT_COMMITS: JSON.stringify(commits),
    },
};

module.exports = nextConfig;
