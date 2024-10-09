import Loader from '../../../components/ui/Loader'
import Alert from '../../../components/ui/alert/Alert'
import LayoutRoot from '../../LayoutRoot'
import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'
import styles from '../detail/Workout.module.scss'

const ListWorkouts = () => {
	const {
		data,
		error,
		isLoading,
		isSuccess,
		mutate,
		isLoadingMutate,
		isSuccessMutate,
		errorMutate
	} = useWorkouts()

	return (
		<>
			<LayoutRoot bgImage='images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : error ? (
					<p>{error.message}</p>
				) : (
					<>
						{errorMutate && <Alert type='error' text={errorMutate} />}
						{isSuccessMutate && <Alert text='Workout Log created' />}
						{isLoadingMutate && <Loader />}
						{isSuccess && (
							<div className={styles.wrapper}>
								{data.map(workout => (
									<WorkoutItem
										key={workout.id}
										workout={workout}
										mutate={mutate}
									/>
								))}
							</div>
						)}
						{isSuccess && data?.length === 0 && (
							<Alert type='warning' text='Workouts not found' />
						)}
					</>
				)}
			</div>
		</>
	)
}

export default ListWorkouts
