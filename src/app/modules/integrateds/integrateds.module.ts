import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegratedRouting } from './integrated.routing';
import { IntegratedListComponent } from './page/integrateds-list/integrateds-list.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ComplexSearchModule } from '@shared/components/search/complex-search.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IntegratedCompanyComponent } from './page/integrateds-list/integrated-company/integrated-company.component';
import { ScrollTrackerModule } from '@shared/directives/scroll-tracker.module';
import { SortingModule } from '@shared/components/sorting/sorting.module';

@NgModule({
  declarations: [IntegratedListComponent, IntegratedCompanyComponent],
  imports: [
    IntegratedRouting,
    CommonModule,
    BreadcrumbModule,
    ComplexSearchModule,
    MatChipsModule,
    MatIconModule,
    ScrollTrackerModule,
    MatSnackBarModule,
    SortingModule
  ]
})
export class IntegratedModule {}
