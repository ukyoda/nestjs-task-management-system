import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
    ) {}

    async getAllTasks(): Promise<Task[]> {
        return await this.tasksRepository.find();
    }

    async getTasksWithFilters(filterDto: GetTasksFilterDto): Promise<Task[]> {
        return await this.tasksRepository.getTasks(filterDto);
    }

    async findById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id} not found."`);
        } else {
            return found;
        }
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return await this.tasksRepository.createTask(createTaskDto);
    }

    async updateStatus(id: string, status: TaskStatus): Promise<Task> {
        const task = await this.findById(id);
        task.status = status;
        await this.tasksRepository.save(task);
        return task;
    }

    async deleteTask(id: string): Promise<void> {
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }
}
