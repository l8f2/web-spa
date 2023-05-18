import type { PluginOption } from 'vite'
import {
	AliasOptions,
	defineConfig,
	loadEnv,
	ResolveOptions,
	ServerOptions,
} from 'vite'
import unoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'
import { compilerOptions } from './tsconfig.json'
import * as path from 'path'

const tsConfAlias = compilerOptions.paths

const plugins = (
	env: IProcessEnv & IImportMetaEnv,
): (PluginOption | PluginOption[])[] => {
	return [
		unoCSS({
			shortcuts: [
				{
					logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
				},
			],
			presets: [
				presetUno(),
				presetAttributify(),
				presetIcons({
					extraProperties: {
						display: 'inline-block',
						'vertical-align': 'middle',
					},
				}),
			],
			inspector: true,
		}),
		react(),
		svgr(),
		createHtmlPlugin({
			minify: env.NODE_ENV !== 'dev',
			inject: {
				data: {
					title: env.VITE_PROJECT_TITLE,
				},
			},
		}),
	]
}

const resolve = (
	env: IProcessEnv & IImportMetaEnv,
): ResolveOptions & {
	alias?: AliasOptions
} => {
	const replaceTrailSymbol = (path: string) => {
		return path.replace(/\/\*$/, '')
	}

	return {
		alias: Object.entries(tsConfAlias).reduce((p, e) => {
			const [aliasKey, aliasPath] = e

			p[replaceTrailSymbol(aliasKey)] = path.resolve(
				__dirname,
				replaceTrailSymbol(aliasPath?.[0] || ''),
			)

			return p
		}, {}),
	}
}

const server = (env: IProcessEnv & IImportMetaEnv): ServerOptions => {
	return {
		host: '0.0.0.0',
		port: Number(env.VITE_PORT) || 5173,
		proxy: {
			[env.VITE_API_BASE_URL]: {
				target: env.VITE_API_URL,
				changeOrigin: true,
			},
			// [env.VITE_WS_BASE_URL]: {
			// 	target: env.VITE_API_URL,
			// 	changeOrigin: true,
			// 	// rewrite: path => path.replace(/^\/ws/, '')
			// }
		},
	}
}

// https://vitejs.dev/config/
export default ({ mode }) => {
	const viteEnv = {
		NODE_ENV: mode,
		...loadEnv(mode, process.cwd()),
	} as unknown as IProcessEnv & IImportMetaEnv

	console.log('項目環境常量為：')
	console.log(viteEnv)

	return defineConfig({
		plugins: plugins(viteEnv),
		resolve: resolve(viteEnv),
		server: server(viteEnv),
	})
}
