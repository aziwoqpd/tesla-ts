export interface ITeslaApiRequestor {
  readonly token: string;
  getRequest<T>(path: string, params?: unknown): Promise<T>;
  postRequest<T>(path: string, body?: unknown, params?: unknown): Promise<T>;
}
