import { $axios } from '../api'

const USER = '/user'

/* -------------------------------- As a Class ------------------------------- */
class UserService {
	async getProfile() {
		try {
			const response = await $axios.get(`${USER}/profile`)
			return response
		} catch (error) {
			console.error('Error fetching profile:', error)
			throw error // Прокидываем ошибку дальше
		}
	}
}

export default new UserService()

/* ------------------------------- As a Function ---------------------------- */
// const userService = async () => {
// 	return $axios.get(`${USER}/profile`)
// }
// export default userService
