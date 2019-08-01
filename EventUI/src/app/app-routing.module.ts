import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'friends/:friends', loadChildren: './friends/friends.module#FriendsPageModule'},
  { path: 'game-stats', loadChildren: './game-stats/game-stats.module#GameStatsPageModule' },
  { path: 'event-stats', loadChildren: './event-stats/event-stats.module#EventStatsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
