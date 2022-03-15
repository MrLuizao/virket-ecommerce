import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';

@NgModule({
  declarations: [
    LoaderComponent,
    CartIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    CartIconComponent
  ],
})
export class ComponentsModule { }
