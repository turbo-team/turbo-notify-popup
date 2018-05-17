import { Component, Input, Output, EventEmitter} from '@angular/core';
import {  trigger, state, style, animate, transition} from '@angular/animations';
@Component({
    selector: 'notify',
    template: `<div [@shrinkOut]="fade" class="trb-notify {{'trb-' + type}}" [ngClass]="{'trb-top': position=='top','trb-bottom':position=='bottom','trb-fixed':location=='body','trb-absolute':location!='body','trb-sticky':sticky==true}">
  <span class="trb-message">{{notifyText}}</span>
    <span class="trb-dismiss" (click)="dismiss()">×</span>
</div>`,
    styleUrls: ['styles/turbo-notify-popup.css'],
    animations: [
        trigger('shrinkOut', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                opacity: 0
            })),
            transition('show => hide', animate('700ms ease-out')),
            transition('* => show', animate('700ms ease-out'))
        ])
    ]
})

export class NotificationComponent {
    @Input() position: string;
    @Input() duration: number;
    @Input() type: string;
    @Input() notifyText: string;
    @Input() fade: string;
    @Input() sticky: boolean;
    @Input() location: string;
    @Output() destroyComponent = new EventEmitter<boolean>();
    public dismiss(): void {
        this.destroyComponent.emit(true);
    }

}
