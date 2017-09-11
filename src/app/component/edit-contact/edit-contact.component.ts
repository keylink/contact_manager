import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id;
  name;
  email;
  phone;
  username;
  website;
  avatar;

  city;
  country;
  state;
  streetA;
  streetB;
  streetC;
  streetD;
  lat;
  lng;

  company_name;
  company_catchPhrase;
  company_bs;

  account_name;
  account_account;
  account_amount;
  account_business;
  account_date;
  account_type;

  account_name2;
  account_account2;
  account_amount2;
  account_business2;
  account_date2;
  account_type2;

  account_name3;
  account_account3;
  account_amount3;
  account_business3;
  account_date3;
  account_type3;

  post_paragraph;
  post_sentence;
  post_sentences;
  post_word11;
  post_word12;
  post_word13;
  word1: Array<any> =[1,2,3];

  post_paragraph2;
  post_sentence2;
  post_sentences2;
  post_word21;
  post_word22;
  post_word23;
  word2: Array<any> =[1,2,3];

  post_paragraph3;
  post_sentence3;
  post_sentences3;
  post_word31;
  post_word32;
  post_word33;
  word3: Array<any> =[1,2,3];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing => {

      this.name = listing.name;
      this.email = listing.email;
      this.phone = listing.phone;
      this.username = listing.username;
      this.website = listing.website;
      this.avatar = listing.avatar;

      this.city = listing.address.city;
      this.country = listing.address.country;
      this.state = listing.address.state;
      this.streetA = listing.address.streetA;
      this.streetB = listing.address.streetB;
      this.streetC = listing.address.streetC;
      this.streetD = listing.address.streetD;
      this.lat = listing.address.geo.lat;
      this.lng = listing.address.geo.lng;

      this.company_name = listing.company.name;
      this.company_catchPhrase = listing.company.catchPhrase;
      this.company_bs = listing.company.bs;

      this.account_name = listing.accountHistory[0].name;
      this.account_account = listing.accountHistory[0].account;
      this.account_amount = listing.accountHistory[0].amount;
      this.account_business = listing.accountHistory[0].business;
      this.account_date = listing.accountHistory[0].date;
      this.account_type = listing.accountHistory[0].type;

      this.account_name2 = listing.accountHistory[1].name;
      this.account_account2 = listing.accountHistory[1].account;
      this.account_amount2 = listing.accountHistory[1].amount;
      this.account_business2 = listing.accountHistory[1].business;
      this.account_date2 = listing.accountHistory[1].date;
      this.account_type2 = listing.accountHistory[1].type;

      this.account_name3 = listing.accountHistory[2].name;
      this.account_account3 = listing.accountHistory[2].account;
      this.account_amount3 = listing.accountHistory[2].amount;
      this.account_business3 = listing.accountHistory[2].business;
      this.account_date3 = listing.accountHistory[2].date;
      this.account_type3 = listing.accountHistory[2].type;

      this.post_paragraph = listing.posts[0].paragraph;
      this.post_sentence = listing.posts[0].sentence;
      this.post_sentences = listing.posts[0].sentences;
      this.post_word11 = listing.posts[0].words[0];
      this.post_word12 = listing.posts[0].words[1];
      this.post_word13 = listing.posts[0].words[2];
      
      this.post_paragraph2 = listing.posts[1].paragraph;
      this.post_sentence2 = listing.posts[1].sentence;
      this.post_sentences2 = listing.posts[1].sentences;
      this.post_word21 = listing.posts[1].words[0];
      this.post_word22 = listing.posts[1].words[1];
      this.post_word23 = listing.posts[1].words[2];
      
      this.post_paragraph3 = listing.posts[2].paragraph;
      this.post_sentence3 = listing.posts[2].sentence;
      this.post_sentences3 = listing.posts[2].sentences;
      this.post_word31 = listing.posts[2].words[0];
      this.post_word32 = listing.posts[2].words[1];
      this.post_word33 = listing.posts[2].words[2];
      
    });
  }

  onEditSubmit() {
    //creating  array posts
    this.word1[0] = this.post_word11
    this.word1[1] = this.post_word12
    this.word1[2] = this.post_word13

    this.word2[0] = this.post_word21
    this.word2[1] = this.post_word22
    this.word2[2] = this.post_word23

    this.word3[0] = this.post_word31
    this.word3[1] = this.post_word32
    this.word3[2] = this.post_word33

    //creating nested object
    const contact = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      username: this.username,
      website: this.website,
      avatar: this.avatar,
      address: {
          city: this.city,
          country: this.country,
          state: this.state,
          streetA: this.streetA,
          streetB: this.streetB,
          streetC: this.streetC,
          streetD: this.streetD,
          geo: {
              lat: this.lat,
              lng: this.lng
          }
        },
      company: {
          name: this.company_name,
          catchPhrase: this.company_catchPhrase,
          bs: this.company_bs
      },
      accountHistory: [
          {
              name: this.account_name,
              account: this.account_account,
              amount: this.account_amount,
              business: this.account_business,
              date: this.account_date,
              type: this.account_type
          },
          {
              name: this.account_name2,
              account: this.account_account2,
              amount: this.account_amount2,
              business: this.account_business2,
              date: this.account_date2,
              type: this.account_type2
          },
          {
              name: this.account_name3,
              account: this.account_account3,
              amount: this.account_amount3,
              business: this.account_business3,
              date: this.account_date3,
              type: this.account_type3
          }
      ],
      posts: [
          { 
              paragraph: this.post_paragraph,
              sentence: this.post_sentence,
              sentences: this.post_sentences,
              words: this.word1
          },
          { 
              paragraph: this.post_paragraph2,
              sentence: this.post_sentence2,
              sentences: this.post_sentences2,
              words: this.word2
          },
          { 
              paragraph: this.post_paragraph3,
              sentence: this.post_sentence3,
              sentences: this.post_sentences3,
              words: this.word3
          }   
      ]
    }

    this.firebaseService.updateContact(this.id, contact);
    this.router.navigate(['/contacts']);
  }
}

    
      


