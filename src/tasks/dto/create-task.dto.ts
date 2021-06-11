// APIのパラメータが新しく追加されたとき、
// DTOを使わない場合はコントローラ、サービス、Etcすべて修正しないといけない
// DTOを使っている場合は、このクラスにフィールドを1つ追加するだけで良い
export class CreateTaskDto {
  title: string;
  description: string;
}
