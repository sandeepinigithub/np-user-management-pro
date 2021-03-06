import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './home.component';
import { FeaturesComponent } from './features/features.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FeaturesComponent,
    WorksComponent,
    ServicesComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    FormsModule,
  ],
  exports: []
})
export class HomeModule { }
