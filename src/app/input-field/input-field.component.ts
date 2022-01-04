import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { ToDoItem } from '../models/to-do-list.types';
import { TodolistService } from '../services/todolist.service';
import uniqueRandom from 'unique-random';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  random = uniqueRandom(1, 1000);

  // inputs must be in reactiveForms
  inputTask: string = ''
  // Array<ToDoItem>
  toDoList: any = []
  faTrashAlt = faTrashAlt
  faClipboardCheck = faClipboardCheck
  // must be deleted
  color: string = 'red'

  constructor(private service: TodolistService) {

  }

  ngOnInit(): void {
    this.service.getToDoList()
  }

  createTask() {
    const toDo: ToDoItem = {
      name: this.inputTask,
      id: this.random(),
      isComplete: false,
    }
    this.toDoList = [...this.toDoList, this.inputTask]
    this.inputTask = ''
  }
  removeTask(task: ToDoItem) {
    // should be done with filter
    // this.toDoList.splice(i, 1)
    console.log(task)
  }
  // completeTask is more suiting name.
  changeColor() {
    // this.color === 'red' ? this.color = 'green' : this.color = 'red'

  }
}

// 1. task component
// 2. service gavaketo
// 3. fontawesome moduleshi tu sheidzleba she1vitano. tu sheidzleba iq shevitano fontawesome
// 4. learn pipes