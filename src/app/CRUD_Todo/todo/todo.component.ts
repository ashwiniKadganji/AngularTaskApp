import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todoList: any[]=[];

  constructor(private _TodoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  createTodos(){
    let todo = {
      id : new Date().getTime(),
       action: 'Handle todo list'
    }

    this._TodoService.createTodo(todo).subscribe(res =>{
        console.log('created new data:',res);  
        this.getTodos();  
    })
  }

  getTodos(){
      this._TodoService.getTodo().subscribe(res =>{
        console.log('get todo data:',res);
        this.todoList = res;
      })
  }

  editTodo(todo: any) {
      console.log('edit data successfully',todo);

      let todo1 = {
        id: new Date().getTime(),
        action : "Practice of angular coding"
      }

      this._TodoService.updateTodo(todo.id,todo1).subscribe(res =>{
        console.log('Edit called',res);
        this.getTodos();
        
      })
      
    }

    deleteTodo(id: any) {
      console.log('delete data successfully!',id);
      
      this._TodoService.deleteTodo(id).subscribe(res =>{
        console.log('delete called',res);
        this.getTodos();
      })
      }
}
