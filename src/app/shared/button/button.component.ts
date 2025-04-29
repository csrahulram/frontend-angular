import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: 'app-shared-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.scss',
    imports: [CommonModule]
})

export class ButtonComponent {

    @HostBinding('click') handler = () => {
        console.log('Working');
    }

    icon = 'plus';
    title = 'Create';
    bgColor = 'grey';
}