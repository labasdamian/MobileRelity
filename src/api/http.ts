import axios from "axios";

export const http = axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	timeout: 1000,
	headers: {'x-api-key': import.meta.env.VITE_AUTH_KEY}
});