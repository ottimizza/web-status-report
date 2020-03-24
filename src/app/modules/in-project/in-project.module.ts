import { NgModule } from '@angular/core';
import { InProjectRoutingModule } from './in-project.routing';
import { InProjectListComponent } from './page/in-project-list/in-project-list.component';
import { InProjectCompanyComponent } from './page/in-project-company/in-project-company.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ComplexSearchModule } from '@shared/components/search/complex-search.module';
import {
  MatChipsModule,
  MatIconModule,
  MatSnackBarModule,
  MatAutocomplete,
  MatAutocompleteModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { InProjectCardComponent } from './page/in-project-list/in-project-card/in-project-card.component';
import { RouterModule } from '@angular/router';
import { ActionButtonsModule } from '@shared/components/action-buttons/action-buttons.module';
import { ScrollTrackerModule } from '@shared/directives/scroll-tracker.module';
import { SortingModule } from '@shared/components/sorting/sorting.module';

@NgModule({
  declarations: [InProjectListComponent, InProjectCompanyComponent, InProjectCardComponent],
  imports: [
    MatSnackBarModule,
    CommonModule,
    InProjectRoutingModule,
    BreadcrumbModule,
    ComplexSearchModule,
    MatChipsModule,
    MatIconModule,
    RouterModule,
    ActionButtonsModule,
    ScrollTrackerModule,
    MatAutocompleteModule,
    SortingModule
  ]
})
export class InProjectModule {}
