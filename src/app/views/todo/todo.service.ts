// src/app/services/graphql.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HELLO_WORLD_QUERY } from './todo.query';

@Injectable({
    providedIn: 'root',
})
export class GraphQLService {
    constructor(private apollo: Apollo) { }

    getHelloWorld(id: string): Observable<{ hello: string; world: string }> {
        return this.apollo
            .watchQuery<any>({
                query: HELLO_WORLD_QUERY,
                variables: { id },
            })
            .valueChanges.pipe(
                map((result) => ({
                    hello: result.data.hello,
                    world: result.data.world,
                }))
            );
    }
}