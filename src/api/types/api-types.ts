export interface ApiError {
  status: number;
  message: string;
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface NewPostPayload {
  title: string;
  body: string;
  userId: number;
}
