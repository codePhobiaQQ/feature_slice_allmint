import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TestPage = lazy(() => import('./test'))

export const Routing = () => {
	return (
		<Routes>
			<Route index path='/' element={<TestPage />} />
			{/* <Route path='*' /> */}
		</Routes>
	)
}
