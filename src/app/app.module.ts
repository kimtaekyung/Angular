import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { TodosModule } from './todos/todos.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HelloComponent } from './hello/hello.component';
// 양방향 데이터 바인딩
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    TodoListComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
