import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const velue = useContext(AuthContext);
  return velue;
}
