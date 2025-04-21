import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureModuleModule } from '../feature-module/feature-module.module';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from 'src/app/components/store/store.component';



@NgModule({
  imports: [FeatureModuleModule, BrowserModule, FormsModule],
  //declarations: [StoreComponent],
  //exports: [StoreComponent]
})
export class StoreModule { }
