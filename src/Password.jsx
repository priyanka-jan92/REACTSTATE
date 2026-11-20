
import React, { useState } from "react";

function Password() {

    const [password, setPassword] = useState("");

    let message = "";

    if (password.length < 6) {
        message = "Minimum 6 characters required";
    }
    else if (!/[A-Z]/.test(password)) {
        message = "Include one Capital letter";
    }
    else if (!/[a-z]/.test(password)) {
        message = "Include one Small letter";
    }
    else if (!/[0-9]/.test(password)) {
        message = "Include one Number";
    }
   

    else {
        message = "Strong Password!";
    }

    return (
        <div>
            <h2>Password Validation</h2>

            <p>Example: Hello@123</p>

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <h3>{message}</h3>
        </div>
    );
}

export default Password;
