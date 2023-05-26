declare global {
  namespace NodeJS {
    type ProcessEnv = IProcessEnv;
  }

  type ImportMetaEnv = IImportMetaEnv;
}

export {};
