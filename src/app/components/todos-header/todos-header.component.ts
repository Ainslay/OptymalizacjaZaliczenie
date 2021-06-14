import { Component, OnInit } from '@angular/core';
import { TodosService } from '@services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html'
})
export class TodosHeaderComponent {
  text: string = '';

  constructor(private todosService: TodosService) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
