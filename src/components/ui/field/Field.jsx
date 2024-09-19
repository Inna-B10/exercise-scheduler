import styles from './Field.module.scss'

const Field = ({ register, name, options, ...rest }) => {
	return (
		<>
			<input {...register(name, options)} {...rest} className={styles.input} />
		</>
	)
}
export default Field
