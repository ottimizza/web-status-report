import { Input, Component } from '@angular/core';
import { Integracao } from '@shared/models/Integracao';
import { DateUtils } from '@shared/utils/date.utils';

@Component({
  selector: 'app-integration',
  templateUrl: './integrated-company.component.html',
  styles: [
    `
      .integration-card {
        font-size: 90%;
      }
      span,
      strong {
        font-family: sans-serif, Arial, Tahoma, Verdana;
      }
    `
  ]
})
export class IntegratedCompanyComponent {
  @Input() integration: Integracao;

  get date() {
    return DateUtils.getDateString(this.integration.ultimoLoteProcessados);
  }
}
