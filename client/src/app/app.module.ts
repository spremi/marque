import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookmarkComponent } from './elements/bookmark/bookmark.component';
import { CategoryComponent } from './elements/category/category.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookmarkComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
