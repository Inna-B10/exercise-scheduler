import cn from 'clsx'
import Header from '../../../components/header/Header'
import stylesRoot from '../../LayoutRoot.module.scss'
import styles from './Workout.module.scss'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
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
	)
}

export default HeaderWorkout
