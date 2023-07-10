import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';
import { KeyboardComponent } from './Components/keyboard/keyboard.component';

@NgModule({
  declarations: [AppComponent, WrapperComponent, KeyboardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
