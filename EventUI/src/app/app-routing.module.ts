import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab1/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './tab1/tab1.module#Tab1PageModule'
  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'friends/:friends', loadChildren: './friends/friends.module#FriendsPageModule'},
  { path: 'game-stats', loadChildren: './game-stats/game-stats.module#GameStatsPageModule' },
  { path: 'event-stats', loadChildren: './event-stats/event-stats.module#EventStatsPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  {path: 'make-event', loadChildren: './make-event/make-event.module#MakeEventPageModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
