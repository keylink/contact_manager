import { Injectable, PipeTransform, Pipe } from '@angular/core';


import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Pipe({
    name: 'search'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {

  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }
}
