const BASE_API= `http://localhost:8080/`;
const AUTH_API = BASE_API + 'auth/';
const SERVICE_URL = BASE_API + 'api/';
export const environment = {
  production: false,
  apiUrl: SERVICE_URL,
  apiBase: BASE_API,
  auth:{
    login: AUTH_API + "login"
  },
};
