import cn from 'clsx'
import { NavLink } from 'react-router-dom'
import { menu } from './menu.data.js'
import styles from './Hamburger.module.scss'

const Menu = isVisible => {
	const handleLogout = () => {}

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
