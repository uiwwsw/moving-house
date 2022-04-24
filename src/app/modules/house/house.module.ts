import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { LoggedInGuard } from '../../guards/logged-in/logged-in.guard';
import { IsOwnGuard } from '../../guards/is-own/is-own.guard';
import { HouseComponent } from '../../routes/house/house.component';
import { HouseRoutingModule } from './house-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [LoggedInGuard, IsOwnGuard],
  declarations: [HouseComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HouseRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class HouseModule {}
