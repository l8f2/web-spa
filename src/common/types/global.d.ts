declare global {
	namespace NodeJS {
		interface ProcessEnv extends IProcessEnv {}
	}

	interface ImportMetaEnv extends IImportMetaEnv {}
}

export {}
