import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import UploadForm from "./UploadForm";

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  return authenticated ? <UploadForm/> : <LoginForm onLogin={() => setAuthenticated(!authenticated)} />;
};

export default AdminPage;