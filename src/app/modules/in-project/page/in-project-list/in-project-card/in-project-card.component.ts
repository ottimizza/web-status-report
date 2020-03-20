import { Component, Input } from '@angular/core';
import { Integracao } from '@shared/models/Integracao';

@Component({
  selector: 'app-project-card',
  templateUrl: './in-project-card.component.html',
  styleUrls: ['./in-project-card.component.scss']
})
export class InProjectCardComponent {
  @Input() project: Integracao;

  format() {
    const date = this.project.statusReportData;
    const format = (value: number) => {
      let val = `${value}`;
      if (value < 10) {
        val = '0' + value;
      }
      return val;
    };

    return `${format(date.getDate())}/${format(date.getMonth() + 1)}/${date.getFullYear()}`;
  }
}
