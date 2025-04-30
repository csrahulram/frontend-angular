import { CommonModule } from "@angular/common";
import { Component, HostListener, Input } from "@angular/core";

@Component({
    selector: 'app-shared-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.scss',
    imports: [CommonModule]
})

export class ButtonComponent {

    @HostListener('click', ['$event'])
    @Input() handler = () => {
        console.log('Working');
    }

    @Input() title = '';
    @Input() icon = '';

}