import NewExercise from '../pages/new-exercise/newExercise'
import ListWorkouts from '../pages/workout/ListWorkouts'
import Workout from '../pages/workout/Workout'
import Auth from './../pages/auth/Auth'
import Home from './../pages/home/Home'
import NewWorkout from './../pages/new-workout/NewWorkout'
import Profile from './../pages/profile/Profile'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/',
		component: Home,
		auth: true
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
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		auth: true
	},
	{
		path: '/workouts/:id',
		component: Workout,
		auth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		auth: true
	}
	/*
	{
		path: '/exercise/:id',
		component: Exercise,
		auth: true
	}
		*/
]
