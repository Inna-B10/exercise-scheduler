import Workouts from '../pages/workouts/Workouts'
import Auth from './../pages/auth/Auth'
import Home from './../pages/home/Home'
import NewWorkout from './../pages/new-workout/NewWorkout'
import Profile from './../pages/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/workouts',
		component: Workouts,
		auth: true,
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	} /* 
	{
		path: '/new-exercise',
		component: NewExercise,
		auth: true,
	},

	{
		path: '/workout/:id',
		component: SingleWorkout,
		auth: true,
	},
	{
		path: '/exercise/:id',
		component: SingleExercise,
		auth: true,
	}, */
]
