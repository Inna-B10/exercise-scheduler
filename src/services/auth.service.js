import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

/* -------------------------------- As a Class ------------------------------ */
class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			const errorMessage = error.response?.data?.message || error
			throw new Error(errorMessage)
		}
	}
}
export default new AuthService()

/* ------------------------------ As a Function ----------------------------- */
// export const authService = async (email, password, type) => {
// 	try {
// 		const { data } = await $axios.post(`/auth/${type}`, { email, password })
// 		if (data.token) {
// 			Cookies.set(TOKEN, data.token)
// 		}
// 		return data
// 	} catch (error) {
//
// 		alert(error.response.data.message)
// 		throw new Error(error)
// 	}
// }
