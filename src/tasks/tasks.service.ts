import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
    ) {}

    async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
        return await this.tasksRepository.getTasks(filterDto, user);
    }

    async findById(id: string, user: User): Promise<Task> {
        const found = await this.tasksRepository.findOne({
            where: { id, user },
        });
        if (!found) {
            throw new NotFoundException(`Task with ID "${id} not found."`);
        } else {
            return found;
        }
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        return await this.tasksRepository.createTask(createTaskDto, user);
    }

    async updateStatus(
        id: string,
        status: TaskStatus,
        user: User,
    ): Promise<Task> {
        const task = await this.findById(id, user);
        task.status = status;
        await this.tasksRepository.save(task);
        return task;
    }

    async deleteTask(id: string, user: User): Promise<void> {
        const result = await this.tasksRepository.delete({ id, user });
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }
}
