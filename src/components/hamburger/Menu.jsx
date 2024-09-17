import cn from 'clsx'
import { NavLink } from 'react-router-dom'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'

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
