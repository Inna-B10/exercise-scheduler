import { useMemo } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../services/exercises/exercise.service'

const useNewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading, isSuccess, error } = useMutation({
		mutationKey: 'create exercise',
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})
	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			error,
			control,
			isSuccess,
			isLoading,
			onSubmit
		}),
		[errors, error, isSuccess, isLoading]
	)
}

export default useNewExercise
