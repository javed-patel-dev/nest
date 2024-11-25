import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { CustomResponse } from 'src/utils/customRes';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException(
        CustomResponse.error(
          JSON.parse(error)[0].message ?? 'Validation failed',
          400,
          JSON.parse(error),
        ),
      );
    }
  }
}
