import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { PicComponent } from '../../components/pic/pic.component';
import { CardComponent } from '../../components/card/card.component';
import { GridComponent } from '../../components/grid/grid.component';
import { IndexComponent } from '../../routes/index/index.component';
import { NotFoundComponent } from '../../routes/not-found/not-found.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    NotFoundComponent,
    IndexComponent,
    PicComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
    CardComponent,
    GridComponent,
  ],
  exports: [
    NotFoundComponent,
    IndexComponent,
    PicComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    SpinnerComponent,
    CardComponent,
    GridComponent,
  ],
})
export class ComponentsModule {}
