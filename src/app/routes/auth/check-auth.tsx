import { redirect } from "react-router-dom";

const decodeJwt = (token: string): any => {
  const payload = token.split('.')[1]; 
  const decoded = atob(payload); 
  return JSON.parse(decoded); 
};

const isTokenExpired = (token: string): boolean => {
  const decodedToken = decodeJwt(token);
  const currentTime = Math.floor(Date.now() / 1000); 
  return decodedToken.exp < currentTime;
};

export const isAuthorized = (role: string, path: string): boolean => {
  if (role === "ROLE_CANDIDATE" && path.includes("candidate")) return true;
  if (role === "ROLE_COMPANY" && path.includes("employer")) return true;
  return false;
};

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("roleName");
  const path = window.location.pathname;

  if (!token || !role || !isAuthorized(role, path) || isTokenExpired(token)) {
    return redirect("/auth");
  }
  return {}; 
};

export const autoLogin = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("roleName");

  if (token && role && !isTokenExpired(token)) {
    if (role === "ROLE_CANDIDATE") {
      window.location.href = "/candidate"; 
    } else if (role === "ROLE_COMPANY") {
      window.location.href = "/employer"; 
    }
  }
  return {};
};