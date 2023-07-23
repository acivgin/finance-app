import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModulesRoutingModule } from './ui-modules-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiModulesRoutingModule, CoreModule, SharedModule],
})
export class UiModulesModule {}
