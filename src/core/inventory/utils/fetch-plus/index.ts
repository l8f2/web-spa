type TMethod = "get" | "post" | "put" | "delete";

type TContentType =
  | "application/json" // json()
  | "text/plain" // text()
  | "text/html" // text()
  | "application/octet-stream" // blob() | arrayBuffer()
  | "multipart/form-data" // formData()
  | "application/x-www-form-urlencoded"; // formData()

type TInitOptions = {
  baseUrl?: string;
};

type TCallOptions = RequestInit & {
  timeout?: number;
  headers?: {
    params?: Record<string, any>;
    contentType?: TContentType;
  };
};

export class FetchPlus {
  private baseUrl?: string;

  constructor(options: TInitOptions) {
    this.baseUrl = options.baseUrl;
  }

  private call(method: TMethod, url: string, options?: TCallOptions) {
    const contentType = "app";

    fetch(url, {
      method,
    });
  }

  get(url: string, options?: TCallOptions) {
    this.call("get", url, options);
  }
}
