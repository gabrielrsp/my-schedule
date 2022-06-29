import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { createTask } from './functions/create-task';
import { deleteTask } from './functions/delete-task';
import { updateTask } from './functions/update-task';

@Controller('tasks')
export class TasksController {

  //CREATE

  @Post('/create-task')
  async createTask (@Body() body: CreateTaskDto) {
    return await createTask(body)
  }

  @Delete('/:taskId')
  async deleteTask (@Param('taskId') taskId) {
    return await deleteTask(taskId)
  }

  @Put('/:taskId')
    async updateTask (@Param('taskId') taskId, @Body() body: UpdateTaskDto) {
      return await updateTask(taskId, body)
  }
  
  //READ - Get Tasks of Day/Week/Month


}
