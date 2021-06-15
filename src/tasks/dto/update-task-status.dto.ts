import { Type } from "class-transformer";
import { IsEnum, IsString, ValidateNested } from "class-validator";
import { TaskStatus } from "../task.model";

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}