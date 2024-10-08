import { $axios } from '../api'

const USER = '/user'

/* -------------------------------- As Class -------------------------------- */
class UserService {
	async getProfile() {
		try {
			const response = await $axios.get(`${USER}/profile`)
			console.log(response.data)
			return response
		} catch (error) {
			console.error('Error fetching profile:', error)
			throw error // Прокидываем ошибку дальше
		}
	}
}

export default new UserService()

/* ------------------------------- As Function ------------------------------ */
// const userService = async () => {
// 	return $axios.get(`${USER}/profile`)
// }
// export default userService
