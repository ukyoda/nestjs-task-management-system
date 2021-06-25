import {
  NestInterceptor,
  ExecutionContext,
  Injectable,
  CallHandler,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    // dataには出力情報が入ってくる模様。
    // classToPlain(data) → クラスインスタンスを、通常のオブジェクトに変換する
    // 多分、このときにExclude指定したデータが秘匿されるのだと思う
    return next.handle().pipe(map((data) => classToPlain(data)));
  }
}
