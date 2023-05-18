declare global {
	interface IProcessEnv {
		readonly NODE_ENV: 'dev' | 'prod'
	}

	interface IImportMetaEnv {
		// 專案名稱(前綴用)
		readonly VITE_PROJECT_NAME: string
		// 專案標題(標題用)
		readonly VITE_PROJECT_TITLE: string
		// vite port
		readonly VITE_PORT: string
		// vite api proxy base url
		readonly VITE_API_BASE_URL: string
		// vite api proxy target
		readonly VITE_API_URL: string
		// vite ws proxy base url
		readonly VITE_WS_BASE_URL: string
		// dev 才有
		readonly VITE_LOGIN_USERNAME?: string
		// dev 才有
		readonly VITE_LOGIN_PASSWORD?: string
		// 前端版號
		readonly VITE_APP_VERSION: string
	}
}

export {}
