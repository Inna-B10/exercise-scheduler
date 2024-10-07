import Loader from '../../components/ui/Loader'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'
import LayoutRoot from '../LayoutRoot'
import SelectIcons from './SelectIcons'
import useNewExercise from './useNewExercise'
import styles from './NewExercise.module.scss'

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		onSubmit,
		control,
		error,
		errors,
		isLoading,
		isSuccess
	} = useNewExercise()

	return (
		<>
			<LayoutRoot
				bgImage='images/new-exercise-bg.jpg'
				heading='Create New Exercise'
				backLink='/new-workout'
				title='New workout'
			/>

			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='name'
						type='text'
						autoComplete='true'
						placeholder='Enter name'
						options={{ required: '!!  The field for "Name" is required' }}
					/>
					<Field
						register={register}
						name='times'
						autoComplete='true'
						placeholder='Enter times'
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || '!! Times must be a number',
							required: '!! The field for "Times" is required'
						}}
					/>
					{errors?.name?.message && (
						<Alert type='error' text={errors?.name?.message} />
					)}
					{errors?.times?.message && (
						<Alert type='error' text={errors?.times?.message} />
					)}

					<div className={styles.images}>
						<SelectIcons control={control} />
					</div>
					{errors?.iconPath && (
						<Alert type='error' text={errors?.iconPath?.message} />
					)}
					<div style={{ marginTop: '3rem' }}>
						<Button>Create</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default NewExercise
