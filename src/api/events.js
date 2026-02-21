import axios from "axios";

const API = axios.create({
  baseURL: "https://ceza-rbackend.onrender.com/api"
});

export const fetchEvents = () => API.get("/events");
