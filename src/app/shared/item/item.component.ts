import { Component, input, OnInit } from "@angular/core";

@Component({
    selector: 'app-shared-item',
    templateUrl: 'item.component.html',
    styleUrl: 'item.component.scss'
})

export class ItemComponent implements OnInit {

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