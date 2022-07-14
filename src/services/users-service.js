import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export const getUser = async () => {
  const { token, ...user } = await apiFetch("profile");
  return user;
};

export const createUser = async (data) => {
  const { token, ...user } = await apiFetch("signup", { body: data });
  sessionStorage.setItem(tokenKey, token);
  return user;
};

export const updateUser = async (payload) => {
  const { token, ...user } = await apiFetch("profile", {
    body: payload,
    method: "PATCH",
  });
  return user;
};
