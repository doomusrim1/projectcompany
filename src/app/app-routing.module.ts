import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMonneyAllComponent } from './pages/admin/admin-monney-all/admin-monney-all.component';
import { AdminMonneyComponent } from './pages/admin/admin-monney/admin-monney.component';
import { HomeComponent } from './pages/home/home.component';
import { RecarComponent } from './pages/user/car/recar/recar.component';
import { UpcarComponent } from './pages/user/car/upcar/upcar.component';
import { MoneyComponent } from './pages/user/money/money.component';
import { ItemComponent } from './pages/user/productitem/item/item.component';
import { RebealComponent } from './pages/user/productitem/rebeal/rebeal.component';
import { ReitemComponent } from './pages/user/productitem/reitem/reitem.component';
import { UserProfileComponent } from './pages/user/profile/user-profile/user-profile.component';
import { SaleAddmoneyComponent } from './pages/user/sale/sale-addmoney/sale-addmoney.component';
import { SaleMoneyComponent } from './pages/user/sale/sale-money/sale-money.component';
import { ViewCarComponent } from './pages/user/view/view-car/view-car.component';
import { ViewDowncarComponent } from './pages/user/view/view-downcar/view-downcar.component';
import { ViewDownitemComponent } from './pages/user/view/view-downitem/view-downitem.component';
import { ViewItemComponent } from './pages/user/view/view-item/view-item.component';
import { ViewMoneyComponent } from './pages/user/view/view-money/view-money.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'user/money',component: MoneyComponent},
  {path: 'productitem/item',component:ItemComponent},
  {path: 'productitem/rebeal',component:RebealComponent},
  {path: 'productitem/reitem',component:ReitemComponent},
  {path: 'profile/user-profile',component:UserProfileComponent},
  {path: 'car/user-upcar',component:UpcarComponent},
  {path: 'car/user-recar',component:RecarComponent},
  {path: 'sale/sale-money',component:SaleMoneyComponent},
  {path: 'sale/sale-addmoney',component:SaleAddmoneyComponent},
  {path: 'view/view-money',component:ViewMoneyComponent},
  {path: 'view/view-item',component:ViewItemComponent},
  {path: 'view/view-downitem',component:ViewDownitemComponent},
  {path: 'view/view-car',component:ViewCarComponent},
  {path: 'view/view-downcar',component:ViewDowncarComponent},

  {path: 'admin-money',component: AdminMonneyComponent},
  {path: 'admin-money-all',component: AdminMonneyAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
