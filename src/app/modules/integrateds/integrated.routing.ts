import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IntegratedListComponent } from './page/integrateds-list/integrateds-list.component';

const routes: Routes = [
  {
    path: '',
    component: IntegratedListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegratedRouting {}
