import cn from 'clsx'
import styles from '../ExerciseLog.module.scss'

const TableRow = ({ item }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					defaultValue={item.weight}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted && ' '}/</i>
				<input
					type='number'
					defaultValue={item.repeat}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						item.isCompleted
							? 'images/exercises/check-completed.svg'
							: 'images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					// onClick={() => {
					// 	changeState({
					// 		timeIndex: item.id,
					// 		key: 'completed',
					// 		value: !item.isCompleted
					// 	})
					// }}
				/>
			</div>
		</div>
	)
}

export default TableRow
