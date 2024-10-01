import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import Loader from '../../components/ui/Loader'
import useListExercises from './useListExercises'

const SelectExercises = ({ control }) => {
	const { data, isLoading } = useListExercises()
	if (isLoading) return <Loader />

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
						options={data.map(exercise => ({
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
