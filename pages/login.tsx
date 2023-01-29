import { useRef } from "react";
import { useLocalStorage } from "../util/useLocalStorage";
import CryptoJS from "crypto-js";

const institute = "PADANYI";

export default function Login() {
    const [currentUser, setCurrentUser] = useLocalStorage("current-user", { loggedIn: false, data: {} });

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const logIn = async () => {
        if (!usernameRef.current || !passwordRef.current) return;

        const nonce = await fetch("https://idp.e-kreta.hu/nonce").then((x) => x.text());

        const hmac = CryptoJS.HmacSHA512(
            institute.toUpperCase() + nonce + usernameRef.current.value.toUpperCase(),
            Buffer.from([98, 97, 83, 115, 120, 79, 119, 108, 85, 49, 106, 77]).toString()
        ).toString(CryptoJS.enc.Base64);

        const body = new URLSearchParams();
        body.append("password", passwordRef.current.value);
        body.append("userName", usernameRef.current.value);
        body.append("institute_code", institute);
        body.append("grant_type", "password");
        body.append("client_id", "kreta-ellenorzo-mobile-android");

        const tokenObj = await fetch("https://idp.e-kreta.hu/connect/token", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "User-Agent": "Kreta.Ellenorzo",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                "X-AuthorizationPolicy-Version": "v2",
                "X-AuthorizationPolicy-Key": hmac,
                "X-AuthorizationPolicy-Nonce": nonce,
                "Access-Control-Allow-Origin": "*",
            },
            body: body.toString(),
        })
            .then((x) => x.json())
            .catch(console.error);

        console.log(tokenObj);
    };

    return (
        <div className="login-main">
            <div className="login-box">
                <h1>Login</h1>

                <div className="input-container">
                    <input type="text" name="username" id="username" required ref={usernameRef} />
                    <label>Username</label>
                </div>
                <div className="input-container">
                    <input type="password" name="password" id="password" required ref={passwordRef} />
                    <label>Password</label>
                </div>
                <button className="login-button" onClick={logIn}>
                    Log in
                </button>
            </div>
        </div>
    );
}
