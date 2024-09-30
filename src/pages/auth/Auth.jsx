import Alert from '../../components/ui/alert/Alert'
import Field from '../../components/ui/field/Field'
import Loader from './../../components/ui/Loader'
import Button from './../../components/ui/button/Button'
import LayoutRoot from '../LayoutRoot'
import useAuthPage from './useAuthPage'
import styles from './Auth.module.scss'

const Auth = () => {
	const {
		errors,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
		setType,
		error
	} = useAuthPage()

	return (
		<>
			<LayoutRoot bgImage='images/auth-bg.png' heading='AUTHENTICATION' />

			<div className={styles['wrapper-inner-page']}>
				{error && <Alert type='error' text={error.message || error} />}
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
