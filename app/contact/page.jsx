// ログイン状態によって、画面表示が切り替わるようにuseStateを使っていきます。
"use client"
import React, {useState}  from "react";
import "./contact.css";

const Contact = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPasswoerd(e.target.value);
    };

    const handleLogin = () => {
        if(username === "" || password ==="") return;
        setIsLogin(true);
    };

    const handleLogout = () => {
        setUsername("");
        setPassword("");
        setIsLogin(false);
    };

    return (
        <div className="wrapper">
            <div className="content">
                {isLogin ? (
                    <button className="button" onClick={handleLogout}>
                        logout
                    </button>
                ) : (
                    <>
                    <div className="input">
                        ユーザー名:
                        <input
                        type="text"
                        name="username"
                        id="username"
                        className="username"
                        onChange={handleUsername}
                        />
                    </div>
                        <button className="button" onClick={handleLogin}>
                            login
                        </button>           
                    </>
                )}
            </div>
        </div>
    );
};

export default Contact;
