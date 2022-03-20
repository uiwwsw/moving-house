import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './routes/not-found/not-found.component'; // CLI imports router
// import { SignComponent } from './routes/sign/sign.component';

const routes: Routes = [
  {
    path: 'not-found',
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
  declarations: [NotFoundComponent],
})
export class AppRoutingModule {}
