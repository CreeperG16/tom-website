import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Tom16</title>
            </Head>
            <main
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
            </main>
        </>
    );
}
