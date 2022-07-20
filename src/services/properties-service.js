import { BASE_URI } from "../config";
import apiFetch from "./api-fetch";

export const getProperties = async () => {
  const properties = await apiFetch("properties/index");
  return properties;
};

export const getFilteredProperties = async (filters) => {
  const data = { ...filters };
  const url = new URL(`${BASE_URI}properties/index`);
  for (let k in data) {
    url.searchParams.append(k, data[k]);
  }
  const properties = await fetch(url).then((res) => res.json());
  return properties;
};
