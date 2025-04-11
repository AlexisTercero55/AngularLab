import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { TodoList } from './todo-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  private list = new TodoList("Alexis", [
      new TodoItem("Go for run", true),
      new TodoItem("Get flowers"),
      new TodoItem("Collect tickets"),
    ]);
  get username(): string {
  return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
