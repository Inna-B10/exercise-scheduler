import { $axios } from '../api'

const USER = '/user'

class UserService {
	async getProfile() {
		return $axios.get(`${USER}/profile`)
	}
}

export default new UserService()

// const userService = async () => {
// 	return $axios.get(`${USER}/profile`)
// }
// export default userService
