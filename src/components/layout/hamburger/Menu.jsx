import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'

const Menu = isVisible => {
	const handleLogout = () => {}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isVisible })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
				<li>
					<button onClick={handleLogout}>Log out</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
