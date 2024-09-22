import axios from "axios";
import toast from "react-hot-toast";
import { addUserProps } from "./types";

const BASE_URL = "https://eliftech-backend-x7g5.onrender.com/api";

const instance = axios.create({ baseURL: BASE_URL });

export const getAllEvents = async ({ limit = 9, page = 1 }) => {
  try {
    const { data } = await instance.get(`/event?limit=${limit}&page=${page}`);
    return data;
  } catch (error) {
    toast.error("Something went wrong, try again.");
    console.error(error);
  }
};

export const getEventById = async (id: string) => {
  try {
    const { data } = await instance.get(`/event/${id}`);
    return data;
  } catch (error) {
    toast.error("Something went wrong, try again.");
    console.error(error);
  }
};

export const addUser = async ({ id, newUser }: addUserProps) => {
  try {
    const { data } = await instance.post(`/event/${id}`, newUser);
    return data;
  } catch (error) {
    toast.error("Something went wrong, try again.");
    console.error(error);
  }
};
