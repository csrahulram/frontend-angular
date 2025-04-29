import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        //loadChildren: () => import('./views/todo/todo.routes').then((r) => r.TodoRoutes)
        loadChildren: () => import('./views/todo/todo.module').then((m) => m.TodoModule)
    }
];
