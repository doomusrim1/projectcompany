import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCarGetAllComponent } from './pages/admin/admin-car/admin-car-get-all/admin-car-get-all.component';
import { AdminCarGetComponent } from './pages/admin/admin-car/admin-car-get/admin-car-get.component';
import { AdminCarGiveAllComponent } from './pages/admin/admin-car/admin-car-give-all/admin-car-give-all.component';
import { AdminCarNameAllComponent } from './pages/admin/admin-car/admin-car-name-all/admin-car-name-all.component';
import { AdminCarComponent } from './pages/admin/admin-car/admin-car.component';
import { AdminHumanEditProfileComponent } from './pages/admin/admin-human/admin-human-edit-profile/admin-human-edit-profile.component';
import { AdminHumanComponent } from './pages/admin/admin-human/admin-human.component';
import { AdminItemAllGetComponent } from './pages/admin/admin-item/admin-item-all-get/admin-item-all-get.component';
import { AdminItemAllGiveComponent } from './pages/admin/admin-item/admin-item-all-give/admin-item-all-give.component';
import { AdminItemGetComponent } from './pages/admin/admin-item/admin-item-get/admin-item-get.component';
import { AdminItemComponent } from './pages/admin/admin-item/admin-item.component';
import { AdminMonneyAllComponent } from './pages/admin/admin-monney/admin-monney-all/admin-monney-all.component';
import { AdminMonneyComponent } from './pages/admin/admin-monney/admin-monney.component';
import { AdminSellAllComponent } from './pages/admin/admin-sell/admin-sell-all/admin-sell-all.component';
import { AdminSellComponent } from './pages/admin/admin-sell/admin-sell.component';
import { AdminStorePriceComponent } from './pages/admin/admin-store/admin-store-price/admin-store-price.component';
import { AdminStoreComponent } from './pages/admin/admin-store/admin-store.component';
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
  {path: 'admin-item',component: AdminItemComponent},
  {path: 'admin-item-get',component: AdminItemGetComponent},
  {path: 'admin-item-all-give',component: AdminItemAllGiveComponent},
  {path: 'admin-item-all-get',component: AdminItemAllGetComponent},
  {path: 'admin-car',component: AdminCarComponent},
  {path: 'admin-car-get',component: AdminCarGetComponent},
  {path: 'admin-car-give-all',component: AdminCarGiveAllComponent},
  {path: 'admin-car-get-all',component: AdminCarGetAllComponent},
  {path: 'admin-car-name-all',component: AdminCarNameAllComponent},
  {path: 'admin-human',component: AdminHumanComponent},
  {path: 'admin-human-edit-profile',component: AdminHumanEditProfileComponent},
  {path: 'admin-store',component: AdminStoreComponent},
  {path: 'admin-store-price',component: AdminStorePriceComponent},
  {path: 'admin-sell',component: AdminSellComponent},
  {path: 'admin-sell-all',component: AdminSellAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
