import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './in-project-card.component.html',
  styleUrls: ['./in-project-card.component.scss']
})
export class InProjectCardComponent {
  @Input() project: any;
}
