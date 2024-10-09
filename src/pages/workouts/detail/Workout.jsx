import { Fragment } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../components/ui/Loader.jsx'
import Button from '../../../components/ui/button/Button.jsx'
import WorkoutLogService from '../../../services/workout/workout-log.service.js'
import ExerciseItem from './ExerciseItem.jsx'
import HeaderWorkout from './HeaderWorkout.jsx'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const { mutate } = useMutation({
		mutationKey: ['complete workout'],
		mutationFn: () => WorkoutLogService.complete(id),
		onSuccess() {
			navigate('/workouts')
		}
	})

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line} />
									)}
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</>
	)
}

export default Workout
