import { $axios } from '../api'

const USER = '/user'

/* -------------------------------- As Class -------------------------------- */
class UserService {
	async getProfile() {
		return $axios.get(`${USER}/profile`)
	}
}

export default new UserService()

/* ------------------------------- As Function ------------------------------ */
// const userService = async () => {
// 	return $axios.get(`${USER}/profile`)
// }
// export default userService
