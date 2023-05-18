import { TAppOpts } from '@core/utils/create-app.tsx'
import { Fragment } from 'react'

export const Layout = ({ router }: TAppOpts) => {
	const Router = router ? router : Fragment

	return <Router></Router>
}
