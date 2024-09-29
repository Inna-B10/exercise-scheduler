import cn from 'clsx'
import useCheckToken from '../hooks/useCheckToken'
import Header from '../components/header/Header'
import styles from './LayoutRoot.module.scss'

const LayoutRoot = ({ children, bgImage, heading = '' }) => {
	useCheckToken()
	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}

export default LayoutRoot
