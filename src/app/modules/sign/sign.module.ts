import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../components/input/input.component';
import { SignComponent } from '../../routes/sign/sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { AuthGuard } from '../../guards/auth/auth.guard';
@NgModule({
  providers: [AuthGuard],
  declarations: [InputComponent, SignComponent],
  imports: [CommonModule, SignRoutingModule],
})
export class SignModule {}
