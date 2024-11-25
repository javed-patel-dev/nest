export class CustomResponse {
  static success(data: any, message: string, statusCode: number) {
    return {
      statusCode: statusCode ?? 200,
      data: data ?? null,
      message: message ?? 'success',
    };
  }

  static error(message: string, statusCode: number, error: any) {
    return {
      statusCode: statusCode ?? 500,
      message: message ?? 'error',
      error: error ?? null,
    };
  }
}
