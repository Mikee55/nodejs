// src/tasks/tasks.service.ts
import { Injectable } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto"; // Import our DTOs

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable() // The @Injectable() decorator marks this class as a Provider
export class TasksService {
  // In-memory array to simulate a database
  private tasks: Task[] = [
    {
      id: 1,
      title: "Learn NestJS",
      description: "Complete the crash course",
      completed: false,
    },
    {
      id: 2,
      title: "Build API",
      description: "Create a simple task API",
      completed: false,
    },
  ];
  private nextId = 3; // To generate unique IDs

  // Get all tasks
  findAll(): Task[] {
    return this.tasks;
  }

  // Get a single task by ID
  findOne(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  // Create a new task
  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.nextId++,
      ...createTaskDto, // Spread properties from DTO
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Update an existing task
  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null; // Task not found
    }
    const updatedTask = { ...this.tasks[taskIndex], ...updateTaskDto, id }; // Merge updates
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  // Delete a task
  remove(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.length < initialLength; // True if a task was removed
  }
}
