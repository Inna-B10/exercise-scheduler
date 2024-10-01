import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import Loader from '../../components/ui/Loader'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'
import ExerciseService from '../../services/exercises/exercise.service'
import LayoutRoot from '../LayoutRoot'
import { getIconPath } from './icon-path.util'
import styles from './newExercise.module.scss'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading, isSuccess, error } = useMutation({
		mutationKey: 'create exercise',
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})
	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<LayoutRoot
				bgImage='images/new-exercise-bg.jpg'
				heading='Create New Exercise'
				backLink='/new-workout'
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
					<Controller
						name='iconPath'
						control={control}
						rules={{ required: '!! An icon for exercise is required' }}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								<div>
									{data.map(name => (
										<img
											key={`ex img ${name}`}
											src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
												name
											)}`}
											alt={name}
											title={name}
											className={cn({
												[styles.active]: value === getIconPath(name)
											})}
											onClick={() => onChange(getIconPath(name))}
											draggable={false}
											height='45'
										/>
									))}
								</div>
								{errors?.iconPath && (
									<Alert type='error' text={errors?.iconPath?.message} />
								)}
							</div>
						)}
					/>
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
