export interface APIError {
  data: {
    error: string;
    code: number;
  };
  status: number;
  from?: string;
}
