import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './modals/navbar/admin/admin.component';
import { UserComponent } from './modals/navbar/user/user.component';
import { MoneyComponent } from './pages/user/money/money.component';
import { ItemComponent } from './pages/user/productitem/item/item.component';
import { RebealComponent } from './pages/user/productitem/rebeal/rebeal.component';
import {FormsModule} from '@angular/forms';
import { AdminMonneyComponent } from './pages/admin/admin-monney/admin-monney.component';
import { ModalBillComponent } from './modals/navbar/user/modal/modal-money/modal-bill/modal-bill.component';
import { ReitemComponent } from './pages/user/productitem/reitem/reitem.component';
import { UserProfileComponent } from './pages/user/profile/user-profile/user-profile.component';
import { AdminMonneyAllComponent } from './pages/admin/admin-monney/admin-monney-all/admin-monney-all.component';
import { MenuBerMonneyComponent } from './modals/navbar/admin/menu-ber/menu-ber-monney/menu-ber-monney.component';
import { AdminItemComponent } from './pages/admin/admin-item/admin-item.component';
import { AdminCarComponent } from './pages/admin/admin-car/admin-car.component';
import { AdminHumanComponent } from './pages/admin/admin-human/admin-human.component';
import { AdminStoreComponent } from './pages/admin/admin-store/admin-store.component';
import { AdminSellComponent } from './pages/admin/admin-sell/admin-sell.component';
import { AdminItemGetComponent } from './pages/admin/admin-item/admin-item-get/admin-item-get.component';
import { AdminItemAllGiveComponent } from './pages/admin/admin-item/admin-item-all-give/admin-item-all-give.component';
import { UpcarComponent } from './pages/user/car/upcar/upcar.component';
import { RecarComponent } from './pages/user/car/recar/recar.component';
import { SaleMoneyComponent } from './pages/user/sale/sale-money/sale-money.component';
import { SaleAddmoneyComponent } from './pages/user/sale/sale-addmoney/sale-addmoney.component';
import { ViewMoneyComponent } from './pages/user/view/view-money/view-money.component';
import { ViewItemComponent } from './pages/user/view/view-item/view-item.component';
import { ViewDownitemComponent } from './pages/user/view/view-downitem/view-downitem.component';
import { ViewCarComponent } from './pages/user/view/view-car/view-car.component';
import { ViewDowncarComponent } from './pages/user/view/view-downcar/view-downcar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabItemComponent } from './modals/navbar/user/tab/tab-item/tab-item.component';
import { TabCarComponent } from './modals/navbar/user/tab/tab-car/tab-car.component';
import { TabSaleComponent } from './modals/navbar/user/tab/tab-sale/tab-sale.component';
import { TabViewComponent } from './modals/navbar/user/tab/tab-view/tab-view.component';
import { ModalMonneyComponent } from './modals/navbar/user/modal/modal-money/modal-monney/modal-monney.component';
import { ModalItemComponent } from './modals/navbar/user/modal/modal-item/modal-item/modal-item.component';
import { ModalDownitemComponent } from './modals/navbar/user/modal/modal-item/modal-downitem/modal-downitem.component';
import { ModalDataitemComponent } from './modals/navbar/user/modal/modal-item/modal-dataitem/modal-dataitem.component';
import { ModalCarComponent } from './modals/navbar/user/modal/car/modal-car/modal-car.component';
import { ModalDowncarComponent } from './modals/navbar/user/modal/car/modal-downcar/modal-downcar.component';
import { ModalDatacarComponent } from './modals/navbar/user/modal/car/modal-datacar/modal-datacar.component';
import { ModalRoundComponent } from './modals/navbar/user/modal/sale/modal-round/modal-round.component';
import { ModalCostComponent } from './modals/navbar/user/modal/sale/modal-cost/modal-cost.component';
import { AdminItemAllGetComponent } from './pages/admin/admin-item/admin-item-all-get/admin-item-all-get.component';
import { ModalPasswordComponent } from './modals/navbar/user/modal/profile/modal-password/modal-password.component';
import { ModalEditprofileComponent } from './modals/navbar/user/modal/profile/modal-editprofile/modal-editprofile.component';
import { MenuBerItemComponent } from './modals/navbar/admin/menu-ber/menu-ber-item/menu-ber-item.component';
import { MenuBerCarComponent } from './modals/navbar/admin/menu-ber/menu-ber-car/menu-ber-car.component';
import { AdminCarGetComponent } from './pages/admin/admin-car/admin-car-get/admin-car-get.component';
import { AdminCarGiveAllComponent } from './pages/admin/admin-car/admin-car-give-all/admin-car-give-all.component';
import { AdminCarGetAllComponent } from './pages/admin/admin-car/admin-car-get-all/admin-car-get-all.component';
import { AdminCarNameAllComponent } from './pages/admin/admin-car/admin-car-name-all/admin-car-name-all.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http'
import { AdminHumanEditProfileComponent } from './pages/admin/admin-human/admin-human-edit-profile/admin-human-edit-profile.component';
import { MenuBerHumanComponent } from './modals/navbar/admin/menu-ber/menu-ber-human/menu-ber-human.component';
import { AdminStorePriceComponent } from './pages/admin/admin-store/admin-store-price/admin-store-price.component';
import { MenuBerStoreComponent } from './modals/navbar/admin/menu-ber/menu-ber-store/menu-ber-store.component';
import { AdminSellAllComponent } from './pages/admin/admin-sell/admin-sell-all/admin-sell-all.component';
import { MenuBerSellComponent } from './modals/navbar/admin/menu-ber/menu-ber-sell/menu-ber-sell.component';
import { ModalAddcarComponent } from './modals/navbar/admin/modal/modal-car/modal-addcar/modal-addcar.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    MoneyComponent,
    ItemComponent,
    RebealComponent,
    AdminMonneyComponent,
    ModalBillComponent,
    ReitemComponent,
    UserProfileComponent,
    AdminMonneyAllComponent,
    MenuBerMonneyComponent,
    AdminItemComponent,
    AdminCarComponent,
    AdminHumanComponent,
    AdminStoreComponent,
    AdminSellComponent,
    AdminItemGetComponent,
    AdminItemAllGiveComponent,
    UpcarComponent,
    RecarComponent,
    SaleMoneyComponent,
    SaleAddmoneyComponent,
    ViewMoneyComponent,
    ViewItemComponent,
    ViewDownitemComponent,
    ViewCarComponent,
    ViewDowncarComponent,
    TabItemComponent,
    TabCarComponent,
    TabSaleComponent,
    TabViewComponent,
    ModalMonneyComponent,
    ModalItemComponent,
    ModalDownitemComponent,
    ModalDataitemComponent,
    ModalCarComponent,
    ModalDowncarComponent,
    ModalDatacarComponent,
    ModalRoundComponent,
    ModalCostComponent,
    AdminItemAllGetComponent,
    ModalPasswordComponent,
    ModalEditprofileComponent,
    MenuBerItemComponent,
    MenuBerCarComponent,
    AdminCarGetComponent,
    AdminCarGiveAllComponent,
    AdminCarGetAllComponent,
    AdminCarNameAllComponent,
    AdminHumanEditProfileComponent,
    MenuBerHumanComponent,
    AdminStorePriceComponent,
    MenuBerStoreComponent,
    AdminSellAllComponent,
    MenuBerSellComponent,
    ModalAddcarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
