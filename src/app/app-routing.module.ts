import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'grp',
    loadChildren: () => import('./grp/grp.module').then( m => m.GrpPageModule)
  },
  {
    path: 'grpchat',
    loadChildren: () => import('./grpchat/grpchat.module').then( m => m.GrpchatPageModule)
  },
  {
    path: 'online',
    loadChildren: () => import('./online/online.module').then( m => m.OnlinePageModule)
  },
  
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'chatindiv',
    loadChildren: () => import('./chatindiv/chatindiv.module').then( m => m.ChatindivPageModule)
  },
  {
    path: 'offline',
    loadChildren: () => import('./offline/offline.module').then( m => m.OfflinePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
