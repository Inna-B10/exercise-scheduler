import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

const SelectExercises = ({ control, data }) => {
	return (
		<Controller
			name='exerciseIds'
			control={control}
			rules={{ required: '!! Select an exercise' }}
			render={({ field: { value, onChange } }) => {
				return (
					<ReactSelect
						isMulti
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={data?.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
					/>
				)
			}}
		/>
	)
}

export default SelectExercises
