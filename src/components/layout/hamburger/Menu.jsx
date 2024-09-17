import cn from 'clsx'
import { menu } from './menu.data.js'
import styles from './Hamburger.module.scss'

const Menu = isVisible => {
	const handleLogout = () => {}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isVisible })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>{/* <Link to={item.link}>{item.title}</Link> */}</li>
				))}
				<li>
					<button onClick={handleLogout}>Log out</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
