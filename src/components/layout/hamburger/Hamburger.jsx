import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<IoCloseOutline color='white' />
				) : (
					<RxHamburgerMenu color='white' />
				)}
			</button>
			{isShow && <Menu isVisible={isShow} />}
		</div>
	)
}

export default Hamburger
