import { map, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../shared/item/item.component';
import { SearchComponent } from '../../shared/search/search.component';
import { ButtonComponent } from "../../shared/button/button.component";


type Todo = {
    title: String,
    description: String,
    createdDate: Date,
    status: String,
    dueDate: Date
};

@Component({
    selector: 'app-layout-list',
    templateUrl: 'list.component.html',
    styleUrl: 'list.component.scss',
    imports: [CommonModule, SearchComponent, ItemComponent, ButtonComponent]
})



export class ListComponent implements OnInit {

    data: Todo[] = [];

    private PATH = "/graphql";
    private HOST = "http://localhost:3000";
    private fullUrl = this.HOST + this.PATH;



    constructor(private apollo: Apollo) {

    }


    ngOnInit() {
        this.getUsers().subscribe({
            next: (res) => {
                this.data = res.todos
            }
        })
    }

    customHandler() {
        console.log('Super')
    }


    getUsers(): Observable<any> {
        return this.apollo
            .watchQuery({
                query: gql`
              query {
                todos {
                    description
                    title
                }
              }
            `,
                context: {
                    uri: this.fullUrl,
                },
            })
            .valueChanges.pipe(map((result: any) => result.data));
    }
}