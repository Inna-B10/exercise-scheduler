import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button/Button'
import LayoutRoot from './../LayoutRoot'
import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()

	return (
		<LayoutRoot bgImage='images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO: Counters */}
		</LayoutRoot>
	)
}

export default Home
