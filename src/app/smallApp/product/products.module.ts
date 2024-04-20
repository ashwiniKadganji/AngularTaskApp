import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { ProductsRoutingModule } from './products-routing.module';
import { AppleComponent } from './apple/apple.component';
import { AsusLaptopComponent } from './asus-laptop/asus-laptop.component';
import { DellLaptopComponent } from './dell-laptop/dell-laptop.component';
import { HaierWMComponent } from './haier-wm/haier-wm.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { OppoComponent } from './oppo/oppo.component';
import { ProductComponent } from './product.component';
import { SonyWMComponent } from './sony-wm/sony-wm.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';




@NgModule({
  declarations: [
    MobileComponent,
    LaptopComponent,
    WashingMachineComponent,
    OppoComponent,
    AppleComponent,
    DellLaptopComponent,
    AsusLaptopComponent,
    SonyWMComponent,
    HaierWMComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatMenuModule,
    MatButtonModule,

  ]
})
export class ProductsModule {
  constructor(){
    console.log('productModule called');
    
  }
 }
