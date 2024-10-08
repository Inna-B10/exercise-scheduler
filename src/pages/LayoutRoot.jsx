import cn from 'clsx'
import useCheckToken from '../hooks/useCheckToken'
import Header from '../components/header/Header'
import styles from './LayoutRoot.module.scss'

const LayoutRoot = ({
	children,
	bgImage,
	heading = '',
	backLink = '/',
	title = ''
}) => {
	useCheckToken()
	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} title={title} />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <>{children}</>}
		</section>
	)
}

export default LayoutRoot
