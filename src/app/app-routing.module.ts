import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { AuthGuard } from '@app/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  },
  {
    path: 'content',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    data: {
      breadcrumb: 'Início'
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [NoAuthGuard],
        loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'integracoes',
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Integradas'
        },
        loadChildren: () =>
          import('@modules/integrateds/integrateds.module').then(m => m.IntegratedModule)
      },
      {
        path: 'projetos',
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Em Projeto'
        },
        loadChildren: () =>
          import('@modules/in-project/in-project.module').then(m => m.InProjectModule)
      }
    ]
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
