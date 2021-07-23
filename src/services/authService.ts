import client from "../api/client";

const endPoint = "/users";

export const loginUser = async (loginDetails: any) => {
  return await client.post(endPoint + "/signin", loginDetails);
};

export const signUpUser = async (signUpDetails: any) => {
  return await client.post(endPoint + "/signup", signUpDetails);
};

export const getUser = async () => {
  return await client.get(endPoint);
};
