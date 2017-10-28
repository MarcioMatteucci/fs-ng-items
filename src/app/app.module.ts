import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { environment } from './../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

// Services
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'fs-ng-items'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
