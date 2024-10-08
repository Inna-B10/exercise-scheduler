import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

// Добавление перехватчика для динамического добавления заголовков
$axios.interceptors.request.use(
	config => {
		const token = Cookies.get(TOKEN)
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
