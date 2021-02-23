import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'token',
    loadChildren: () => import('./pages/token/token.module').then( m => m.TokenPageModule)
  },
  {
    path: 'invitaciones',
    loadChildren: () => import('./pages/invitaciones/invitaciones.module').then( m => m.InvitacionesPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'invitados/:id',
    loadChildren: () => import('./pages/invitados/invitados.module').then( m => m.InvitadosPageModule)
  },
  {
    path: 'validacion',
    loadChildren: () => import('./pages/validacion/validacion.module').then( m => m.ValidacionPageModule)
  },
  {
    path: 'confirmado',
    loadChildren: () => import('./pages/confirmado/confirmado.module').then( m => m.ConfirmadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
