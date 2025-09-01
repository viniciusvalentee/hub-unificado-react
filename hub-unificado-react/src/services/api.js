// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // A URL base da nossa API Java
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para realizar o login
export const login = (email, password) => {
  return apiClient.post('/auth/login', { email, password });
};

// Futuramente, outras chamadas virão aqui...
// export const getUsers = (token) => { ... }