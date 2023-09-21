export class HttpResponse<T> {
  result: boolean;
  data: T;
  message: string;

  constructor(data?: T, err?: Error) {
    if (err) {
      this.result = false;
      this.message = err.message;
    } else {
      this.result = true;
      this.data = data;
    }
  }
}
