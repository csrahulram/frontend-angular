import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { SearchComponent } from "../../shared/search/search.component";

@Component({
    selector: 'app-view-todo',
    templateUrl: 'todo.component.html',
    styleUrl: 'todo.component.scss',
    imports: [SearchComponent]
})

export class TodoComponent implements OnInit {

    private PATH = "/graphql";
    private HOST = "http://localhost:3000";
    private fullUrl = this.HOST + this.PATH;

    constructor(private apollo: Apollo) {

    }

    ngOnInit(): void {
        this.getUsers().subscribe({
            next: (res) => {
                console.log(res);
            }
        })
    }


    getUsers(): Observable<any> {
        return this.apollo
            .watchQuery({
                query: gql`
              query {
                hello(id:"fadsfadsf")
                world(id:"fadsfadsf")
              }
            `,
                context: {
                    uri: this.fullUrl,
                },
            })
            .valueChanges.pipe(map((result: any) => result.data));
    }
}