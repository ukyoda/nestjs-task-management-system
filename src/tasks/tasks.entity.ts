import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks-status.enum';

@Entity()
export class Task {
  // 主キー。自動生成される
  // 通常はオートインクリメントっぽい
  // 'uuid'を引数にセットすると、uuidを自動生成する
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
