import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AppleComponent } from './apple/apple.component';
import { AsusLaptopComponent } from './asus-laptop/asus-laptop.component';
import { HaierWMComponent } from './haier-wm/haier-wm.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { OppoComponent } from './oppo/oppo.component';
import { ProductComponent } from './product.component';
import { SonyWMComponent } from './sony-wm/sony-wm.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { DellLaptopComponent } from './dell-laptop/dell-laptop.component';


const routes: Routes = [
      // use router-outlet inside the product component.
  { path : '',canActivate : [AuthGuard], component: ProductComponent, children : [
    { path : 'mobile', component: MobileComponent}, 
    { path : 'oppoMobile' , component: OppoComponent},
    { path : 'appleMobile' , component: AppleComponent },
    { path : 'laptop' , component: LaptopComponent },
    { path : 'dellLaptop' , component: DellLaptopComponent },
    { path : 'asusLaptop' , component: AsusLaptopComponent },
    { path : 'sonyWM' , component: SonyWMComponent },
    { path : 'HaierWM' , component: HaierWMComponent },
    { path : 'washingMachine', component: WashingMachineComponent }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { 
  constructor(){
    console.log('ProductsRoutingModule called');
    
  }
 }
