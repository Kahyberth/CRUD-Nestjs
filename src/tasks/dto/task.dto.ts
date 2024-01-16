import { TaskStatus } from '../task.entity';
import { IsString, IsNotEmpty, MinLength, IsEnum, IsOptional} from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
