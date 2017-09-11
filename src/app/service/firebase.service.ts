import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  contacts: FirebaseListObservable<any[]>;
  contact: FirebaseObjectObservable<any>;

  constructor(private af: AngularFireDatabase, private jsonp: Jsonp) {
    this.contacts = this.af.list('/card') as FirebaseListObservable<Contact[]>
  }

  getListings() {
    return this.contacts;
  }

  getListingDetails(id) {
    this.contact = this.af.object('/card/' + id) as FirebaseObjectObservable<Contact>
    return this.contact
  }

  updateContact(id, contact) {
    return this.contacts.update(id, contact);
  }

  deleteListing(id) {
    return this.contacts.remove(id);
  }

}

interface Contact {
  name?: string;
}


