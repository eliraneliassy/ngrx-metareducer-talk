import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import * as fromApp from '../store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<State>) { }
  ngOnInit(): void {
    this.store.dispatch(new fromApp.FetchFeed());

    this.items$ = this.store.pipe(
      select(fromApp.getFeed)
    );
  }

  onAddToCart(item: Item) {
    this.store.dispatch(new fromApp.AddToCart(item));
  }

}
