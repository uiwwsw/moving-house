import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';
@NgModule({
  declarations: [TextFieldComponent, SignComponent],
  imports: [CommonModule, SignRoutingModule],
})
export class SignModule {}
