import { BASE_URI, tokenKey } from "../config";

async function apiFetch(endpoint, { method, headers, body } = {}, avoidJSONformat = false) {
  console.log("Flagging: ", endpoint)

  const token = sessionStorage.getItem(tokenKey);

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }

  if (body && !avoidJSONformat) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? avoidJSONformat ? body : JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (e) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (e) {
    data = response.statusText;
  }

  return data;
}

export default apiFetch;
