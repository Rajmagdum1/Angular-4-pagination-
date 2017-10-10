import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PaginationComponent } from './pagination/pagination/pagination.page.component';

import { PaginationService } from './pagination/services/pagination.service'

@NgModule({
  declarations: [
    AppComponent, AppContentComponent, AppHeaderComponent,
    AppHomeComponent, AppFooterComponent, PaginationComponent
  ],
  providers: [PaginationService],
  imports: [
    BrowserModule, HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
