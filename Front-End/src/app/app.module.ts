import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from './shared/sharedmodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,   
  ],  
  imports: [
    BrowserAnimationsModule,
	  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgxMaskModule.forRoot(options),
    SharedModule,
  ],
  exports: [    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
