import axios from "axios";

import { DEV_BASE_URL, MY_JSON_BASE_URL } from "./const";

const instance = (url) => {
  const instance = axios.create({
    baseURL: url,
  });
  return instance;
};

export const defaultInstance = instance(DEV_BASE_URL);
export const myJsonInstance = instance(MY_JSON_BASE_URL);

export const fetchDevServer = async (url) => {
  await defaultInstance.get(url);
};
export const fetchJsonServer = async (url) => {
  await myJsonInstance.get(url);
};
