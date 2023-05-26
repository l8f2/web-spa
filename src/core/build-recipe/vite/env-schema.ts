import { z } from "zod";

export const envSchema = z.object({
  // mode
  NODE_ENV: z
    .string()
    .regex(/^(dev|prod)$/, { message: "僅支持 dev 與 prod 環境" }),
  // 專案名稱(前綴用)
  VITE_PROJECT_NAME: z.string(),
  // 專案標題(標題用)
  VITE_PROJECT_TITLE: z.string(),
  // vite port
  VITE_PORT: z.string().regex(/^\d+$/, { message: "port 必須是數字" }),
  // vite api proxy base url
  VITE_API_BASE_URL: z
    .string()
    .regex(/^(\/|http)/, { message: "base_url 必須是 / 或 http 開頭" }),
  // vite api proxy target
  VITE_API_URL: z
    .string()
    .regex(/^(\/|http)/, { message: "base_url 必須是 / 或 http 開頭" }),
  // vite ws proxy base url
  VITE_WS_BASE_URL: z
    .string()
    .regex(/^(\/|ws)/, { message: "base_url 必須是 / 或 ws 開頭" }),
  // dev 才有(登入預設帳號)
  VITE_LOGIN_USERNAME: z.string().optional(),
  // dev 才有(登入預設密碼)
  VITE_LOGIN_PASSWORD: z.string().optional(),
  // 前端版號
  VITE_APP_VERSION: z.string(),
});

export type TNodeEnv = "dev" | "prod";

export type TImportMetaEnv = Omit<z.infer<typeof envSchema>, "NODE_ENV">;

export type TProcessEnv = {
  NODE_ENV: TNodeEnv;
};

export type TViteEnv = TImportMetaEnv & TProcessEnv;
