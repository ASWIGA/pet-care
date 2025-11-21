const API = import.meta.env.VITE_API_URL || "https://pet-pet-care-cklx.onrender.com";

export const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default API;
