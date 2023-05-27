import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin  } })} className="bg-red-500 text-sm text-white p-2 rounded-lg hover:bg-red-500/90 transition-color ease duration-150">
      Log Out
    </button>
  );
};

export default LogoutButton;