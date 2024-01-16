import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    const { description, title } = newTask;
    const { id } = this.taskService.createTasks(title, description);
    console.log('Task created');
    return {
      id,
      description,
    };
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTask: UpdateTaskDto) {
    return this.taskService.updateTasks(id, updateTask);
  }
}
