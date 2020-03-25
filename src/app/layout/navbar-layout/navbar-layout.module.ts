import { NgModule } from '@angular/core';

/* ********************************************************************************* *
 * Angular Material
 * ********************************************************************************* */
import { MatMenuModule } from '@angular/material/menu';

/* ********************************************************************************* *
 * Shared Components
 * ********************************************************************************* */
import { AvatarModule } from '@shared/components/avatar/avatar.module';

/* ********************************************************************************* *
 * Exported Components
 * ********************************************************************************* */
import { NavbarLayoutComponent } from './navbar-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandModule } from '@shared/components/brand/brand.module';

@NgModule({
  declarations: [NavbarLayoutComponent],
  imports: [
    // FormsModule,
    CommonModule,
    RouterModule,
    AvatarModule,
    MatMenuModule,
    BrandModule
  ],
  exports: [NavbarLayoutComponent],
  providers: [],
  entryComponents: []
})
export class NavbarLayoutModule {}
