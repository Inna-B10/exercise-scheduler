import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LayoutRoot from '../LayoutRoot'
import Button from './../../components/ui/button/Button'
import styles from './Auth.module.scss'

const Auth = () => {
//   const [formData, setFormData] = useState({ email: '', password: '', })
// 
//   const handleChange = e => {
//     const {name, value} = e.target
//     setFormData({ ...formData,
//       [name]: value,
//     })
//   }
//   
//   const handleSubmit = (e) => {
//   e.preventDefault()
// 
//   console.log(formData)
// 
//   setFormData({
//     email: '',
//     password: '',
//   })
// }

const { register, handleSubmit, formState:{errors} } = useForm({mode:'onChange'})

const [type, setType] = useState('auth')
const onSubmit = data => {
  console.log(data)
}
  return (
    <>
      <LayoutRoot bgImage='images/auth-bg.png'  heading='CREATE ACCOUNT' />

      <div className='wrapper-inner-page'>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='email' placeholder='Enter email' {...register('email', { required: 'Email is required'} )}  />

          <input type='password' placeholder='Enter password' {...register('password', {required: 'Password is required'})} />

          <div className={styles.wrapperButtons}>
					  <Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
          </div>
          <div>{errors?.email?.message}</div>
          <div>{errors?.password?.message}</div>
          
        </form>
      </div>
    </>
    )
}

export default Auth