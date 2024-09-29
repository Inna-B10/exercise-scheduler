import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Field from '../../components/ui/field/Field'
import Loader from './../../components/ui/Loader'
import Button from './../../components/ui/button/Button'
import { authService } from '../../services/auth.service'
import LayoutRoot from '../LayoutRoot'
import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading } = useMutation({
		mutationFn: ({ email, password }) => authService(email, password, type),
		onSuccess: data => {
			alert('success')
			reset()
		}
	})
	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<LayoutRoot bgImage='images/auth-bg.png' heading='AUTHENTICATION' />

			<div className={styles['wrapper-inner-page']}>
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='email'
						type='email'
						autoComplete='true'
						placeholder='Enter email'
						options={{ required: '* Email is required' }}
					/>

					<Field
						register={register}
						name='password'
						type='password'
						autoComplete='true'
						placeholder='Enter password'
						options={{ required: '* Password is required' }}
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
					<div className={styles.error}>
						<div>{errors?.email?.message}</div>
						<div>{errors?.password?.message}</div>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
