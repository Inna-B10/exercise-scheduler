import cn from 'clsx'
import styles from './Alert.module.scss'

const Alert = ({ type = 'success', text }) => {
	if (text && text.message) {
		text = text.message
	}
	if (text && text.startsWith('\n')) {
		text = 'Something went wrong!'
	}
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Alert
