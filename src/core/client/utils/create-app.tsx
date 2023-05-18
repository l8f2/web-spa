import { BrowserRouter } from 'react-router-dom'

export type TAppOpts = {
	root: string // 根 id
	router?: typeof BrowserRouter
}

export type TCreateApp = (opts: TAppOpts) => void

export const createApp: TCreateApp = opts => {
	const root = document.getElementById(opts.root) as HTMLElement

	console.log(root)
}
