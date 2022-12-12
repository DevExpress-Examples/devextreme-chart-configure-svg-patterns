import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule } from "devextreme-angular";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
