import axios from "axios";

export const http = axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	timeout: 1000,
	headers: {'x-api-key': 'live_GaHAP3mAy2BvAq4StOZT5SzD0xfWyqm9vYVCzPo25kGeMWu7ENUfcACPiBZsTNtu'}
});