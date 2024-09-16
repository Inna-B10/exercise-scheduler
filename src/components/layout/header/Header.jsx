import { BsArrowLeft } from 'react-icons/bs'
import { LiaUserCircleSolid } from 'react-icons/lia'
import useAuth from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth
	return (
		<header className={styles.header}>
			{isAuth ? (
				<button>
					<LiaUserCircleSolid color='white' />
				</button>
			) : (
				<button onClick={() => {}}>
					<BsArrowLeft color='white' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
