import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export const login = async (credentials) => {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
};

export const logout = async () => {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
};
