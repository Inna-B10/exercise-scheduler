import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../services/exercise/exercise.service.js'

const useListExercises = () => {
	return useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),
		select: ({ data }) => data
	})
}

export default useListExercises
