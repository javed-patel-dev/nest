export class CustomResponse {
  static success(data: any, message: string, statusCode: number) {
    return {
      statusCode: statusCode ?? 200,
      message: message ?? 'success',
      data: data ?? null,
    };
  }

  static error(message: string, statusCode: number, error: any) {
    return {
      statusCode: statusCode ?? 500,
      message: message ?? 'error',
      error: JSON.parse(error) ?? null,
    };
  }
}
