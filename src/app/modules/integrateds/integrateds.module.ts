import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegratedRouting } from './integrated.routing';
import { IntegratedListComponent } from './page/integrateds-list/integrateds-list.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [IntegratedListComponent],
  imports: [IntegratedRouting, CommonModule, BreadcrumbModule]
})
export class IntegratedModule {}
