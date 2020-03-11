import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BreadcrumbModule]
})
export class HomeModule {}
