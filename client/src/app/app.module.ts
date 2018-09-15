import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  BookmarkListComponent,
} from './elements/bookmark-list/bookmark-list.component';
import { BookmarkComponent } from './elements/bookmark/bookmark.component';
import {
  CategoryListComponent,
} from './elements/category-list/category-list.component';
import { CategoryComponent } from './elements/category/category.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { HintComponent } from './elements/hint/hint.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookmarkComponent,
    CategoryComponent,
    BookmarkListComponent,
    CategoryListComponent,
    HintComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
