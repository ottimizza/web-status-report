import { NgModule } from '@angular/core';
import { SortingComponent } from './sorting.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SortingComponent],
  imports: [CommonModule, MatMenuModule],
  exports: [SortingComponent]
})
export class SortingModule {}
