import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const get = async (url: string): Promise<[any | null, Error | null]> => {
  try {
    const res = await instance.get(url);
    return [res.data, null];
  } catch (error) {
    console.log(error);
    return [null, error];
  }
};
