import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: 'update log time',
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log', id])
		}
		// ,
		// onError: error => {
		// 	console.error('Error updating log time:', error)
		// }
	})

	return { updateTime: mutate, errorChange }
}
