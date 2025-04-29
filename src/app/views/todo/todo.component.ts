import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-view-todo',
    templateUrl: 'todo.component.html',
    styleUrl: 'todo.component.scss',
    imports: [RouterOutlet]
})



export class TodoComponent implements OnInit {
    ngOnInit(): void {

    }
}