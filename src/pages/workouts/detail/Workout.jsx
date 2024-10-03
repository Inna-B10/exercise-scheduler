import { Fragment } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/ui/Loader.jsx'
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

	/* TODO: Complete workout */

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{console.log(workoutLog.exerciseLog)}
						{workoutLog?.exerciseLog?.map((log, index) => (
							<Fragment key={log.id}>
								<ExerciseItem exerciseLog={log} />
								{index !== workoutLog.exerciseLog.length - 1 && (
									<div className={styles.line} />
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Workout
