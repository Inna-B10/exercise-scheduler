import { $axios } from '../../api'
import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id) {
		const response = await $axios.get(`${LOG}/${id}`)
		return response
	}

	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	// "weight":10,
	// "repeat": 20,
	// "isCompleted": true,
	async updateTime(timeId, body) {
		const response = await $axios.put(`${LOG}/time/${timeId}`, body)
		return response
	}

	// "isCompleted": true
	async complete(id, body) {
		const response = await $axios.patch(`${LOG}/complete/${id}`, body)
		return response
	}
}

export default new ExerciseLogService()
