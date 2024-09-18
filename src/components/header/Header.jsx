import { BsArrowLeft } from 'react-icons/bs'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	const {pathname} = useLocation()

	return (
		<header className={styles.header}>
			{pathname !== "/" ?  (
				<button onClick={() => {navigate(backLink)}}>
					<BsArrowLeft />
				</button>
			):(
				<button>
					<LiaUserCircleSolid onClick={()=>{navigate('/profile')}}/>
				</button>
			) }
			<Hamburger />
		</header>
	)
}

export default Header
