import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InProjectListComponent } from './page/in-project-list/in-project-list.component';
import { InProjectCompanyComponent } from './page/in-project-company/in-project-company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    data: {
      breadcrumb: null
    },
    component: InProjectListComponent
  },
  {
    path: 'empresa/:companyId',
    data: {
      breadcrumb: null
    },
    component: InProjectCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InProjectRoutingModule {}
