import '@core/client/style/reset.css'
import 'virtual:uno.css'
import { createRoot } from 'react-dom/client'
import { ReactElement } from 'react'
import { App } from '@/app.tsx'

export type TAppUseCallback = (
	component: ReactElement<any, any>,
) => Promise<ReactElement<any, any>>

export type TAppInstanceUse = (cb: TAppUseCallback) => TAppPublicInstance

export type TAppInstanceSetup = () => void

export type TApp = () => TAppPublicInstance

type TAppPrivateInstance = {
	_root: HTMLElement
	_isCalledUse: boolean
	_useTimes: number
	_component: ReactElement<any, any>
}

export type TAppPublicInstance = {
	use: TAppInstanceUse
	setup: TAppInstanceSetup
}

type TAppInstance = TAppPrivateInstance & TAppPublicInstance

export const createApp: TApp = () => {
	const setup: TAppInstanceSetup = () => {
		if (--result._useTimes > (result._isCalledUse ? -1 : 0)) return

		createRoot(result._root).render(result._component)
	}

	const use: TAppInstanceUse = cb => {
		if (!result._isCalledUse) result._isCalledUse = true

		result._useTimes++

		cb(result._component).then(component => {
			result._component = component
			result.setup()
		})

		return result
	}

	const result: TAppInstance = {
		_root: document.getElementById('root') as HTMLElement,
		_isCalledUse: false,
		_useTimes: 0,
		_component: <App />,
		use,
		setup,
	}

	return result
}
