import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE,
});

// Har request ke sath token attach karta hai (agar login hai)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (data) => api.post('/register/', data);
export const loginUser = (data) => api.post('/login/', data);

export const getTodos = () => api.get('/todos/');
export const createTodo = (data) => api.post('/todos/', data);
export const updateTodo = (id, data) => api.put(`/todos/${id}/`, data);
export const deleteTodo = (id) => api.delete(`/todos/${id}/`);

export default api;
