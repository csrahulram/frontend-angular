import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';


export const TodoRoutes: Routes = [
    {
        path: '',
        component: TodoComponent,
        children: [
            {
                path: 'list',
                loadComponent: () => import('../../layout/list/list.component').then((c) => c.ListComponent)
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
];
