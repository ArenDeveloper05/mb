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

export const getSingleNews = async (id) => {
  return await api.get(`/news-by-id/${id}`);
};

export const getEvents = async (limit) => {
  return await api.get(`/event/${limit}`);
};

// POST
export const addNews = async (data) => {
  return await api.post(`/news-create`, data);
};

export const sendAdminValues = async (loginValues) => {
  return await api.post("url", loginValues);
};

//DELETE
export const deleteNews = async (id) => {
  return await api.get(`/news-delete/${id}`);
};

//PUT
export const editNews = async (id, data) => {
  console.log(data);
  return await api.post(`/news-update/${id}`, data);
};
