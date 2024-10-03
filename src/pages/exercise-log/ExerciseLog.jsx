import { useExerciseLog } from './hooks/useExerciseLog'
import Loader from '../../components/ui/Loader'
import Alert from '../../components/ui/alert/Alert'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'
// import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog isSuccess={isSuccess} exerciseLog={exerciseLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ExerciseError errors={[errorChange, errorCompleted]} /> */}
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow item={item} key={item.id} />
						))}
					</div>
				)}
				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
