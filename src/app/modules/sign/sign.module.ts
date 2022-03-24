import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { SignComponent } from '../../routes/sign/sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [AuthGuard],
  declarations: [SignComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SignRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class SignModule {}
