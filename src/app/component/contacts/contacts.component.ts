import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [FirebaseService]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  query: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(contacts => {
      this.contacts = contacts;
      console.log(contacts);
    })
  }

  sort() {
    this.contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
  }

  sort123() {
    this.contacts.sort((a, b) => {
      if (a.id < b.id) return -1;
      else if (a.id > b.id) return 1;
      else return 0;
    });
  }

}

