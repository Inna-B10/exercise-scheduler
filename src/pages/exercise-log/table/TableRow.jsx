import cn from 'clsx'
import styles from '../ExerciseLog.module.scss'

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div className={styles.opacity} key={`Prev ${item.id}`}>
				<input
					type='number'
					defaultValue={item.prevWeight}
					disabled
					name='prevWeight'
				/>
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input
					type='number'
					defaultValue={item.prevRepeat}
					disabled
					name='prevRepeat '
				/>
			</div>

			<div key={`RepeatWeight ${item.id}`}>
				<input
					type='number'
					value={getState(item.id, 'weight')}
					onChange={e => onChangeState(item.id, 'weight', e.target.value)}
					onFocus={e => e.target.select()}
					disabled={item.isCompleted}
					name='weight'
				/>
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input
					type='number'
					value={getState(item.id, 'repeat')}
					onChange={e => onChangeState(item.id, 'repeat', e.target.value)}
					onFocus={e => e.target.select()}
					disabled={item.isCompleted}
					name='repeat'
				/>
			</div>

			<div key={`Completed ${item.id}`}>
				<img
					src={
						getState(item.id, 'isCompleted')
							? 'images/exercises/check-completed.svg'
							: 'images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => {
						toggleTime(item.id, !getState(item.id, 'isCompleted'))
					}}
				/>
			</div>
		</div>
	)
}

export default TableRow
