import cn from 'clsx'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { TOKEN } from '../../app.constants.js'
import { menu } from './menu.data.js'
import styles from './Hamburger.module.scss'

const Menu = ({ isVisible, setIsVisible }) => {
	const { setIsAuth } = useAuth()
	const handleLogout = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsVisible(false)
	}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isVisible })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>{<NavLink to={item.link}>{item.title}</NavLink>}</li>
				))}
				<li>
					<button onClick={handleLogout}>Log out</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
