
import { useState } from "react";

function Login({ onSignupClick, onLoginSuccess  }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 function handleLogin(event) {
  event.preventDefault();
   onLoginSuccess();
}

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Log in to continue your learning journey.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <button type="button" onClick={onSignupClick}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
