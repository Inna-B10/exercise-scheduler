import { useMemo } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from '../../../services/workout/workout-log.service'
import WorkoutService from '../../../services/workout/workout.service'

export const useWorkouts = () => {
	const { data, isSuccess, isLoading, error } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutService.getAll(),
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const {
		mutate,
		isLoading: isLoadingMutate,
		isSuccess: isSuccessMutate,
		error: errorMutate
	} = useMutation({
		mutationKey: ['create new workout log'],
		mutationFn: workoutId => WorkoutLogService.create(workoutId),
		onSuccess({ data }) {
			navigate(`/workouts/${data.id}`)
		}
	})

	return useMemo(
		() => ({
			data,
			isSuccess,
			isLoading,
			error,
			mutate,
			isLoadingMutate,
			isSuccessMutate,
			errorMutate
		}),

		[error, errorMutate, isLoading, isLoadingMutate, isSuccess, isLoadingMutate]
	)
}
