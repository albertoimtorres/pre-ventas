import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {MenubarModule} from 'primeng/menubar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreventaComponent } from './components/preventa/preventa.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CreacionComponent } from './components/creacion/creacion.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PreventaComponent,
    ListadoComponent,
    CreacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    BreadcrumbModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
