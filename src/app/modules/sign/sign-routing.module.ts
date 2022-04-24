import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from '../../routes/sign/sign.component';
import { LoggedInGuard } from '../../guards/logged-in/logged-in.guard';
const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRoutingModule {}
