import { NgModule } from '@angular/core';

/* ********************************************************************************* *
 * Angular Material
 * ********************************************************************************* */
import { MatMenuModule } from '@angular/material/menu';

/* ********************************************************************************* *
 * Shared Components
 * ********************************************************************************* */
import { AvatarModule } from '@shared/components/avatar/avatar.module';
import { BrandModule } from '@shared/components/brand/brand.module';

/* ********************************************************************************* *
 * Exported Components
 * ********************************************************************************* */
import { NavbarLayoutComponent } from './navbar-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SigninAsDialogModule } from '@shared/components/dialogs/signin-as-dialog/signin-as-dialog.module';
import { SigninAsDialogComponent } from '@shared/components/dialogs/signin-as-dialog/signin-as-dialog.component';

@NgModule({
  declarations: [NavbarLayoutComponent],
  imports: [
    // FormsModule,
    CommonModule,
    RouterModule,
    AvatarModule,
    BrandModule,
    SigninAsDialogModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [NavbarLayoutComponent],
  providers: [],
  entryComponents: [SigninAsDialogComponent]
})
export class NavbarLayoutModule {}
