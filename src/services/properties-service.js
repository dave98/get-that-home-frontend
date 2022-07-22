import { BASE_URI } from "../config";
import apiFetch from "./api-fetch";

export const getProperties = async () => {
  const properties = await apiFetch("properties/index");
  return properties;
};

export async function showProperty(id){
  return await apiFetch("properties/" + id);
}

export async function createProperty(propertyData){ // With dataforms
  return await apiFetch("properties/create-with-images", {body: propertyData}, true);
}

export async function createPropertyWihFormData(propertyData){
  return await apiFetch("properties/create-with-images", {body: propertyData}, true);
}

export async function updateProperty(id, propertyData){
  return await apiFetch("properties/update-with-images/" + id, {body: propertyData, method: "PATCH"}, true);
}

export async function updateClosedProperty(id, closedBody){
  return await apiFetch("properties/" + id, {body: closedBody, method: "PATCH"});
}

export async function deleteProperty(id){
  return await apiFetch("properties/" +  id, {method: "DELETE"});
}

export async function myProperties(){
  return await apiFetch("properties/owned");
}

export async function myFavoriteProperties(){
  return await apiFetch("likes");
}

export async function myContactedProperties(){
  return await apiFetch("contacts");
}

export const getFilteredProperties = async (filters) => {
  const data = { ...filters };
  const url = new URL(`${BASE_URI}properties/index`);
  for (let k in data) {
    url.searchParams.append(k, data[k]);
  }
  const properties = await fetch(url).then((res) => res.json());
  return properties;
};
