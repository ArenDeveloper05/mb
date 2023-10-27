import axios from "axios";

const APIUrl = "http://api.speedshop.am/api";
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// GET
export const getNews = async (limit) => {
  return await api.get(`/news/${limit}`);
};

export const getEvents = async (limit) => {
  return await api.get(`/event/${limit}`);
};

// POST
export const addNews = async (data) => {
  return await api.post(`/news`, data);
};
