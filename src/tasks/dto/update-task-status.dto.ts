import { Type } from "class-transformer";
import { IsEnum, IsString, ValidateNested } from "class-validator";
import { TaskStatus } from "../tasks-status.enum";

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}