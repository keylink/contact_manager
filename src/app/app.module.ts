import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './service/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { SearchFilterPipe } from './component/contacts/filter.pipe';

import { AccordionModule } from 'ngx-bootstrap/accordion';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD2Cxb_6MgJIeVWGuTjGeOCxOBcbqkIuYE",
    authDomain: "card-39bc0.firebaseapp.com",
    databaseURL: "https://card-39bc0.firebaseio.com",
    projectId: "card-39bc0",
    storageBucket: "card-39bc0.appspot.com",
    messagingSenderId: "1048589527232"
  }
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'edit-contact/:id', component: EditContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ContactComponent,
    NavbarComponent,
    EditContactComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AccordionModule.forRoot(),
    AngularFireAuthModule,
    JsonpModule,
    FormsModule
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
