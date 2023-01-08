import { useLocalStorage } from "../util/useLocalStorage";

export default function Login() {
    const [currentUser, setCurrentUser] = useLocalStorage("current-user", { loggedIn: false, data: {} });

    return (
        <div className="login-main">
            <div className="login-box">
                <h1>Login</h1>

                <div className="input-container">
                    <input type="text" name="username" id="username" required />
                    <label>Username</label>
                </div>
                <div className="input-container">
                    <input type="password" name="password" id="password" required />
                    <label>Password</label>
                </div>
                <button className="login-button">Log in</button>
            </div>
        </div>
    );
}
