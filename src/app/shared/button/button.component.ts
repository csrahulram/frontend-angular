import { CommonModule } from "@angular/common";
import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
    selector: 'app-shared-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.scss',
    imports: [CommonModule]
})

export class ButtonComponent {

    @HostBinding('class') host = 'flex cursor-pointer items-center justify-center rounded-[5px] transition duration-300 hover:bg-[#0000002c] transition ';


    @HostListener('click', ['$event'])
    @Input() handler = () => {
        console.log('Working');
    }

    @Input() title = '';
    @Input() icon = '';

}