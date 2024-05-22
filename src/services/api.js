import axios from "axios";

const BASE_URL = "https://eliftech-backend-x7g5.onrender.com/api";

const instance = axios.create({ baseURL: BASE_URL });

export const getAllEvents = async ({ limit = 8, page = 1 }) => {
  const { data } = await instance.get(`/event?limit=${limit}&page=${page}`);
  return data;
};

export const getEventById = async (id) => {
  const { data } = await instance.get(`/event/${id}`);
  return data;
};

export const addUser = async ({ id, newUser }) => {
  const { data } = await instance.post(`/event/${id}`, newUser);
  return data;
};
