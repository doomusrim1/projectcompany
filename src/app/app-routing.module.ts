import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCarComponent } from './pages/admin/admin-car/admin-car.component';
import { AdminHumanComponent } from './pages/admin/admin-human/admin-human.component';
import { AdminItemComponent } from './pages/admin/admin-item/admin-item.component';
import { AdminMonneyAllComponent } from './pages/admin/admin-monney/admin-monney-all/admin-monney-all.component';
import { AdminMonneyComponent } from './pages/admin/admin-monney/admin-monney.component';
import { AdminSellComponent } from './pages/admin/admin-sell/admin-sell.component';
import { AdminStoreComponent } from './pages/admin/admin-store/admin-store.component';
import { HomeComponent } from './pages/home/home.component';
import { MoneyComponent } from './pages/user/money/money.component';
import { ItemComponent } from './pages/user/productitem/item/item.component';
import { RebealComponent } from './pages/user/productitem/rebeal/rebeal.component';
import { ReitemComponent } from './pages/user/productitem/reitem/reitem.component';
import { UserProfileComponent } from './pages/user/profile/user-profile/user-profile.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'user/money',component: MoneyComponent},
  {path: 'productitem/item',component:ItemComponent},
  {path: 'productitem/rebeal',component:RebealComponent},
  {path: 'productitem/reitem',component:ReitemComponent},
  {path: 'profile/user-profile',component:UserProfileComponent},

  {path: 'admin-money',component: AdminMonneyComponent},
  {path: 'admin-money-all',component: AdminMonneyAllComponent},
  {path: 'admin-item',component: AdminItemComponent},
  {path: 'admin-car',component: AdminCarComponent},
  {path: 'admin-human',component: AdminHumanComponent},
  {path: 'admin-store',component: AdminStoreComponent},
  {path: 'admin-sell',component: AdminSellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
