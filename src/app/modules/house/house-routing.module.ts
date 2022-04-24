import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from '../../routes/house/house.component';
import { LoggedInGuard } from '../../guards/logged-in/logged-in.guard';
import { IsOwnGuard } from '../../guards/is-own/is-own.guard';
const routes: Routes = [
  {
    path: 'house/view/:id',
    component: HouseComponent,
  },
  {
    path: 'house/edit/:id',
    canActivate: [IsOwnGuard],
    component: HouseComponent,
  },
  {
    path: 'house/build',
    canActivate: [LoggedInGuard],
    component: HouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseRoutingModule {}
