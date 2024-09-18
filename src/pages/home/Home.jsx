import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button/Button'
import useAuth from '../../hooks/useAuth'
import LayoutRoot from './../LayoutRoot'
import styles from './Home.module.scss'

const Home = () => {
const { isAuth } = useAuth()
const navigate = useNavigate()

	return (
		<LayoutRoot bgImage='images/home-bg.jpg'>
			<Button clickHandler={() => navigate(!isAuth ? '/auth' : '/new-workout')}>
				{!isAuth? 'Sign in': 'New'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO: Counters */}
		</LayoutRoot>
    )
}

export default Home