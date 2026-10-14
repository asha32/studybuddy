
import { useState } from "react";

function Signup({ onLoginClick, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(event) {
  event.preventDefault();
   onSignupSuccess();
}

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <p>Join Study Buddy and make learning easier.</p>

        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <button type="button" onClick={onLoginClick}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
