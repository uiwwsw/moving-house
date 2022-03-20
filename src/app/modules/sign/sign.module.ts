import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import { SignComponent } from '../../routes/sign/sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { AuthGuard } from '../../guards/auth/auth.guard';
@NgModule({
  providers: [AuthGuard],
  declarations: [TextFieldComponent, SignComponent],
  imports: [CommonModule, SignRoutingModule],
})
export class SignModule {}
