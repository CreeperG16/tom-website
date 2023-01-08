import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocalStorage } from "../util/useLocalStorage";
import { useEffect, useState } from "react";

export default function Home() {
    const commitInfo = JSON.parse(process.env.NEXT_PUBLIC_GIT_COMMITS ?? "[]")[0];
    const [currentUser, setCurrentUser] = useLocalStorage("current-user", { loggedIn: false, data: {} });

    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

    return (
        <>
            <Head>
                <title>Tom16</title>
            </Head>
            {domLoaded && (
                <main>
                    <div className="header">
                        {currentUser.loggedIn ? (
                            <div>hi!</div>
                        ) : (
                            <Link href={"/login"}>
                                <div>Login</div>
                            </Link>
                        )}
                    </div>

                    <div className="hello-box">
                        <motion.div
                            drag
                            animate
                            className="hello"
                            whileHover={{ scale: 1.2 }}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <h1>hellooo</h1>
                        </motion.div>
                    </div>

                    <div className="footer">
                        <p style={{ fontFamily: "sans-serif", opacity: 0.5 }}>
                            Commit{" "}
                            <a
                                href={"https://github.com/CreeperG16/tom-website/commit/" + commitInfo?.id}
                                title={commitInfo?.date}
                                target="_blank"
                            >
                                {commitInfo?.id}
                            </a>{" "}
                            <span style={{ fontStyle: "italic" }}>{commitInfo?.message}</span> -{" "}
                            {commitInfo?.author?.name}
                        </p>
                    </div>
                </main>
            )}
        </>
    );
}
