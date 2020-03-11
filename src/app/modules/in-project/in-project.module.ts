import { NgModule } from '@angular/core';
import { InProjectRoutingModule } from './in-project.routing';
import { InProjectListComponent } from './page/in-project-list/in-project-list.component';
import { InProjectCompanyComponent } from './page/in-project-company/in-project-company.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ComplexSearchModule } from '@shared/components/search/complex-search.module';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InProjectListComponent, InProjectCompanyComponent],
  imports: [
    CommonModule,
    InProjectRoutingModule,
    BreadcrumbModule,
    ComplexSearchModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class InProjectModule {}
