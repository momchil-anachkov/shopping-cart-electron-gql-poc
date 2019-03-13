import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../lib/material.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainRoutingModule } from './main-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ShoppingModule } from '../feature/shopping/shopping.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    MainRoutingModule,
    SharedModule,
    TranslateModule,

    ShoppingModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule { }
