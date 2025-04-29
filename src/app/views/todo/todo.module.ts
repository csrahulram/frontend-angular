import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoRoutes } from "./todo.routes";

@NgModule({
    imports: [RouterModule.forChild(TodoRoutes)]
})

export class TodoModule {

}