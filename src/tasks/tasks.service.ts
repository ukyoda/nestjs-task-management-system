import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks() {
        return this.tasks;
    }

    findById(id: string) {
        return this.tasks.find((val) => val.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: 'OPEN',
        };
        this.tasks.push(task);
        return task;
    }

    deleteTaskById(id: string): void {
        this.tasks = this.tasks.filter((val) => val.id !== id);
    }
}