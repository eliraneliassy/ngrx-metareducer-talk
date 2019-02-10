import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() showAddBtn: boolean;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addToCart.emit(this.item);
  }

}
