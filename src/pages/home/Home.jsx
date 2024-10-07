import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button/Button'
import Statistics from '../profile/statistics/Statistics'
import LayoutRoot from './../LayoutRoot'
import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()

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
				<Statistics />
			</div>
		</LayoutRoot>
	)
}

export default Home
