import { loadEnv } from "vite";
import { ZodType } from "zod";
import { TNodeEnv, TViteEnv } from "./env-schema";

export const verifyGetEnv = (mode: TNodeEnv, schema: ZodType): TViteEnv => {
  const viteEnv = {
    NODE_ENV: mode,
    ...loadEnv(mode, process.cwd()),
  } as unknown as TViteEnv;

  try {
    schema.parse(viteEnv);
  } catch (err) {
    console.error(err);
    throw new Error("環境參數驗證不通過");
  }

  console.log("項目環境常量為：");
  console.log(viteEnv);

  return viteEnv;
};
