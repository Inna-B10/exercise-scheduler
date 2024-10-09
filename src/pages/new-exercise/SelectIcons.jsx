import cn from 'clsx'
import { Controller } from 'react-hook-form'
import styles from './NewExercise.module.scss'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const getIconPath = iconName => `/uploads/exercises/${iconName}.svg`

const SelectIcons = ({ control }) => {
	return (
		<Controller
			name='iconPath'
			control={control}
			rules={{ required: '!! An exercise icon is required' }}
			render={({ field: { value, onChange } }) =>
				data.map(name => (
					<img
						key={`ex img ${name}`}
						src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
						alt={name}
						title={name}
						className={cn({
							[styles.active]: value === getIconPath(name)
						})}
						onClick={() => onChange(getIconPath(name))}
						draggable={false}
						height='45'
					/>
				))
			}
		/>
	)
}

export default SelectIcons
