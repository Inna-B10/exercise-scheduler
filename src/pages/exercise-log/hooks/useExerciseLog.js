import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import { useUpdateLogTime } from './useUpdateLogTime'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
		// onSuccess: data => {
		// 	if (data?.times?.length) {
		// 		setTimes(data.times)
		// 	}
		// }
	})

	const { errorChange, updateTime } = useUpdateLogTime()

	const onChangeState = (timeId, key, value) => {
		const newTimes = exerciseLog.times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})
		exerciseLog.times = newTimes
		setTimes(newTimes)
		console.log(exerciseLog.times)
	}

	const getTime = timeId => {
		return exerciseLog?.times?.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)

		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	}
}
