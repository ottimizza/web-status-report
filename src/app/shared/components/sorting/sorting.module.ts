import { NgModule } from '@angular/core';
import { SortingComponent } from './sorting.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [SortingComponent],
  imports: [CommonModule, MatMenuModule],
  exports: [SortingComponent]
})
export class SortingModule {}
