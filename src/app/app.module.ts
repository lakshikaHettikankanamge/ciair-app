import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PeopleComponent } from './Components/people/people.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { AboutComponent } from './Components/about/about.component';
import { PeoplePopUpComponent } from './Components/people/people-pop-up/people-pop-up.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ResearchComponent } from './Components/research/research.component';
import { ArticlePopupComponent } from './Components/research/article-popup/article-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    DialogComponent,
    AboutComponent,
    PeoplePopUpComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ResearchComponent,
    ArticlePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    NgApexchartsModule,
    ToastrModule.forRoot(),
    SlickCarouselModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
