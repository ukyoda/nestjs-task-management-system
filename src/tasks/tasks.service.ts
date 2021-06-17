import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

@Injectable()
export class TasksService {
    // private tasks: Task[] = [];

    // getAllTasks() {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter((value) => value.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter(
    //             (value) =>
    //                 value.title.includes(search) ||
    //                 value.description.includes(search),
    //         );
    //     }
    //     return tasks;
    // }

    // findById(id: string) {
    //     const found = this.tasks.find((val) => val.id === id);
    //     if (!found) {
    //         throw new NotFoundException(`Task with ID "${id} not found."`);
    //     } else {
    //         return found;
    //     }
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }

    // updateStatus(id: string, status: TaskStatus): Task {
    //     const task = this.findById(id);
    //     if (task) {
    //         task.status = status;
    //     }
    //     return task;
    // }

    // deleteTask(id: string): void {
    //     this.findById(id); // 存在チェック
    //     this.tasks = this.tasks.filter((val) => val.id !== id);
    // }
}
