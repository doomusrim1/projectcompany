import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMonneyComponent } from './pages/admin/admin-monney/admin-monney.component';
import { HomeComponent } from './pages/home/home.component';
import { MoneyComponent } from './pages/user/money/money.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'user/money',component: MoneyComponent},

  {path: 'admin/admin-money',component: AdminMonneyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
