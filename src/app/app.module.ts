import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


import { ObjectListComponent } from './components/objects/object-list/object-list.component';
import { ObjectItemComponent } from './components/objects/object-item/object-item.component';

import { DataStorageService } from './services/data-storage.service';
import { ObjectDefinitionService } from './services/object-definition.service';
import { ObjectItemNewComponent } from './components/objects/object-item-new/object-item-new.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { CounterComponent } from './components/counter/counter.component';
import { MyCalendarComponent } from './components/my-calendar/my-calendar.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ObjectListComponent,
    ObjectItemComponent,
    ObjectItemNewComponent,
    HighlightDirective,
    FontSizeDirective,
    CounterComponent,
    MyCalendarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataStorageService, ObjectDefinitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
