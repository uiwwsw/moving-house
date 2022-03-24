import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { PicComponent } from '../../components/pic/pic.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    PicComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  exports: [
    PicComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
})
export class ComponentsModule {}
