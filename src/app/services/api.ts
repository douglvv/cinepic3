import axios from "axios";
require('dotenv').config()

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

// Para requisições à Api omdb
const OMDB = axios.create({
    baseURL: 'https://www.omdbapi.com',
    headers: { "Content-Type": "application/json" }
});

// Para requisições às rotas do "backend"
const API = axios.create({
    baseURL: `${APP_URL}`,
    headers: { "Content-Type": "application/json" }
});

export { OMDB, API };