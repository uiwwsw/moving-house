import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './modules/components/components.module';
import { HouseComponent } from './routes/house/house.component';
import { AdminComponent } from './routes/admin/admin.component';
import { IndexComponent } from './routes/index/index.component'; // CLI imports router
import { NotFoundComponent } from './routes/not-found/not-found.component';
// import { SignComponent } from './routes/sign/sign.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'house/view/:id',
    component: HouseComponent,
  },
  {
    path: 'house/edit/:id',
    component: HouseComponent,
  },
  {
    path: 'house/build',
    component: HouseComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
