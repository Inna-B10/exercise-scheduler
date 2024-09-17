import { useClickAway } from '@uidotdev/usehooks'
import { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)
	const ref = useClickAway(() => {
		setIsShow(false)
	})

	const handleOpenModal = () => {
		if (isShow === false) {
			setIsShow(true)
		}
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button>
				{isShow ? (
					<IoMdClose onClick={() => setIsShow(false)} />
				) : (
					<IoMdMenu onClick={handleOpenModal} />
				)}
			</button>
			{isShow && <Menu isVisible={isShow} />}
		</div>
	)
}

export default Hamburger
