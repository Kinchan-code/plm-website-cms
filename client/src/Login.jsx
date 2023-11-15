import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { Button } from "@mantine/core";

const msalConfig = {
  auth: {
    clientId: "b15ddaac-9e6c-43c0-9175-e3af26ea8a7b",
    authority:
      "https://login.microsoftonline.com/c83f55a7-7fe8-4934-b759-09926430aef0",
    redirectUri: "http://localhost:5173/", // Redirect URI configured in Azure AD
  },
};

const loginRequest = {
  scopes: ["User.Read"],
};

function Login() {
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Create a state for the MSAL instance
  const [msalInstance, setMsalInstance] = useState(null);

  // Initialize the MSAL instance when the component mounts
  useEffect(() => {
    setMsalInstance(new PublicClientApplication(msalConfig));
  }, []);

  const handleLogin = () => {
    if (msalInstance) {
      msalInstance
        .loginPopup(loginRequest)
        .then((response) => {
          // login success
          // Navigate to a new route
          navigate("/new-route");
        })
        .catch((err) => {
          // login failure
          console.error(err);
        });
    }
  };
  return (
    <div>
      <Button variant="filled" color="gray" onClick={handleLogin}>
        Button
      </Button>
    </div>
  );
}

export default Login;
