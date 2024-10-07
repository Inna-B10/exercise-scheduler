import 'react-icons/lia'
import {
	LiaHomeSolid,
	LiaShareSquareSolid,
	LiaUserCircleSolid
} from 'react-icons/lia'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/', title = '' }) => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	return (
		<header className={styles.header}>
			{isAuth &&
				(pathname === '/' ? (
					<button
						title='Profile'
						onClick={() => {
							navigate('/profile')
						}}
					>
						<LiaUserCircleSolid />
					</button>
				) : backLink === '/' ? (
					<button
						title='Home'
						onClick={() => {
							navigate('/')
						}}
					>
						<LiaHomeSolid />
					</button>
				) : (
					<button title={title} onClick={() => navigate(backLink)}>
						<LiaShareSquareSolid className={styles.levelUp} />
					</button>
				))}

			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
