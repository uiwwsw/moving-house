import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { HeaderBgComponent } from '../../components/header-bg/header-bg.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
    HeaderBgComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
    HeaderBgComponent,
  ],
})
export class ComponentsModule {}
