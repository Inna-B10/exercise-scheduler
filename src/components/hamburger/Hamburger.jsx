import { useState } from 'react'
import { useClickAway } from '@uidotdev/usehooks'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Menu from './Menu'
import styles from './Hamburger.module.scss'

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
