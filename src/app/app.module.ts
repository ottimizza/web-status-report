import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SidebarLayoutComponent } from './layout/sidebar-layout/sidebar-layout.component';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NavbarLayoutModule } from './layout/navbar-layout/navbar-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from '@shared/components/avatar/avatar.module';
import { BrandModule } from '@shared/components/brand/brand.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core.module';
import { FormsModule } from '@angular/forms';
import { GlobalHttpInterceptorProvider } from '@app/interceptor/http/http-interceptor.provider';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    SidebarLayoutComponent
    // NavbarLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,

    HttpClientModule,

    // core & shared
    CoreModule,
    // SharedModule,

    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    PipesModule,

    //
    NavbarLayoutModule,

    // Firebase Notification
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    // Global Components
    BreadcrumbModule,
    AvatarModule,
    BrandModule,

    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [GlobalHttpInterceptorProvider],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
