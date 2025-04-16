import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeatureModuleModule } from './modules/feature-module/feature-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, FeatureModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
