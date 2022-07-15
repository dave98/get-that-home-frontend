import apiFetch from "./api-fetch";

export const getProperties = async () => {
  const properties = await apiFetch("properties/index");
  return properties;
};
