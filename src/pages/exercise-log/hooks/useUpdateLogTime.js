import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogTime = times => {
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log', id]).then(() => {
				// Получаем обновленные данные из кэша
				const updatedExerciseLog = queryClient.getQueryData([
					'get exercise log',
					id
				]).data

				const filteredTimes = updatedExerciseLog?.times.filter(
					time => time.isCompleted
				)

				if (filteredTimes.length === updatedExerciseLog.times.length) {
					completeLog({ isCompleted: true })
				}
			})
		}
	})

	return { updateTime: mutate, error: errorChange || errorCompleted }
}
