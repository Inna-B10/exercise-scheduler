import cn from 'clsx'
import stylesRoot from '../../pages/LayoutRoot.module.scss'
import Header from '../../components/header/Header'
import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
	return (
		<div
			className={cn(stylesRoot.wrapper, stylesRoot.otherPage)}
			style={{
				backgroundImage: `url('images/ex-bg.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workouts/${exerciseLog.workoutLogId}` : '/workouts'
				}
				title='To workout'
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={stylesRoot.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
