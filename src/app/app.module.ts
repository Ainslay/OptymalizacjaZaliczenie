import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosHeaderComponent } from './components/todos-header/todos-header.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosMainComponent } from './components/todos-main/todos-main.component';
import { TodosTodoComponent } from './components/todos-todo/todos-todo.component';
import { TodosFooterComponent } from './components/todos-footer/todos-footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodosHeaderComponent,
    TodosComponent,
    TodosMainComponent,
    TodosTodoComponent,
    TodosFooterComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
