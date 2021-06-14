import { TodosService } from './../../services/todos.service';
import { TodoInterface } from './../../interfaces/todo.interface';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todos-todo.component.html'
})
export class TodosTodoComponent implements OnInit, OnChanges {
  @Input('todo') todoProps: TodoInterface;
  @Input('isEditing') isEditingProps: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> =
    new EventEmitter();
  @ViewChild('textInput') textInput: ElementRef;

  editingText: string = '';

  constructor(private todosService: TodosService) {}
  
  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isEditingProps.currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoInEditMode(): void {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todoProps.id);
  }

  toggoleTodo(): void {
    this.todosService.toggleTodo(this.todoProps.id);
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.editingText = target.value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
