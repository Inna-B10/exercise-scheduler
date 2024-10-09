import cn from 'clsx'
import Header from '../../components/header/Header'
import Loader from '../../components/ui/Loader'
import Statistics from './statistics/Statistics'
import useProfile from './useProfile'
import stylesRoot from '../LayoutRoot.module.scss'
import styles from './Profile.module.scss'

const Profile = () => {
	const { data, isLoading, error } = useProfile()

	return (
		<>
			<div
				className={cn(stylesRoot.wrapper, stylesRoot.otherPage)}
				style={{
					backgroundImage: `url('images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='images/header/user.svg'
								alt='Profile'
								height={56}
								draggable={false}
							/>
							<h1 className={stylesRoot.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics data={data} />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <p>{error.message}</p>}
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt=''
								draggable={false}
								style={{ borderRadius: 14 }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
