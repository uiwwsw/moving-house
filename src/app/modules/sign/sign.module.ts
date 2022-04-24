import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { LoggedInGuard } from '../../guards/logged-in/logged-in.guard';
import { SignComponent } from '../../routes/sign/sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [LoggedInGuard],
  declarations: [SignComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SignRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class SignModule {}
