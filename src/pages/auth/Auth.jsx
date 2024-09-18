import { useState } from 'react'
import LayoutRoot from '../LayoutRoot'
import styles from './Auth.module.scss'

const Auth = () => {
  const [formData, setFormData] = useState({ email: '', password: '', })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({ ...formData,
      [name]: value,
    })
  }
  
  const handleSubmit = (e) => {
  e.preventDefault()

  console.log(formData)

  setFormData({
    email: '',
    password: '',
  })
}
  return (
    <LayoutRoot bgImage='images/auth-bg'  heading='CREATE ACCOUNT'>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} required />
          <button type='submit' className={styles.button}>Submit</button>
        </form>
      </div>
    </LayoutRoot>)
}

export default Auth