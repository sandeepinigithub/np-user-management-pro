import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { WorksComponent } from './works/works.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FeaturesComponent,
    WorksComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
  ],
  exports: []
})
export class HomeModule { }
