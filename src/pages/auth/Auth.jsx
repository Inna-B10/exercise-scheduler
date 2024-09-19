import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Field from "../../components/ui/field/Field"
import LayoutRoot from '../LayoutRoot'
import Button from './../../components/ui/button/Button'
import Loader from './../../components/ui/Loader'
import styles from './Auth.module.scss'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({ mode:'onChange' })

  const [type, setType] = useState('auth')

  const onSubmit = data => {
    console.log(data)
  }
	/* 
	TODO:

	[] - Auth context
	[] - Axios
	[] - React Query

*/  
  return (
    <>
      <LayoutRoot bgImage='images/auth-bg.png'  heading='AUTHENTICATION' />

      <div className={styles['wrapper-inner-page']}>
        {isLoading || isLoadingAuth && <Loader />}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Field 
            register={register} 
            name='email'
            type='email'
						placeholder='Enter email' 
            options={{ required: '* Email is required'}} 
            />

          <Field 
            register={register}
            name='password'
            type='password'
						placeholder='Enter password' 
            options={{required: '* Password is required'}} 
            />

          <div className={styles.wrapperButtons}>
					  <Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
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