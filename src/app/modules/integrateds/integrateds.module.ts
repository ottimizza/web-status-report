import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegratedRouting } from './integrated.routing';
import { IntegratedListComponent } from './page/integrateds-list/integrateds-list.component';

@NgModule({
  declarations: [IntegratedListComponent],
  imports: [IntegratedRouting, CommonModule]
})
export class IntegratedModule {}
