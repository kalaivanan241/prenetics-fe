export const key = "auth_key";

export const storeToken = async (authToken: string) => {
  console.log(authToken);
  try {
    localStorage.setItem(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

export const removeToken = async () => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};
