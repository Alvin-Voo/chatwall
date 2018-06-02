import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as SearchActions from './store/search.actions';
import { User } from '../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchForm = new FormGroup({
    search: new FormControl()
  });
  searchFormSub: Subscription;
  usersListState: Observable<User[]>;
  searchErrorState: Observable<string>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new SearchActions.ClearSearch());

    this.searchFormSub = this.searchForm.valueChanges.pipe(
      debounceTime(200)
    ).subscribe((value)=>{
      console.log(value);
      if(value.search==''){
        this.store.dispatch(new SearchActions.ClearSearch());
      }
      if(value.search)this.store.dispatch(new SearchActions.Search(value.search));

    })

    this.usersListState = this.store.select('search','usersList');
    this.searchErrorState = this.store.select('search','search_fail_message');
  }

  convertToAge(date){
    const age = new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
    return age;
  }

  ngOnDestroy(){
    if(this.searchFormSub) this.searchFormSub.unsubscribe();
  }

}
