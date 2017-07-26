// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HistoryComponent } from './components/history/history.component';
import { AdminComponent } from './components/admin/admin.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { BasketComponent } from './components/basket/basket.component';

// services
import { ItemService } from './services/item.service';
import { ReviewService } from './services/reviews.service';

// pipes
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'reviews', component: ReviewsComponent },
  {path: 'events', component: EventsComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'admin/:id', component: AdminInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReviewsComponent,
    HistoryComponent,
    AdminComponent,
    EventsComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    AdminInfoComponent,
    BasketComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ ItemService, ReviewService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
