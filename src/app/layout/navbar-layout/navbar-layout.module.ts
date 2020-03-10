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

@NgModule({
  declarations: [NavbarLayoutComponent],
  imports: [
    // FormsModule,
    CommonModule,
    RouterModule,
    AvatarModule,
    MatMenuModule
  ],
  exports: [NavbarLayoutComponent],
  providers: [],
  entryComponents: []
})
export class NavbarLayoutModule {}
