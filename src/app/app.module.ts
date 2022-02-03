import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SecondTopNavBarCompnent } from './navigation/second.topnavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarCompnent,
    FooterComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
