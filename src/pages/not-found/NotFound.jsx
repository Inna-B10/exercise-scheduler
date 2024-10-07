import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import LayoutRoot from '../LayoutRoot'

const NotFound = () => {
	const { isAuth } = useAuth()

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth')
		}
	}, [])

	return (
		<>
			<LayoutRoot heading=' ' bgImage='images/404.jpg' />
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}

export default NotFound
