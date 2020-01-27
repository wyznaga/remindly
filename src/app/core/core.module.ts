import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {  }

}
