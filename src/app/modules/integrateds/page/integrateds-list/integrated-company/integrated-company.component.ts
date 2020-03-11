import { Input, Component } from '@angular/core';

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
  @Input() integration: any;
}
