import { Component, HostBinding, input, OnInit } from "@angular/core";
import { ProgressComponent } from "../progress/progress.component";
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
    selector: 'app-shared-item',
    templateUrl: 'item.component.html',
    styleUrl: 'item.component.scss',
    imports: [ProgressComponent, ButtonComponent]
})

export class ItemComponent implements OnInit {

    @HostBinding('class') host = 'block border border-gray-400 rounded-[5px] p-2 rounded-md my-2'
    data: any = input({
        title: 'Loading',
        description: '',
        createdDate: '',
        status: '',
        dueDate: ''
    });

    ngOnInit(): void {
        console.log(this.data());
    }


}