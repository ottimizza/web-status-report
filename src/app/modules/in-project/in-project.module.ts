import { NgModule } from '@angular/core';
import { InProjectRoutingModule } from './in-project.routing';
import { InProjectListComponent } from './page/in-project-list/in-project-list.component';
import { InProjectCompanyComponent } from './page/in-project-company/in-project-company.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ComplexSearchModule } from '@shared/components/search/complex-search.module';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InProjectCardComponent } from './page/in-project-list/in-project-card/in-project-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InProjectListComponent, InProjectCompanyComponent, InProjectCardComponent],
  imports: [
    CommonModule,
    InProjectRoutingModule,
    BreadcrumbModule,
    ComplexSearchModule,
    MatChipsModule,
    MatIconModule,
    RouterModule
  ]
})
export class InProjectModule {}
