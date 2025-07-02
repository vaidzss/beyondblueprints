import { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 space-y-4">
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2" required />
      <button type="submit" className="bg-black text-white px-4 py-2">Login</button>
    </form>
  );
};

export default LoginForm;
