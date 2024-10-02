import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import WorkoutLogService from '../../services/workout/workout-log.service.js'
import stylesRoot from '../LayoutRoot.module.scss'
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

	return (
		<>
			<div
				className={cn(stylesRoot.wrapper, stylesRoot.otherPage)}
				style={{
					backgroundImage: `url('images/workout-bg.jpg')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
						<h1 className={stylesRoot.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
			</div>
		</>
	)
}

export default Workout
