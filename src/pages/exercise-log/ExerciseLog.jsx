import { useExerciseLog } from './hooks/useExerciseLog'
import Loader from '../../components/ui/Loader'
import Alert from '../../components/ui/alert/Alert'
import ExerciseError from './ExerciseError'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'
import styles from './ExerciseLog.module.scss'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		error,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog isSuccess={isSuccess} exerciseLog={exerciseLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />

						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}
				{isSuccess && exerciseLog?.times?.length === 0 && (
					<div style={{ marginTop: '3rem' }}>
						<Alert type='warning' text='Times not found' />
					</div>
				)}
			</div>
		</>
	)
}

export default ExerciseLog
