import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from '../../routes/sign/sign.component';
import { AuthGuard } from '../../guards/auth/auth.guard';
const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRoutingModule {}
