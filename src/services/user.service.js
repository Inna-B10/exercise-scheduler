import { $axios } from '../api'

const USER = '/user'

const userService = async () => {
	return $axios.get(`${USER}/profile`)
}
export default userService
