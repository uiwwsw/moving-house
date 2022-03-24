import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { AdminGuard } from '../../guards/admin/admin.guard';
import { AdminComponent } from '../../routes/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [AdminGuard],
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class AdminModule {}
