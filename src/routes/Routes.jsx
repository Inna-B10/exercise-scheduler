import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import NotFound from './../pages/not-found/NotFound'
import { routes } from './routes.data.js'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{/* TODO: Auth routes */}
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
