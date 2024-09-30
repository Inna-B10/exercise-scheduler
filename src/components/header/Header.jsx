import { BsArrowLeft } from 'react-icons/bs'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	return (
		<header className={styles.header}>
			{isAuth &&
				(pathname !== '/' ? (
					<button
						onClick={() => {
							navigate('/')
						}}
					>
						<BsArrowLeft />
					</button>
				) : (
					<button
						onClick={() => {
							navigate(backLink)
						}}
					>
						<LiaUserCircleSolid />
					</button>
				))}

			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
