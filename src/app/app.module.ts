import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokescomponentComponent } from './components/jokescomponent/jokescomponent.component';
import { JokesserviceService } from './services/jokesservice.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JokescomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    JokesserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }