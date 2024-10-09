import { Link } from 'react-router-dom'
import Loader from '../../components/ui/Loader'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'
import LayoutRoot from '../LayoutRoot'
import SelectExercises from './SelectExercises'
import useListExercises from './useListExercises'
import useNewWorkout from './useNewWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		onSubmit,
		control,
		error,
		errors,
		isLoading,
		isSuccess
	} = useNewWorkout()

	const {
		data,
		isLoading: isSelectLoading,
		error: selectError
	} = useListExercises()

	return (
		<>
			<LayoutRoot
				bgImage='images/new-workout-bg.jpg'
				heading='Create New Workout'
				backLink='/workouts'
				title='To all workouts'
			/>

			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				{isSelectLoading ? (
					<Loader />
				) : (
					<>
						{selectError ? (
							<p>{selectError.message}</p>
						) : (
							<form onSubmit={handleSubmit(onSubmit)}>
								<Field
									register={register}
									name='name'
									type='text'
									autoComplete='true'
									placeholder='Enter name'
									options={{ required: '!! The field for "Name" is required' }}
								/>

								<SelectExercises control={control} data={data} />

								<div className='dark-link'>
									<Link to='/new-exercise'>Add new exercise</Link>
								</div>

								{errors?.name?.message && (
									<Alert type='error' text={errors?.name?.message} />
								)}
								{errors?.exerciseIds?.message && (
									<Alert type='error' text={errors?.exerciseIds?.message} />
								)}

								<div style={{ marginTop: '3rem' }}>
									<Button>Create</Button>
								</div>
							</form>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default NewWorkout
