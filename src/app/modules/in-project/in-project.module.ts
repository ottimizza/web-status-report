import { NgModule } from '@angular/core';
import { InProjectRoutingModule } from './in-project.routing';
import { InProjectListComponent } from './page/in-project-list/in-project-list.component';
import { InProjectCompanyComponent } from './page/in-project-company/in-project-company.component';

@NgModule({
  declarations: [InProjectListComponent, InProjectCompanyComponent],
  imports: [InProjectRoutingModule]
})
export class InProjectModule {}
