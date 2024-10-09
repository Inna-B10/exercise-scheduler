import { useNavigate } from 'react-router-dom'
import Loader from '../../components/ui/Loader'
import Button from '../../components/ui/button/Button'
import Statistics from '../profile/statistics/Statistics'
import useProfile from '../profile/useProfile'
import LayoutRoot from './../LayoutRoot'
import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()
	const { data, error, isLoading } = useProfile()

	return (
		<LayoutRoot bgImage='images/home-bg.jpg'>
			<div className={styles.wrapper}>
				<h1 className={styles.heading}>
					Stronger Every Rep,
					<br /> Better Every Day!
				</h1>
				<Button clickHandler={() => navigate('/new-workout')}>
					New workout
				</Button>
				{isLoading ? (
					<Loader />
				) : (
					<>
						{/* Проверка наличия данных перед передачей в Statistics */}
						{data && data.statistics ? (
							<Statistics data={data} />
						) : (
							<p>No statistics available</p>
						)}
					</>
				)}
			</div>
		</LayoutRoot>
	)
}

export default Home
