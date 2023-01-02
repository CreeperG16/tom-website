import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [commitInfo, setCommitInfo] = useState({ id: "", message: "", date: "", author: { name: "", email: "" } });

    useEffect(() => {
        // const commits = await fetch("https://tom-website.vercel.app/api/gitinfo").then((x) => x.json());
        fetch("http://localhost:3000/api/gitinfo")
            .then((x) => x.json())
            .then((x) => setCommitInfo(x[0]));
        console.log(1);
    }, []);

    return (
        <>
            <Head>
                <title>Tom16</title>
            </Head>
            <main>
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <h1 style={{ fontFamily: "sans-serif" }}>hellooo</h1>
                </div>
                <footer
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                        padding: 15,
                    }}
                >
                    <p style={{ fontFamily: "sans-serif", opacity: 0.5 }}>
                        Commit{" "}
                        <a
                            href={"https://github.com/CreeperG16/tom-website/commit/" + commitInfo.id}
                            title={commitInfo.date}
                            target="_blank"
                        >
                            {commitInfo.id}
                        </a>{" "}
                        <span style={{ fontStyle: "italic" }}>{commitInfo.message}</span> - {commitInfo.author.name}
                    </p>
                </footer>
            </main>
        </>
    );
}
