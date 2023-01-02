import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const commitInfo = JSON.parse(process.env.NEXT_PUBLIC_GIT_COMMITS ?? "[]")[0];

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        typeof window !== "undefined" && setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    return (
        <>
            <Head>
                <title>Tom16</title>
            </Head>
            <main>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: windowSize.height,
                        width: windowSize.width,
                    }}
                >
                    <motion.div
                        animate
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        whileHover={{ scale: 1.2 }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 200,
                            height: 100,
                            borderRadius: 15,
                            backgroundColor: "#03c59ade",
                            boxShadow: "5px 5px 15px #ffffff55",
                        }}
                    >
                        <h1>hellooo</h1>
                    </motion.div>
                </div>

                <div
                    style={{
                        width: windowSize.width,
                        height: 400,
                        backgroundColor: "#03c59a5e",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <motion.div
                        animate
                        initial={{ x: windowSize.width / 2, opacity: 0 }}
                        whileInView={{ x: -(windowSize.width / 2) + 150, opacity: 1 }}
                        transition={{ delay: 0 }}
                        style={{
                            width: 200,
                            height: 100,
                            backgroundColor: "#C51B46bb",
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 5,
                            boxShadow: "5px 5px 15px #00000055",
                        }}
                    >
                        <h2>one</h2>
                    </motion.div>
                    <motion.div
                        animate
                        initial={{ x: windowSize.width / 2, opacity: 0 }}
                        whileInView={{ x: -(windowSize.width / 2) + 150, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            width: 200,
                            height: 100,
                            backgroundColor: "#3775D2bb",
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 5,
                            boxShadow: "5px 5px 15px #00000055",
                        }}
                    >
                        <h2>two</h2>
                    </motion.div>
                    <motion.div
                        animate
                        initial={{ x: windowSize.width / 2, opacity: 0 }}
                        whileInView={{ x: -(windowSize.width / 2) + 150, opacity: 1 }}
                        transition={{ delay: 1 }}
                        style={{
                            width: 200,
                            height: 100,
                            backgroundColor: "#F4D35Ebb",
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 5,
                            boxShadow: "5px 5px 15px #00000055",
                        }}
                    >
                        <h2>three</h2>
                    </motion.div>
                </div>

                <div
                    style={{
                        position: "fixed",
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
                            href={"https://github.com/CreeperG16/tom-website/commit/" + commitInfo?.id}
                            title={commitInfo?.date}
                            target="_blank"
                        >
                            {commitInfo?.id}
                        </a>{" "}
                        <span style={{ fontStyle: "italic" }}>{commitInfo?.message}</span> - {commitInfo?.author?.name}
                    </p>
                </div>
            </main>
        </>
    );
}
