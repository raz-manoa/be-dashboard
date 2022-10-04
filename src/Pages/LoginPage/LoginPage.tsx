import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem("a", "logged");
  };
  return (
    <div>
      LoginPage
      <button onClick={handleLogin}>Fake login</button>
    </div>
  );
};

export default LoginPage;
