// <<Memo>>
// APIのパラメータが新しく追加されたとき、
// DTOを使わない場合はコントローラ、サービス、Etcすべて修正しないといけない
// DTOを使っている場合は、このクラスにフィールドを1つ追加するだけで解決できる
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @MaxLength(140)
  description: string;
}
