import { Component } from "@angular/core";
import { GraphQLService } from "./todo.service";
import { SearchComponent } from "src/app/shared/search/search.component";

@Component({
    selector: 'app-view-todo',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss'],
    imports: [SearchComponent]
})

export class TodoComponent {
    hello?: string;
    world?: string;

    constructor(private graphQLService: GraphQLService) {

    }

    ngOnInit() {
        this.graphQLService.getHelloWorld('123').subscribe(({ world }) => {
            // this.hello = hello;
            this.world = world;
        });
    }
}