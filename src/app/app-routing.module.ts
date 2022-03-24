import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { IndexComponent } from './routes/index/index.component'; // CLI imports router
import { AdminComponent } from './routes/admin/admin.component';

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
    path: '**',
    component: NotFoundComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent, IndexComponent],
})
export class AppRoutingModule {}
