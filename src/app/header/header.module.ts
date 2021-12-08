import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';
import { NoticiaPage } from '../noticia/noticia.page';
import { HeaderNoticiaPage } from '../header-noticia/header-noticia.page';
import { CardsPage } from '../cards/cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule
  ],
  declarations: [NoticiaPage, HeaderPage, HeaderNoticiaPage, CardsPage]
})
export class HeaderPageModule {}
