import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import NotFound from './../pages/not-found/NotFound'
import { routes } from './routes.data.js'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<HashRouter>
			<Routes>      
				{routes.map(route => {
          if (route.auth && !isAuth){
						return(
							<Route
								key={route.path}
								path={route.path}
								element={<Navigate to="/auth" />}
							/>
						)
          }
          return(
					<Route
						key={route.path}
            path={route.path}
            element={<route.component />}
					/>
          )
})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</HashRouter>
	)
}

export default Router
