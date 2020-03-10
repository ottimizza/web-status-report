import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegratedRouting } from './integrated.routing';
import { IntegratedListComponent } from './page/integrateds-list/integrateds-list.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ComplexSearchModule } from '@shared/components/search/complex-search.module';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { IntegratedCompanyComponent } from './page/integrateds-list/integrated-company/integrated-company.component';

@NgModule({
  declarations: [IntegratedListComponent, IntegratedCompanyComponent],
  imports: [
    IntegratedRouting,
    CommonModule,
    BreadcrumbModule,
    ComplexSearchModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class IntegratedModule {}
