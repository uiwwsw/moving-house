import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [CommonModule],
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  exports: [InputComponent, ButtonComponent, HeaderComponent, SpinnerComponent],
})
export class ComponentsModule {}
