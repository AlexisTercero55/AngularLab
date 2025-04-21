import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeatureModuleModule } from './modules/feature-module/feature-module.module';
import { StoreComponent } from './components/store/store.component';
import { StoreModule } from './modules/store/store.module';

@NgModule({
  declarations: [
    //AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule, StoreModule //FormsModule, FeatureModuleModule, 
  ],
  providers: [],
  bootstrap: [StoreComponent]
})
export class AppModule { }
