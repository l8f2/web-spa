declare global {
  import {
    TImportMetaEnv,
    TProcessEnv,
  } from "@/core/build-recipe/vite/env-schema.ts";

  namespace NodeJS {
    type ProcessEnv = TProcessEnv;
  }

  type ImportMetaEnv = TImportMetaEnv;
}

export {};
