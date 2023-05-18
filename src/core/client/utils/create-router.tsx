import { BrowserRouter } from 'react-router-dom'

export type TCreateRouter = () => any

export const createRouter: TCreateRouter = () => {
	return <BrowserRouter></BrowserRouter>
}
