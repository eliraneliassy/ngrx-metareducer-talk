import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from '../reducers';
import * as fromApp from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<Item[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.cartItems$ = this.store.pipe(
      select(fromApp.getShoppingCart)
    );

  }

}
