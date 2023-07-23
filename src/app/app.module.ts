import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModulesRoutingModule } from './ui-modules/ui-modules-routing.module';
import { FinanceModule } from './ui-modules/finance/finance.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiModulesRoutingModule, FinanceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
