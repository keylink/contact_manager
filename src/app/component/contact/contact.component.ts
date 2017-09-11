import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id: any;
  contact: any;
  imageUrl: any;

  constructor(
    private FirebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.FirebaseService.getListingDetails(this.id).subscribe(contact => {
      this.contact = contact;
    })
  }

  onDelete() {
    this.FirebaseService.deleteListing(this.id);
  }
}
