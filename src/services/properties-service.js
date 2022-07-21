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
  return await apiFetch("properties/" + id, {body: propertyData, method: "PATCH"});
}

export async function deleteProperty(id){
  return await apiFetch("properties/" +  id, {method: "DELETE"});
}
