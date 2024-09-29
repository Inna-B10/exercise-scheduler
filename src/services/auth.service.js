import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

export const authService = async (email, password, type) => {
	try {
		const { data } = await $axios.post(`/auth/${type}`, { email, password })
		if (data.token) {
			Cookies.set(TOKEN, data.token)
		}
		return data
	} catch (error) {
		// TODO: Replace alert with modal message

		alert(error.response.data.message)
		throw new Error(error)
	}
}
