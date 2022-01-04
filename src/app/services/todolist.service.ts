import { Injectable } from '@angular/core';
import { ToDoItem } from '../models/to-do-list.types';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  // add methods of add delete and complete
  private toDoList: Array<ToDoItem> = []
  getToDoList () {
    return this.toDoList
  }
}
